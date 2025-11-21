import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Features from './components/Features';
import Problems from './components/Problems';
import Stats from './components/Stats';
import Services from './components/Services';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ClientLogos />
      <Features />
      <Problems />
      <Stats />
      <Services />
      <Contact />
      <Pricing />
      <CTA />
      <Testimonials />
      <WhyUs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;