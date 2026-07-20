import { useEffect, useRef } from 'react';
import useSeo, { buildFaqSchema } from '../useSeo';
import migrated from '../data/migratedServices.json';
import '../data/legacyServiceStyles.css';
import '../data/migratedServicePage.css';

/**
 * Migrated service page – original hero untouched; remaining sections use a
 * clean alternating image ↔ text layout. Content is preserved as scraped.
 */

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
      contentSections.push({ html: block, image: null });
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

export default function MigratedServicePage({ slug }) {
  const page = migrated.pages[slug];
  const contentRef = useRef(null);
  const faqs = page ? extractFaqs(page.contentHtml) : [];
  const parsed = page?.contentHtml ? parsePageContent(page.contentHtml) : null;

  useSeo({
    title: page?.title,
    description: page?.description,
    path: `/${slug}`,
    jsonLd: faqs.length ? [buildFaqSchema(faqs)] : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
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
                <div
                  className="msp-copy"
                  dangerouslySetInnerHTML={{ __html: section.html }}
                />
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
    </main>
  );
}
