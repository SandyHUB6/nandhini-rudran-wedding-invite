import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import {
  MaavilaiThoranam,
  KuthuVilakku,
  KolamMotif,
  OrnamentalCorner,
} from './TraditionalDecor';
import { playTempleBellChime } from '../utils/audioUtils';

interface WeddingEntranceProps {
  onEnter: () => void;
}

export const WeddingEntrance: React.FC<WeddingEntranceProps> = ({ onEnter }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Check prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleEnter = () => {
    if (isOpening || hasInteracted) return;
    setHasInteracted(true);
    setIsOpening(true);
    playTempleBellChime();

    if (prefersReducedMotion) {
      setTimeout(() => {
        onEnter();
      }, 500);
    } else {
      // Allow the 3D doors to smoothly swing open before triggering full entrance
      setTimeout(() => {
        onEnter();
      }, 1400);
    }
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEnter();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#1A0205] select-none"
      role="region"
      aria-label="Wedding Entrance"
    >
      {/* Deep Warm Temple Atmosphere with Oil Lamp Radiance */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(86,16,27,0.85)_0%,rgba(42,5,11,0.96)_55%,rgba(20,2,5,1)_100%)]" />

      {/* Subtle Golden Dust Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(197,160,89,0.18)_0%,transparent_65%)]" />

      {/* Top Accessible Skip Button */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40">
        <button
          type="button"
          onClick={handleSkip}
          className="px-3.5 py-1.5 rounded-full bg-[#2A050B]/80 hover:bg-[#3B0811] text-[#E5C578] hover:text-[#FAF7F0] border border-[#C5A059]/40 hover:border-[#C5A059] font-cinzel text-xs tracking-widest uppercase transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label="Skip to wedding invitation website"
        >
          Skip Intro →
        </button>
      </div>

      {/* Top Auspicious Mango Leaf Thoranam */}
      <div className="absolute top-0 inset-x-0 z-30 pointer-events-none">
        <MaavilaiThoranam />
      </div>

      {/* Flanking Jasmine & Marigold Garlands Framing the Entrance */}
      <div className="absolute top-12 bottom-0 left-2 sm:left-6 md:left-12 w-6 sm:w-8 pointer-events-none z-20 flex flex-col items-center justify-between opacity-80 overflow-hidden">
        {Array.from({ length: 14 }).map((_, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Jasmine bud */}
            <span className="w-3.5 h-3.5 rounded-full bg-[#FAF7F0] border border-[#F5DE9C] shadow-sm my-0.5 inline-block" />
            {/* Orange Marigold blossom */}
            {idx % 2 === 0 && (
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FFA500] to-[#E65100] shadow-[0_0_8px_rgba(255,165,0,0.6)] my-0.5 inline-block" />
            )}
          </div>
        ))}
      </div>
      <div className="absolute top-12 bottom-0 right-2 sm:right-6 md:right-12 w-6 sm:w-8 pointer-events-none z-20 flex flex-col items-center justify-between opacity-80 overflow-hidden">
        {Array.from({ length: 14 }).map((_, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="w-3.5 h-3.5 rounded-full bg-[#FAF7F0] border border-[#F5DE9C] shadow-sm my-0.5 inline-block" />
            {idx % 2 === 0 && (
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FFA500] to-[#E65100] shadow-[0_0_8px_rgba(255,165,0,0.6)] my-0.5 inline-block" />
            )}
          </div>
        ))}
      </div>

      {/* Left Brass Kuthu Vilakku Lamp with Dynamic Flame Glow */}
      <motion.div
        animate={{
          filter: isOpening
            ? 'drop-shadow(0 0 35px rgba(255, 190, 60, 0.95))'
            : 'drop-shadow(0 0 15px rgba(255, 170, 40, 0.45))',
        }}
        transition={{ duration: 1 }}
        className="absolute left-3 sm:left-10 md:left-24 lg:left-36 bottom-2 sm:bottom-6 pointer-events-none z-30"
      >
        <KuthuVilakku size="md" lit={true} className="scale-90 sm:scale-100" />
      </motion.div>

      {/* Right Brass Kuthu Vilakku Lamp with Dynamic Flame Glow */}
      <motion.div
        animate={{
          filter: isOpening
            ? 'drop-shadow(0 0 35px rgba(255, 190, 60, 0.95))'
            : 'drop-shadow(0 0 15px rgba(255, 170, 40, 0.45))',
        }}
        transition={{ duration: 1 }}
        className="absolute right-3 sm:right-10 md:right-24 lg:right-36 bottom-2 sm:bottom-6 pointer-events-none z-30"
      >
        <KuthuVilakku size="md" lit={true} className="scale-90 sm:scale-100" />
      </motion.div>

      {/* Sacred Floor Kolam Watermark at the Doorstep */}
      <div className="absolute bottom-[-15px] sm:bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-10 opacity-35">
        <KolamMotif size={360} />
      </div>

      {/* =========================================================================
          TRADITIONAL CHETTINAD CARVED WOODEN DOORWAY (3D DOUBLE DOORS)
          ========================================================================= */}
      <div className="relative z-20 w-[90vw] max-w-[420px] sm:max-w-[480px] md:max-w-[540px] aspect-[4/5] max-h-[82vh] flex flex-col items-center justify-between p-3 sm:p-5 rounded-2xl sm:rounded-3xl border-4 border-[#8A6421] shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_0_2px_rgba(197,160,89,0.5)] bg-[#230509]">

        {/* Arch Carved Header */}
        <div className="relative w-full text-center pb-2 border-b border-[#C5A059]/40 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="font-serif text-gold-foil text-lg sm:text-xl font-bold">ॐ</span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>
          <span className="font-cormorant uppercase tracking-[0.3em] text-xs sm:text-sm text-[#E5C578] font-bold">
            Mangala Pravesam • Sacred Threshold
          </span>
        </div>

        {/* 3D Door Portal Container */}
        <div
          className="relative flex-1 w-full my-2 sm:my-3 rounded-xl overflow-hidden border-2 border-[#5A3E0C] shadow-inner bg-[#120204]"
          style={{ perspective: '1200px' }}
        >
          {/* Inner Temple Courtyard Glow (revealed as doors open) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[radial-gradient(circle_at_center,#56101B_0%,#1A0205_80%)]">
            <motion.div
              animate={{
                scale: isOpening ? [0.95, 1.08] : 1,
                opacity: isOpening ? 1 : 0.4,
              }}
              transition={{ duration: 1.2 }}
              className="space-y-3"
            >
              <span className="text-3xl sm:text-4xl">🌸</span>
              <p className="font-cinzel text-base sm:text-xl font-bold text-gold-foil tracking-widest uppercase">
                Entering Wedding Celebration
              </p>
              <p className="font-cormorant italic text-sm text-[#FAF7F0]/80">
                Please welcome the auspicious union of Rudran & Nandhini
              </p>
            </motion.div>
          </div>

          {/* LEFT DOOR LEAF */}
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{
              rotateY: isOpening ? -105 : 0,
            }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: 'left center' }}
            className="absolute top-0 bottom-0 left-0 w-1/2 border-r border-[#2A1504] shadow-2xl overflow-hidden cursor-pointer"
            onClick={handleEnter}
          >
            {/* Teak Wood Finish with Authentic Brass Hardware */}
            <div className="w-full h-full bg-gradient-to-r from-[#2F150A] via-[#4A2411] to-[#3B1C0D] p-3 sm:p-4 flex flex-col justify-between relative border-l-2 border-y border-[#5A3E0C]">
              {/* Corner Filigrees */}
              <OrnamentalCorner position="top-left" className="top-1 left-1 scale-75 opacity-70" />
              <OrnamentalCorner position="bottom-left" className="bottom-1 left-1 scale-75 opacity-70" />

              {/* Wooden Inset Panels */}
              <div className="space-y-2.5 my-auto">
                {[1, 2, 3].map((panel) => (
                  <div
                    key={panel}
                    className="w-full aspect-[4/3] rounded-md border border-[#C5A059]/40 bg-gradient-to-b from-[#3B1C0D] to-[#2A1308] shadow-inner flex items-center justify-center relative"
                  >
                    {/* Brass Flower Stud */}
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#805F24] via-[#F5DE9C] to-[#805F24] border border-[#422B08] shadow-md flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#420A12]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Left Brass Door Handle & Ring */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
                <div className="w-5 h-10 rounded-l-md bg-gradient-to-b from-[#FFEAA7] via-[#D4AF37] to-[#7B5418] border border-[#422F08] shadow-md flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-[#4A3207] shadow-sm" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT DOOR LEAF */}
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{
              rotateY: isOpening ? 105 : 0,
            }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: 'right center' }}
            className="absolute top-0 bottom-0 right-0 w-1/2 border-l border-[#2A1504] shadow-2xl overflow-hidden cursor-pointer"
            onClick={handleEnter}
          >
            {/* Teak Wood Finish with Authentic Brass Hardware */}
            <div className="w-full h-full bg-gradient-to-l from-[#2F150A] via-[#4A2411] to-[#3B1C0D] p-3 sm:p-4 flex flex-col justify-between relative border-r-2 border-y border-[#5A3E0C]">
              {/* Corner Filigrees */}
              <OrnamentalCorner position="top-right" className="top-1 right-1 scale-75 opacity-70" />
              <OrnamentalCorner position="bottom-right" className="bottom-1 right-1 scale-75 opacity-70" />

              {/* Wooden Inset Panels */}
              <div className="space-y-2.5 my-auto">
                {[1, 2, 3].map((panel) => (
                  <div
                    key={panel}
                    className="w-full aspect-[4/3] rounded-md border border-[#C5A059]/40 bg-gradient-to-b from-[#3B1C0D] to-[#2A1308] shadow-inner flex items-center justify-center relative"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#805F24] via-[#F5DE9C] to-[#805F24] border border-[#422B08] shadow-md flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#420A12]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Brass Door Handle & Ring */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center">
                <div className="w-5 h-10 rounded-r-md bg-gradient-to-b from-[#FFEAA7] via-[#D4AF37] to-[#7B5418] border border-[#422F08] shadow-md flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-[#4A3207] shadow-sm" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lower Threshold / Inscription & Action Callout */}
        <div className="w-full text-center pt-2 space-y-2">
          {/* Welcome Message */}
          <div className="space-y-0.5">
            <h1 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-gold-foil tracking-wider uppercase">
              Welcome to Our Wedding
            </h1>
            <p className="font-cormorant italic text-sm sm:text-base text-[#FAF7F0]/90 font-medium">
              Step into our beautiful beginning.
            </p>
          </div>

          {/* Primary Action Button: "Enter the Wedding" */}
          <div className="pt-1">
            <motion.button
              type="button"
              onClick={handleEnter}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={isOpening}
              className="relative inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5DE9C] to-[#AA7C11] text-[#2A050B] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] uppercase shadow-[0_4px_25px_rgba(212,175,55,0.45)] hover:shadow-[0_4px_35px_rgba(212,175,55,0.7)] border border-[#FFF2B2] transition-all cursor-pointer overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C5A059]"
              aria-label="Enter the Wedding"
            >
              {/* Shimmer line */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
              <span>🌸</span>
              <span>Enter the Wedding</span>
              <span>🌸</span>
            </motion.button>
          </div>

          {/* Couple Attribution Note */}
          <p className="font-cormorant italic text-xs sm:text-sm text-[#E5C578]/85 pt-1">
            With love, {weddingData.groomName.split(' ')[0]} & {weddingData.brideName.split(' ')[0]}
          </p>
        </div>

      </div>
    </div>
  );
};
