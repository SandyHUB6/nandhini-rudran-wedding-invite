import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { PillaiyarSuzhi, KolamMotif } from './TraditionalDecor';
import {
  ScrollRoller,
  HangingScrollTassel,
  ScrollPortraitMedallion,
  UniformCeremonyCard,
} from './DigitalInvitation';

interface InvitationRevealProps {
  isOpening: boolean;
  onAnimationComplete: () => void;
}

/**
 * Shared Authentic Parchment Content for the Royal Patrikai Scroll
 */
const ScrollParchmentBody: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div
      className={`relative w-full bg-[#FAF5E8] text-[#3B0811] ${
        isMobile ? 'px-4 py-6' : 'px-5 sm:px-10 md:px-12 py-8 sm:py-12'
      } shadow-[0_20px_50px_-15px_rgba(10,2,4,0.7),0_0_0_1px_rgba(197,160,89,0.3)] border-x-4 border-[#5A101C]`}
    >
      {/* Woven Gold Zari Border Selvedges */}
      <div className="absolute top-0 bottom-0 left-0.5 sm:left-1 w-2 sm:w-3.5 bg-[repeating-linear-gradient(0deg,#C5A059,#C5A059_3px,#FAF5E8_3px,#FAF5E8_6px,#805F24_6px,#805F24_8px)] opacity-70 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0.5 sm:right-1 w-2 sm:w-3.5 bg-[repeating-linear-gradient(0deg,#C5A059,#C5A059_3px,#FAF5E8_3px,#FAF5E8_6px,#805F24_6px,#805F24_8px)] opacity-70 pointer-events-none" />

      {/* Cylinder Shadow Gradients */}
      <div className="absolute top-0 inset-x-0 h-6 sm:h-8 bg-gradient-to-b from-[#2A050B]/25 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-6 sm:h-8 bg-gradient-to-t from-[#2A050B]/25 to-transparent pointer-events-none" />

      {/* Double Gold Foil & Kumkum Inset Borders */}
      <div className="absolute inset-x-3 sm:inset-x-6 top-3 sm:top-4 bottom-3 sm:bottom-4 border-2 border-[#C5A059]/75 rounded pointer-events-none" />
      <div className="absolute inset-x-4 sm:inset-x-7 top-4 sm:top-5 bottom-4 sm:bottom-5 border border-[#8B1E2F]/45 rounded pointer-events-none" />

      {/* Kolam Watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.04]">
        <KolamMotif size={isMobile ? 320 : 450} />
      </div>

      {/* INVOCATION & ROYAL GANESHA SEAL */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-1.5 pt-1">
        <PillaiyarSuzhi className="mb-0.5" />
        <div className="space-y-0.5 pt-0.5">
          <p className="font-cinzel text-xs sm:text-sm font-bold text-[#805F24] tracking-[0.25em] uppercase">
            {weddingData.tagline}
          </p>
          <p className="font-cormorant italic text-xs sm:text-sm text-[#5A101C]/85 font-medium">
            {weddingData.subTagline}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 w-44 sm:w-52 mx-auto my-2">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rotate-45 border border-[#5A101C] bg-[#C5A059]" />
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>
      </div>

      {/* OPENING NARRATIVE & EMOTIONAL CONNECTION */}
      <div className="relative z-10 text-center space-y-3 sm:space-y-4 my-3 sm:my-6 px-2 sm:px-3">
        <div className="space-y-1.5 max-w-lg mx-auto">
          <p className="font-cormorant italic text-base sm:text-lg text-[#5A101C] leading-relaxed font-medium">
            With the divine grace of the Almighty
            <br />
            and the heartfelt blessings of our beloved elders,
          </p>
          <p className="font-cormorant italic text-sm sm:text-base text-[#70501C] leading-relaxed">
            we are stepping hand-in-hand into a sacred and beautiful new chapter of our lives.
          </p>
        </div>

        <div className="pt-1 pb-1">
          <p className="font-cormorant italic text-xs sm:text-base text-[#805F24] font-semibold tracking-wider mb-1 sm:mb-1.5">
            And on this most cherished day of our union,
          </p>
          <div className="border-y border-[#C5A059]/40 py-2 sm:py-2.5 max-w-sm sm:max-w-md mx-auto bg-gradient-to-r from-transparent via-[#FFEFC7]/60 to-transparent">
            <p className="font-cormorant italic text-lg sm:text-2xl md:text-[26px] text-[#3B0811] font-bold leading-relaxed tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
              we would love to have you by our side.
            </p>
          </div>
        </div>
      </div>

      {/* COUPLE PORTRAIT IN TEMPLE MEDALLION */}
      <div className="relative z-10">
        <ScrollPortraitMedallion
          imageSrc={weddingData.coupleImage}
          brideName={weddingData.brideName}
          groomName={weddingData.groomName}
        />
      </div>

      {/* COUPLE NAMES & INVITATION */}
      <div className="relative z-10 text-center space-y-2 py-4 sm:py-5 border-y-2 border-double border-[#C5A059] my-4 bg-gradient-to-b from-[#F7EEDD]/80 via-[#FDFBF7]/90 to-[#F7EEDD]/80 rounded-lg shadow-sm">
        {/* Groom Details */}
        <div className="space-y-1 sm:space-y-1.5">
          <h1 className="font-cinzel-dec text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#35070E] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            {weddingData.groomName}
          </h1>
        </div>

        {/* Knot */}
        <div className="flex items-center justify-center gap-3 my-2 sm:my-2.5">
          <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          <span className="font-cormorant italic text-xl sm:text-3xl text-[#C5A059] font-light select-none">
            &
          </span>
          <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
        </div>

        {/* Bride Details */}
        <div className="space-y-1 sm:space-y-1.5">
          <h2 className="font-cinzel-dec text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#35070E] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            {weddingData.brideName}
          </h2>
        </div>

        {/* Main Copy */}
        <div className="pt-3 pb-1 max-w-lg mx-auto px-2 sm:px-3 space-y-2">
          <p className="font-cormorant italic text-sm sm:text-base md:text-lg text-[#3B0811] leading-relaxed font-medium">
            As we unite our hearts and exchange our sacred vows,
            <br className="hidden sm:inline" />
            {' '}we warmly invite you to share in our joy and celebrations.
          </p>
          <p className="font-cormorant italic text-xs sm:text-sm md:text-base text-[#6B1422] leading-relaxed font-semibold">
            Please join us at our wedding, and shower us
            <br className="hidden sm:inline" />
            {' '}with your love, prayers, and heartfelt blessings.
          </p>
        </div>
      </div>

      {/* CEREMONIES */}
      <div className="relative z-10 space-y-3 sm:space-y-4 pt-2 sm:pt-3">
        <div className="flex items-center justify-center gap-2 mb-2 text-center">
          <span className="h-[1px] w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="font-cinzel text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#805F24] uppercase">
            Ceremonies & Auspicious Muhurtham
          </span>
          <span className="h-[1px] w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>

        <UniformCeremonyCard
          badge="ENGAGEMENT & RING CEREMONY"
          title="Engagement & Ring Ceremony"
          date="Tuesday, 10 November 2026"
          subDate="Auspicious Evening Muhurtham"
          time="7:35 PM – 8:35 PM"
          venue="Soudamman Kovil Kalyana Mandapam, Bodinayakanur"
        />

        <div className="flex items-center justify-center gap-3 py-1">
          <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          <span className="text-xs text-[#805F24] font-serif select-none">⚜ ❖ ⚜</span>
          <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
        </div>

        <UniformCeremonyCard
          badge="WEDDING CEREMONY"
          title="Wedding Ceremony"
          date="Wednesday, 11 November 2026"
          subDate="Sacred Morning Muhurtham"
          time="9:00 AM – 10:30 AM"
          venue="Sri Srinivasa Perumal Temple, Bodinayakanur"
        />
      </div>

      {/* CLOSING */}
      <div className="relative z-10 pt-5 sm:pt-8 text-center border-t border-[#C5A059]/50 mt-5 sm:mt-6 space-y-2 sm:space-y-3">
        <p className="font-cormorant italic text-sm sm:text-lg md:text-xl text-[#5A101C] font-semibold leading-relaxed">
          Having you with us would mean the world to us
          <br />
          and make our celebration truly complete.
        </p>
        <div className="pt-0.5 sm:pt-1">
          <p className="font-cormorant italic text-xs sm:text-base text-[#805F24] font-medium">
            With all our love & gratitude,
          </p>
          <p className="font-cinzel text-xs sm:text-base font-bold text-[#35070E] tracking-wider pt-0.5">
            {weddingData.groomName} &amp; {weddingData.brideName}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Traditional Patrikai Physical Unfolding & Royal Scroll Reveal
 * Optimized for Mobile Responsiveness, Hardware Acceleration & Reduced Motion
 */
export const InvitationReveal: React.FC<InvitationRevealProps> = ({
  isOpening,
  onAnimationComplete,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setIsMobile(w < 640);
      setIsLandscape(w > h && h < 520);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    window.addEventListener('orientationchange', checkViewport);
    return () => {
      window.removeEventListener('resize', checkViewport);
      window.removeEventListener('orientationchange', checkViewport);
    };
  }, []);

  useEffect(() => {
    if (isOpening) {
      // 350ms subtle crossfade if prefers-reduced-motion is requested;
      // 2100ms continuous physical unfolding on desktop and standard mobile
      const durationMs = prefersReducedMotion ? 350 : 2100;
      const timer = setTimeout(() => {
        onAnimationComplete();
      }, durationMs);

      return () => clearTimeout(timer);
    }
  }, [isOpening, onAnimationComplete, prefersReducedMotion]);

  if (!isOpening) return null;

  // REDUCED MOTION EXPERIENCE:
  // For users with prefers-reduced-motion: reduce, smoothly fade in without 3D rotation
  if (prefersReducedMotion) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden pointer-events-none pt-8 sm:pt-20 pb-20 px-3 sm:px-6"
        >
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.18)_0%,rgba(42,5,11,0.65)_60%,rgba(26,2,5,0.95)_100%)] pointer-events-none" />
          <div className="relative z-10 w-full max-w-[390px] sm:max-w-[560px] md:max-w-[620px] flex flex-col items-center select-none">
            <ScrollRoller position="top" />
            <ScrollParchmentBody isMobile={isMobile} />
            <ScrollRoller position="bottom" />
            <HangingScrollTassel />
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // STANDARD EXPERIENCE (DESKTOP & MOBILE):
  // Physical Patrikai opening with responsive 3D perspective and movement tailored for mobile
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden pointer-events-none ${
          isMobile ? 'perspective-[750px]' : 'perspective-1000'
        } ${
          isLandscape ? 'pt-3 pb-12' : 'pt-6 sm:pt-14 md:pt-20 pb-16 sm:pb-20'
        } px-2.5 sm:px-6`}
      >
        {/* Warm Ambient Golden Light that gently breathes as the card opens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.45, 0.2] }}
          transition={{ duration: 2.1, times: [0, 0.35, 1], ease: 'easeInOut' }}
          className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.22)_0%,rgba(66,10,18,0.5)_60%,transparent_90%)] pointer-events-none"
        />

        {/* ========================================================
            THE PHYSICAL PATRIKAI FOLDER & EMBEDDED SCROLL STAGE
            ======================================================== */}
        <motion.div
          initial={{ scale: 1, y: 0 }}
          animate={{
            scale: isMobile ? [1, 0.992, 1] : [1, 0.985, 1],
            y: isMobile ? [0, 1, 0] : [0, 2, 0],
          }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
          className={`relative z-10 w-full ${
            isMobile ? 'max-w-[390px]' : 'max-w-[560px] sm:max-w-[620px]'
          } flex flex-col items-center select-none preserve-3d`}
        >
          {/* ----------------------------------------------------
              1. THE CEREMONIAL FOLDER (Flaps open in 3D perspective)
              ---------------------------------------------------- */}
          <div className="absolute top-0 inset-x-0 flex flex-col items-center z-40 pointer-events-none">
            {/* TOP CEREMONIAL FLAP (Flips upward in 3D) */}
            <motion.div
              initial={{ rotateX: 0, opacity: 1 }}
              animate={{
                rotateX: isMobile ? (isLandscape ? -108 : -115) : -142,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 0.85,
                delay: 0.15,
                ease: [0.35, 0, 0.15, 1],
              }}
              style={{
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity',
              }}
              className={`relative w-full ${
                isMobile
                  ? 'max-w-[360px] h-24'
                  : 'max-w-[440px] sm:max-w-[500px] h-32 sm:h-36'
              } rounded-t-xl bg-gradient-to-b from-[#3B0811] via-[#2A050B] to-[#1E0307] border-t-2 border-x-2 border-[#C5A059] ${
                isMobile ? 'shadow-lg p-3' : 'shadow-2xl p-4'
              } flex flex-col items-center justify-center overflow-hidden`}
            >
              {/* Gold foil border rim */}
              <div className="absolute inset-1 sm:inset-1.5 rounded-t-lg border border-[#C5A059]/60 pointer-events-none" />

              {/* Underside Golden Silk Brocade (Revealed as flap flips) */}
              <div
                style={{ transform: 'rotateY(180deg)' }}
                className="absolute inset-0 bg-gradient-to-b from-[#8A6421] via-[#D4AF37] to-[#805F24] opacity-90 backface-hidden"
              />

              {/* Pillaiyar Suzhi & Sacred Gold Crest */}
              <div className="relative z-10 flex flex-col items-center -mt-1">
                <PillaiyarSuzhi />
                <span className="font-cinzel text-[8px] sm:text-[10px] text-gold-foil tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold mt-1">
                  Royal Wedding Patrikai
                </span>
              </div>

              {/* Flap Bottom Gold Scallop Trim */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFE8A3] to-transparent" />
            </motion.div>

            {/* LOWER POCKET / FLAP (Gently drops down & folds open) */}
            <motion.div
              initial={{ rotateX: 0, y: 0, opacity: 1 }}
              animate={{
                rotateX: isMobile ? (isLandscape ? 26 : 32) : 45,
                y: isMobile ? (isLandscape ? 12 : 18) : 35,
                opacity: [1, 0.7, 0],
              }}
              transition={{
                duration: 0.75,
                delay: 0.2,
                ease: [0.35, 0, 0.15, 1],
              }}
              style={{
                transformOrigin: 'bottom center',
                willChange: 'transform, opacity',
              }}
              className={`relative w-full ${
                isMobile
                  ? 'max-w-[360px] h-20 sm:h-24'
                  : 'max-w-[440px] sm:max-w-[500px] h-28 sm:h-32'
              } rounded-b-xl bg-gradient-to-b from-[#2A050B] to-[#1A0205] border-b-2 border-x-2 border-[#C5A059] ${
                isMobile ? 'p-2' : 'p-3'
              } flex flex-col items-center justify-center shadow-xl -mt-0.5 overflow-hidden`}
            >
              <div className="absolute inset-1 sm:inset-1.5 rounded-b-lg border border-[#C5A059]/40 pointer-events-none" />

              {/* Golden Wax Seal Opening Flare */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 0.8], opacity: [1, 1, 0] }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-[#F5DE9C] bg-[#420A12] flex items-center justify-center text-[10px] sm:text-xs text-gold-foil shadow-[0_0_20px_rgba(212,175,55,0.85)] font-serif mb-0.5 sm:mb-1"
              >
                ॐ
              </motion.div>
              <span className="font-cinzel text-[9px] sm:text-[10px] text-gold-foil tracking-widest uppercase">
                {weddingData.groomFirstName} &amp; {weddingData.brideFirstName}
              </span>
            </motion.div>
          </div>

          {/* ----------------------------------------------------
              2. THE EMBEDDED ROYAL SCROLL (Unrolls from within)
              ---------------------------------------------------- */}
          <div className="relative w-full flex flex-col items-center z-20">
            {/* Top Carved Brass Roller */}
            <ScrollRoller position="top" />

            {/* UNROLLING PARCHMENT BODY */}
            <motion.div
              initial={{ height: 0, opacity: 0.95 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{
                duration: 1.45,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1], // Physical paper unrolling inertia
              }}
              style={{
                willChange: 'height, transform, opacity',
                transform: 'translateZ(0)',
              }}
              className="relative w-full overflow-hidden origin-top"
            >
              {/* Sweeping Golden Light Sheen down unrolling parchment */}
              <motion.div
                initial={{ top: '0%', opacity: 0.9 }}
                animate={{ top: '100%', opacity: 0 }}
                transition={{
                  duration: 1.45,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-x-0 h-24 sm:h-28 bg-gradient-to-b from-transparent via-[#FFE8A3]/35 to-transparent pointer-events-none z-30"
              />

              {/* MAIN AGED PARCHMENT BODY */}
              <ScrollParchmentBody isMobile={isMobile} />
            </motion.div>

            {/* Bottom Carved Brass Roller */}
            <ScrollRoller position="bottom" />

            {/* Hanging Royal Silk Tassel */}
            <HangingScrollTassel />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InvitationReveal;
