"use client";

import { useState } from "react";
import LiveQRGenerator from "@/components/qr/LiveQRGenerator";
import InteractiveTutorial from "@/components/qr/InteractiveTutorial";
import Link from "next/link";

export default function HeroSection() {
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <>
      <InteractiveTutorial
        isOpen={showTutorial}
        onClose={() => setShowTutorial(false)}
      />

      {/* HERO + GENERATOR */}
      <section className="bg-background pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {/* Hero */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-textPrimary tracking-tight">
              Privacy-First <span className="text-primary">Free QR Code Generator</span>
            </h1>

            <p className="mt-6 text-xl text-textSecondary leading-relaxed">
              Generate high-quality, secure QR codes instantly. No signups, no tracking, and no expiration.
              The professional tool for businesses and individuals who value data privacy.
            </p>

            {/* Quick Start Button */}
            <div className="mt-8">
              <button
                onClick={() => setShowTutorial(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryHover transition-colors font-medium"
              >
                🚀 Quick Start Guide
              </button>
            </div>
          </div>

          {/* Generator */}
          <LiveQRGenerator />
        </div>
      </section>
    </>
  );
}