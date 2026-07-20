import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import useSeo, { buildFaqSchema } from '../useSeo';
import migrated from '../data/migratedServices.json';
import '../data/legacyServiceStyles.css';
import '../data/migratedServicePage.css';

/**
 * Migrated service page – original hero untouched; remaining sections use a
 * clean alternating image ↔ text layout. Long copy is truncated with
 * "Weiterlesen" that opens a side drawer so the page stays scroll-friendly.
 */

const PREVIEW_PARAGRAPHS = 2;
const LONG_SECTION_CHARS = 700;

function extractFaqs(html) {
  if (!html || !/faq-list/.test(html)) return [];
  const questions = [...html.matchAll(/<div class="faq-question">([\s\S]*?)<span class="faq-icon"/gi)].map((x) =>
    x[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  );
  const answers = [...html.matchAll(/<div class="faq-answer">([\s\S]*?)<\/div>\s*<\/div>/gi)].map((x) =>
    x[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  );
  return questions.map((q, i) => ({ q, a: answers[i] || '' })).filter((f) => f.q);
}

/** Split HTML into top-level element blocks (depth-aware). */
function splitTopLevelBlocks(html) {
  const blocks = [];
  const re = /<(div|section|article)\b[^>]*>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    const tag = match[1].toLowerCase();
    const start = match.index;
    const openEnd = html.indexOf('>', start) + 1;
    const tagRe = new RegExp(`</?${tag}\\b[^>]*>`, 'gi');
    tagRe.lastIndex = openEnd;
    let depth = 1;
    let t;
    while ((t = tagRe.exec(html)) !== null) {
      depth += t[0][1] === '/' ? -1 : 1;
      if (depth === 0) {
        blocks.push(html.slice(start, t.index + t[0].length));
        re.lastIndex = t.index + t[0].length;
        break;
      }
    }
  }
  return blocks;
}

function extractImg(html) {
  const m = html.match(/<img\b[^>]*>/i);
  if (!m) return null;
  const src = (m[0].match(/\bsrc="([^"]+)"/i) || [])[1];
  const alt = (m[0].match(/\balt="([^"]*)"/i) || [])[1] || '';
  if (!src) return null;
  return { src, alt, html: m[0] };
}

function classifyBlock(html) {
  if (/class="[^"]*page-hero/i.test(html)) return 'hero';
  if (/class="[^"]*content-img-wrap/i.test(html) || /^<div[^>]*>\s*<img\b/i.test(html.trim())) return 'image';
  if (/class="[^"]*faq-section/i.test(html) || /class="[^"]*faq-list/i.test(html)) return 'faq';
  if (/id="kontakt-formular"/i.test(html) || /class="[^"]*cta-form-wrap/i.test(html)) return 'contact';
  if (/class="[^"]*(?:intro-section|section)\b/i.test(html)) return 'content';
  if (/<h[12]\b/i.test(html) || /class="[^"]*section-label/i.test(html)) return 'content';
  return 'other';
}

function plainText(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractHeading(html) {
  const h2 = (html.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/i) || [])[1];
  if (h2) return plainText(h2);
  const h3 = (html.match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/i) || [])[1];
  if (h3) return plainText(h3);
  const label = (html.match(/class="section-label"[^>]*>([\s\S]*?)<\/div>/i) || [])[1];
  return label ? plainText(label) : 'Weitere Informationen';
}

/**
 * Build a short on-page preview for long sections: label + heading + first
 * N paragraphs. Full HTML stays available for the side drawer (and SEO).
 */
