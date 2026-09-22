import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import {
  MaavilaiThoranam,
  KuthuVilakku,
  KolamMotif,
} from './TraditionalDecor';

export const WeddingHero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between pt-0 pb-12 px-4 sm:px-6 overflow-hidden bg-maroon-pattern">
      {/* 1. Mandapam Architectural Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.22)_0%,rgba(66,10,18,0.7)_50%,rgba(26,2,5,0.98)_100%)]" />

      {/* 2. Top Maavilai Thoranam draped across entire ceiling */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
        <MaavilaiThoranam />
      </div>

      {/* 3. Left Wooden Carved Mandapam Pillar & Jasmine Garland */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 lg:w-36 pointer-events-none z-20 flex flex-col items-center justify-between">
        <div className="w-full h-full bg-gradient-to-r from-[#180205] via-[#2A050B] to-transparent border-r border-[#C5A059]/20 flex flex-col justify-between py-12 items-center">
          <div className="w-2 sm:w-3 h-full bg-[radial-gradient(circle,#FAF7F0_45%,#E5C578_60%,transparent_70%)] bg-[length:10px_16px] opacity-75 shadow-sm" />
        </div>
      </div>

      {/* 4. Right Wooden Carved Mandapam Pillar & Jasmine Garland */}
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 lg:w-36 pointer-events-none z-20 flex flex-col items-center justify-between">
        <div className="w-full h-full bg-gradient-to-l from-[#180205] via-[#2A050B] to-transparent border-l border-[#C5A059]/20 flex flex-col justify-between py-12 items-center">
          <div className="w-2 sm:w-3 h-full bg-[radial-gradient(circle,#FAF7F0_45%,#E5C578_60%,transparent_70%)] bg-[length:10px_16px] opacity-75 shadow-sm" />
        </div>
      </div>

      {/* 5. Flanking Majestic Brass Kuthu Vilakku Lamps */}
      <div className="absolute left-4 sm:left-14 md:left-24 lg:left-36 bottom-6 sm:bottom-12 z-20 pointer-events-none">
        <KuthuVilakku size="lg" lit={true} />
      </div>
      <div className="absolute right-4 sm:right-14 md:right-24 lg:right-36 bottom-6 sm:bottom-12 z-20 pointer-events-none">
        <KuthuVilakku size="lg" lit={true} />
      </div>

      {/* 6. Central Background Sacred Mandapam Kolam */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 opacity-15">
        <KolamMotif size={700} />
      </div>

      {/* 7. Foreground Grand Couple Welcome */}
      <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto pt-28 sm:pt-32 md:pt-36">
        
        {/* Romantic Theme / Tagline — The Heart of the Hero */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center space-y-1.5 mb-3 sm:mb-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
            <p className="font-cinzel text-xs sm:text-sm md:text-base tracking-[0.25em] text-[#E5C578] uppercase font-bold">
              {weddingData.tagline}
            </p>
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>
          <p className="font-cormorant italic text-sm sm:text-base text-[#FAF7F0]/75">
            {weddingData.subTagline}
          </p>
        </motion.div>

        {/* Supporting Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-cormorant italic text-base sm:text-xl text-[#E5C578]/80 font-normal tracking-wide"
        >
          {weddingData.parentsNote}
        </motion.p>

        {/* The Couple Names — Dominates Visually */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="my-4 sm:my-6 md:my-8 space-y-2 sm:space-y-4"
        >
          <div>
            <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gold-foil uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
              {weddingData.groomName}
            </h1>
          </div>

          <div className="flex items-center justify-center gap-4 my-2">
            <span className="h-[1px] w-14 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
            <p className="font-cormorant italic text-2xl sm:text-3xl text-[#E5C578] font-light">
              &
            </p>
            <span className="h-[1px] w-14 sm:w-24 md:w-32 bg-gradient-to-l from-transparent via-[#C5A059] to-transparent" />
          </div>

          <div>
            <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gold-foil uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
              {weddingData.brideName}
            </h2>
          </div>
        </motion.div>

        {/* Cordially Invite You */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="font-cormorant italic text-base sm:text-lg md:text-xl text-[#FAF7F0]/85 tracking-widest max-w-lg mx-auto pt-2"
        >
          cordially invite you to celebrate their wedding
        </motion.p>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.8 }}
        className="relative z-20 flex flex-col items-center gap-1.5 mt-6 pointer-events-none"
      >
        <span className="font-cormorant text-xs uppercase tracking-[0.25em] text-[#C5A059]/70">
          Scroll down to explore
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#C5A059] to-transparent" />
      </motion.div>
    </section>
  );
};
