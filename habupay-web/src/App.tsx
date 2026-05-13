import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { VideoSection } from './components/VideoSection';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { Solutions } from './components/Solutions';
import { AboutUs } from './components/aboutUs';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { DemoModalProvider } from './components/DemoModal';
import { TermsPage } from './Terms';
import { PrivacyPage } from './Privacy';
import { SecurityPage } from './Security';

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <HowItWorks />
        <VideoSection />
        <Stats />
        <Pricing />
        <Solutions />
        <AboutUs />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export function App() {
  return (
    <DemoModalProvider>
      <div className="min-h-screen w-full bg-white">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/terminos-y-condiciones" element={<TermsPage />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPage />} />
          <Route path="/seguridad" element={<SecurityPage />} />
        </Routes>
      </div>
    </DemoModalProvider>);

}