function buildSectionPreview(html) {
  const paragraphs = [...html.matchAll(/<p\b[^>]*>[\s\S]*?<\/p>/gi)];
  const chars = plainText(html).length;
  const isLong = chars >= LONG_SECTION_CHARS && paragraphs.length > PREVIEW_PARAGRAPHS;

  if (!isLong) {
    return {
      isLong: false,
      previewHtml: html,
      fullHtml: html,
      title: extractHeading(html),
      ctaHtml: '',
    };
  }

  const label = (html.match(/<div[^>]*class="[^"]*section-label[^"]*"[^>]*>[\s\S]*?<\/div>/i) || [])[0] || '';
  const heading =
    (html.match(/<h2\b[^>]*>[\s\S]*?<\/h2>/i) || [])[0] ||
    (html.match(/<h3\b[^>]*>[\s\S]*?<\/h3>/i) || [])[0] ||
    '';
  const previewParas = paragraphs
    .slice(0, PREVIEW_PARAGRAPHS)
    .map((m) => m[0])
    .join('\n');
  const ctaHtml =
    (html.match(/<a\b[^>]*class="[^"]*btn-primary[^"]*"[^>]*>[\s\S]*?<\/a>/i) || [])[0] || '';

  return {
    isLong: true,
    previewHtml: `${label}${heading}${previewParas}`,
    fullHtml: html,
    title: extractHeading(html),
    ctaHtml,
  };
}

