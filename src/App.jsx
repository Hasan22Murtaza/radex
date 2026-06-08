import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VisualNav from './components/VisualNav';
import Benefits from './components/Benefits';
import Planning from './components/Planning';
import Process from './components/Process';
import Costs from './components/Costs';
import Examples from './components/Examples';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';

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
        }
      });
    }, observerOptions);

    // Track all elements marked for scroll animations
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <VisualNav />
        <Benefits />
        <Planning />
        <Process />
        <Costs />
        <Examples />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <MobileStickyCTA />
      <FloatingWhatsApp />
    </div>
  );
}
