import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { KolamMotif } from './TraditionalDecor';

export const FinalMessage: React.FC = () => {
  return (
    <footer className="relative py-28 sm:py-36 px-4 sm:px-6 w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#180205] via-[#2A050B] to-[#120104] overflow-hidden text-center">
      {/* Subtle Central Warm Lamp Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(197,160,89,0.18)_0%,rgba(66,10,18,0.4)_50%,transparent_80%)]" />

      {/* Auspicious Kolam Mandala Background */}
      <div className="absolute left-1/2 bottom-12 -translate-x-1/2 pointer-events-none opacity-20">
        <KolamMotif size={480} />
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center space-y-7 sm:space-y-9">
        
        {/* Poetic Blessing Verse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-2"
        >
          <p className="font-cormorant italic text-2xl sm:text-3xl md:text-4xl text-[#FAF7F0] font-normal leading-relaxed">
            “With your blessings,
            <br />
            we begin our forever.”
          </p>
          <p className="font-cormorant italic text-sm sm:text-base text-[#C5A059] pt-1">
            Beginning our joyful journey of togetherness with your heartfelt blessings
          </p>
        </motion.div>

        {/* Delicate Royal Monogram / Couple Signature (Groom & Bride Swapped) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="flex items-center justify-center gap-3 py-3 border-y border-[#C5A059]/30 w-full max-w-xs"
        >
          <span className="font-cinzel text-lg sm:text-xl font-bold tracking-widest text-gold-foil">
            {weddingData.groomName.split(' ')[0]}
          </span>
          <span className="font-serif text-sm text-[#E5C578] opacity-80">♥</span>
          <span className="font-cinzel text-lg sm:text-xl font-bold tracking-widest text-gold-foil">
            {weddingData.brideName.split(' ')[0]}
          </span>
        </motion.div>

        {/* Final Warm Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className="space-y-2 pt-1"
        >
          <p className="font-cormorant italic text-base sm:text-lg text-[#E5C578]">
            We look forward to celebrating with you.
          </p>
          <p className="text-[11px] font-sans tracking-widest text-[#FAF7F0]/40 uppercase pt-4">
            Bodinayakanur, Theni District, Tamil Nadu
          </p>
        </motion.div>

        {/* Center Flickering Diya Flame */}
        <div className="pt-2 flex flex-col items-center">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <span className="w-6 h-6 rounded-full bg-[#FF9900]/25 blur-sm absolute animate-pulse" />
            <span className="text-xl select-none animate-flame-flicker">🪔</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
