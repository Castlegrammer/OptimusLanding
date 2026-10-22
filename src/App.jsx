import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import InteractiveAppDemo from './components/InteractiveAppDemo';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Top Navbar with direct Web App Link */}
      <Navbar 
        onOpenDownloadModal={() => setDownloadModalOpen(true)} 
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero 
          onOpenDownloadModal={() => setDownloadModalOpen(true)} 
        />
        <StatsBar />
        <InteractiveAppDemo 
          onOpenDownloadModal={() => setDownloadModalOpen(true)} 
        />
        <Features />
        <Comparison />
        <Pricing 
          onOpenDownloadModal={() => setDownloadModalOpen(true)} 
        />
        <FAQ />
        <DownloadCTA 
          onOpenDownloadModal={() => setDownloadModalOpen(true)} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Minimal Download Modal */}
      <DownloadModal 
        isOpen={downloadModalOpen} 
        onClose={() => setDownloadModalOpen(false)} 
      />
    </div>
  );
}
