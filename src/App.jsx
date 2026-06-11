import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoreHighlights from './components/CoreHighlights';
import ServicesOverview from './components/ServicesOverview';
import InteractiveHub from './components/InteractiveHub';
import Examples from './components/Examples';
import ReviewsMarquee from './components/ReviewsMarquee';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';

export default function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          entry.target.__revealed = true;
        }
      });
    }, observerOptions);

    // Track all elements marked for scroll animations
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // MutationObserver to prevent React from stripping 'revealed' on re-render
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target;
          if (target.__revealed && !target.classList.contains('revealed')) {
            target.classList.add('revealed');
          }
        }
      });
    });

    mutationObserver.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['class']
    });

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <CoreHighlights />
        <ServicesOverview />
        <InteractiveHub />
        <Examples />
        <ReviewsMarquee />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <MobileStickyCTA />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
