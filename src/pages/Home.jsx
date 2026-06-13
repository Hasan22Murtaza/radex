import '../home.css';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import ProjectHub from '../components/ProjectHub';
import VideoSection from '../components/VideoSection';
import Examples from '../components/Examples';
import ReviewsMarquee from '../components/ReviewsMarquee';
import FaqContactSplit from '../components/FaqContactSplit';
import ContactForm from '../components/ContactForm';
import SeoAccordion from '../components/SeoAccordion';

export default function Home() {
  return (
    <main style={{ flexGrow: 1 }}>
      <Hero />
      <ServicesOverview />
      <ProjectHub />
      <VideoSection />
      <Examples />
      <ReviewsMarquee />
      <FaqContactSplit />
      <ContactForm />
      <SeoAccordion />
    </main>
  );
}
