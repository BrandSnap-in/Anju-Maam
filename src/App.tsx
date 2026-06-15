import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Subjects from "./components/Subjects";
import WhyChooseUs from "./components/WhyChooseUs";
import Methodology from "./components/Methodology";
import BoardPrep from "./components/BoardPrep";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative overflow-x-hidden bg-[#FCFDFF] text-slate-800 antialiased min-h-screen">
      
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Section */}
      <About />

      {/* 4. Statistics Animated Counters */}
      <Stats />

      {/* 5. Subjects & Curriculum Directory */}
      <Subjects />

      {/* 6. Why Choose Anju Ma'am Feature Grid */}
      <WhyChooseUs />

      {/* 7. Teaching Methodology Stepper Timeline */}
      <Methodology />

      {/* 8. Board Exam Specific Highlights */}
      <BoardPrep />

      {/* 9. Interactive Slider Testimonials */}
      <Testimonials />

      {/* 10. Accordion Frequently Asked Questions */}
      <FAQ />

      {/* 11. Location Map Hub & Metro Directions */}
      <Location />

      {/* 12. Interactive Lead Capture & WhatsApp forms */}
      <ContactForm />

      {/* 13. Dynamic Educational Footer */}
      <Footer />

    </div>
  );
}
