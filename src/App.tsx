import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { VideoSection } from './components/VideoSection';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { DemoModalProvider } from './components/DemoModal';
export function App() {
  return (
    <DemoModalProvider>
      <div className="min-h-screen w-full bg-white">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <Services />
          <HowItWorks />
          <VideoSection />
          <Stats />
          <Pricing />
          <CTASection />
        </main>
        <Footer />
      </div>
    </DemoModalProvider>);

}