function parsePageContent(contentHtml) {
  const blocks = splitTopLevelBlocks(contentHtml);
  let hero = null;
  let faq = null;
  let contact = null;
  const contentSections = [];
  const contentImages = [];

  for (const block of blocks) {
    const type = classifyBlock(block);

    if (type === 'hero') {
      hero = {
        html: block,
        image: extractImg(block),
        label: ((block.match(/class="section-label"[^>]*>([\s\S]*?)<\/div>/i) || [])[1] || '')
          .replace(/<[^>]+>/g, '')
          .trim(),
        h1: ((block.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '')
          .replace(/<[^>]+>/g, '')
          .trim(),
        lead: ((block.match(/<p[^>]*>([\s\S]*?)<\/p>/i) || [])[1] || '')
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim(),
        ctaHtml: (block.match(/<a\b[^>]*class="[^"]*btn-primary[^"]*"[^>]*>[\s\S]*?<\/a>/i) || [])[0] || '',
      };
      continue;
    }

    if (type === 'image') {
      const img = extractImg(block);
      if (img) contentImages.push(img);
      continue;
    }

    if (type === 'faq') {
      faq = block;
      continue;
    }

    if (type === 'contact') {
      contact = block;
      continue;
    }

    if (type === 'content') {
      contentSections.push({ html: block, image: null, ...buildSectionPreview(block) });
    }
  }

  const pool = contentImages.length
    ? contentImages
    : hero?.image
      ? [hero.image]
      : [];

  contentSections.forEach((section, i) => {
    if (pool.length) section.image = pool[i % pool.length];
  });

  return { hero, contentSections, faq, contact };
}

/** Section 1: image left; Section 2: text left; then alternate. */
function sectionLayout(index) {
  return index % 2 === 0 ? 'image-left' : 'text-left';
}

function stripDrawerChrome(html) {
  let out = html.replace(/<div[^>]*class="[^"]*section-label[^"]*"[^>]*>[\s\S]*?<\/div>/i, '');
  if (/<h2\b/i.test(out)) {
    out = out.replace(/<h2\b[^>]*>[\s\S]*?<\/h2>/i, '');
  } else {
    out = out.replace(/<h3\b[^>]*>[\s\S]*?<\/h3>/i, '');
  }
  return out;
}

function MspReadMoreDrawer({ open, title, html, onClose, panelId }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const bodyHtml = html ? stripDrawerChrome(html) : '';

  return (
    <div className={`msp-drawer-root${open ? ' open' : ''}`} aria-hidden={!open}>
      <button
        type="button"
        className="msp-drawer-backdrop"
        aria-label="Hintergrund schließen"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />
      <aside
        id={panelId}
        className="msp-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${panelId}-title`}
      >
        <div className="msp-drawer-header">
          <h2 id={`${panelId}-title`} className="msp-drawer-title">
            {title}
          </h2>
          <button type="button" className="msp-drawer-close" aria-label="Schließen" onClick={onClose}>
            <X size={22} />
          </button>
        </div>
        <div
          className="msp-drawer-body msp-copy"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      </aside>
    </div>
  );
}

export default function MigratedServicePage({ slug }) {
  const page = migrated.pages[slug];
  const contentRef = useRef(null);
  const faqs = page ? extractFaqs(page.contentHtml) : [];
  const parsed = page?.contentHtml ? parsePageContent(page.contentHtml) : null;
  const [drawer, setDrawer] = useState(null);
  const closeDrawer = useCallback(() => setDrawer(null), []);

  useSeo({
    title: page?.title,
    description: page?.description,
    path: `/${slug}`,
    jsonLd: faqs.length ? [buildFaqSchema(faqs)] : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setDrawer(null);
  }, [slug]);

  useEffect(() => {
    if (!page?.css) return undefined;
    const style = document.createElement('style');
    style.setAttribute('data-migrated-page', slug);
    style.textContent = page.css;
    document.head.appendChild(style);
    return () => style.remove();
  }, [slug, page?.css]);

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return undefined;
    const onClick = (e) => {
      const question = e.target.closest('.faq-question');
      if (!question || !root.contains(question)) return;
      const item = question.closest('.faq-item');
      if (item) item.classList.toggle('open');
    };
    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, [slug, page?.contentHtml]);

  if (!page || !parsed) return null;

  const { hero, contentSections, faq, contact } = parsed;
  const drawerOpen = Boolean(drawer);

  return (
    <main className="migrated-service-page msp" ref={contentRef}>
      <div className="radex-legacy msp-root">
        {hero && (
          <section className="msp-banner">
            <div className="msp-banner-inner">
              <div className="msp-banner-copy">
                {hero.label && <div className="msp-banner-eyebrow">{hero.label}</div>}
                {hero.h1 && <h1 className="msp-banner-title">{hero.h1}</h1>}
                {hero.lead && <p className="msp-banner-lead">{hero.lead}</p>}
                {hero.ctaHtml && (
                  <div
                    className="msp-banner-cta"
                    dangerouslySetInnerHTML={{ __html: hero.ctaHtml }}
                  />
                )}
              </div>
              {hero.image && (
                <div className="msp-banner-media">
                  <img
                    src={hero.image.src}
                    alt={hero.image.alt}
                    fetchPriority="high"
                    loading="eager"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {contentSections.map((section, index) => {
          const layout = sectionLayout(index);
          const tint = index % 2 === 1 ? 'msp-section--tint' : '';
          const panelId = `msp-section-drawer-${index}`;
          return (
            <section
              key={`msp-sec-${index}`}
              className={`msp-section msp-section--${layout} ${tint}`.trim()}
            >
              <div className="msp-section-inner">
                {section.image && (
                  <div className="msp-media">
                    <img src={section.image.src} alt={section.image.alt} loading="lazy" />
                  </div>
                )}
                <div className="msp-copy">
                  <div dangerouslySetInnerHTML={{ __html: section.previewHtml }} />
                  {section.isLong && (
                    <>
                      <button
                        type="button"
                        className="msp-read-more"
                        aria-haspopup="dialog"
                        aria-expanded={drawer?.index === index}
                        aria-controls={panelId}
                        onClick={() =>
                          setDrawer({
                            index,
                            title: section.title,
                            html: section.fullHtml,
                            panelId,
                          })
                        }
                      >
                        Weiterlesen
                      </button>
                      {section.ctaHtml && (
                        <div
                          className="msp-copy-cta"
                          dangerouslySetInnerHTML={{ __html: section.ctaHtml }}
                        />
                      )}
                    </>
                  )}
                </div>
              </div>
            </section>
          );
        })}

        {faq && (
          <section
            className="msp-faq"
            dangerouslySetInnerHTML={{ __html: faq }}
          />
        )}

        {contact && (
          <section
            className="msp-contact"
            dangerouslySetInnerHTML={{ __html: contact }}
          />
        )}
      </div>

      <MspReadMoreDrawer
        open={drawerOpen}
        title={drawer?.title || 'Weitere Informationen'}
        html={drawer?.html || ''}
        panelId={drawer?.panelId || 'msp-section-drawer'}
        onClose={closeDrawer}
      />
    </main>
  );
}
