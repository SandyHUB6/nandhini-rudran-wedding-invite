import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { KolamMotif, PillaiyarSuzhi, MaavilaiThoranam, KuthuVilakku } from './TraditionalDecor';

/**
 * Traditional Royal South Indian Antique Scroll Patrikai (Royal Wedding Scroll)
 * Features:
 * - Carved antique brass and rosewood rollers with ornate temple kalasam finials
 * - Rich aged warm ivory parchment with woven gold zari brocade selvedges
 * - Royal temple arch medallion framing the couple's photograph
 * - Auspicious Ganesha seal, Pillaiyar Suzhi, and classical Tamil typography (Arima + Noto Serif Tamil + Cinzel Decorative)
 * - 100% Strictly Uniform Ceremony Cards for Engagement and Holy Subha Muhurtham
 * - Golden silk cord and hanging royal tassel accents
 */

// Antique Brass / Teak Roller with Kalasam Finials
const ScrollRoller: React.FC<{ position: 'top' | 'bottom' }> = ({ position }) => {
  return (
    <div className={`relative w-full z-30 select-none pointer-events-none flex items-center justify-center ${position === 'top' ? '-mb-2 sm:-mb-3' : '-mt-2 sm:-mt-3'}`}>
      {/* Outer wrapper extending slightly beyond the parchment for protruding royal finials */}
      <div className="relative w-[108%] sm:w-[106%] max-w-[620px] sm:max-w-[680px] h-9 sm:h-11 flex items-center justify-between">

        {/* Left Ornamental Finial (Temple Kalasam / Bell Knob) */}
        <div className="relative flex items-center -ml-3 sm:-ml-5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
          <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-12 sm:h-10">
            <defs>
              <linearGradient id="finialBrass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="35%" stopColor="#D4AF37" />
                <stop offset="70%" stopColor="#8A6421" />
                <stop offset="100%" stopColor="#4A340C" />
              </linearGradient>
            </defs>
            {/* Outer tip */}
            <path d="M4,18 C4,14 10,12 14,8 L14,28 C10,24 4,22 4,18 Z" fill="url(#finialBrass)" />
            {/* Tiered Lotus Bulbs */}
            <ellipse cx="20" cy="18" rx="6" ry="12" fill="url(#finialBrass)" stroke="#5A3E0C" strokeWidth="0.8" />
            <ellipse cx="28" cy="18" rx="4" ry="15" fill="url(#finialBrass)" stroke="#5A3E0C" strokeWidth="0.8" />
            {/* Shaft Mount Ring */}
            <rect x="32" y="8" width="10" height="20" rx="1.5" fill="url(#finialBrass)" stroke="#4A340C" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Central Cylindrical Roller Rod (Rich Brass & Polished Teak) */}
        <div className="relative flex-1 h-5 sm:h-6 mx-1 rounded-sm shadow-[0_6px_12px_rgba(0,0,0,0.7)] overflow-hidden border-y border-[#F5DE9C]/60 bg-gradient-to-b from-[#FFF5C0] via-[#C5A059] to-[#422206]">
          {/* Subtle horizontal wood / lathe grain highlight */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] opacity-70" />
          {/* Engraved brass bands across roller */}
          <div className="absolute inset-y-0 left-8 sm:left-14 w-2 sm:w-3 bg-gradient-to-r from-[#4A340C] via-[#FFE29F] to-[#4A340C] border-x border-[#2A1504]" />
          <div className="absolute inset-y-0 right-8 sm:right-14 w-2 sm:w-3 bg-gradient-to-r from-[#4A340C] via-[#FFE29F] to-[#4A340C] border-x border-[#2A1504]" />
        </div>

        {/* Right Ornamental Finial (Mirror) */}
        <div className="relative flex items-center -mr-3 sm:-mr-5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] rotate-180">
          <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-12 sm:h-10">
            <defs>
              <linearGradient id="finialBrassR" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="35%" stopColor="#D4AF37" />
                <stop offset="70%" stopColor="#8A6421" />
                <stop offset="100%" stopColor="#4A340C" />
              </linearGradient>
            </defs>
            <path d="M4,18 C4,14 10,12 14,8 L14,28 C10,24 4,22 4,18 Z" fill="url(#finialBrassR)" />
            <ellipse cx="20" cy="18" rx="6" ry="12" fill="url(#finialBrassR)" stroke="#5A3E0C" strokeWidth="0.8" />
            <ellipse cx="28" cy="18" rx="4" ry="15" fill="url(#finialBrassR)" stroke="#5A3E0C" strokeWidth="0.8" />
            <rect x="32" y="8" width="10" height="20" rx="1.5" fill="url(#finialBrassR)" stroke="#4A340C" strokeWidth="0.8" />
          </svg>
        </div>

      </div>
    </div>
  );
};

// Hanging Royal Silk Cord & Golden Tassel
const HangingScrollTassel: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center -mt-1 select-none pointer-events-none z-20">
      {/* Hanging Braided Golden Cord */}
      <div className="w-[3px] h-8 sm:h-12 bg-gradient-to-b from-[#C5A059] via-[#F5DE9C] to-[#8A6421] shadow-sm" />

      {/* Ornate Gold Cap */}
      <div className="w-5 h-4 rounded-t-md bg-gradient-to-b from-[#FFF2B2] via-[#C5A059] to-[#5A3E0C] border border-[#3B2909] shadow-md flex items-center justify-center">
        <div className="w-2 h-1 bg-[#4A0E17] rounded-sm" />
      </div>

      {/* Flared Crimson Silk Tassel with Gold Strands */}
      <div className="relative w-7 h-10 sm:h-12 -mt-0.5 flex justify-center">
        <svg viewBox="0 0 30 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
          <defs>
            <linearGradient id="tasselSilk" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4A0E17" />
              <stop offset="30%" stopColor="#8A1525" />
              <stop offset="50%" stopColor="#E5C578" />
              <stop offset="70%" stopColor="#8A1525" />
              <stop offset="100%" stopColor="#4A0E17" />
            </linearGradient>
          </defs>
          <path d="M10,0 C12,10 4,38 2,46 C12,44 18,44 28,46 C26,38 18,10 20,0 Z" fill="url(#tasselSilk)" />
          {/* Subtle silk strands */}
          <line x1="8" y1="4" x2="6" y2="44" stroke="#FFE29F" strokeWidth="0.6" opacity="0.7" />
          <line x1="15" y1="2" x2="15" y2="45" stroke="#FFE29F" strokeWidth="0.8" opacity="0.9" />
          <line x1="22" y1="4" x2="24" y2="44" stroke="#FFE29F" strokeWidth="0.6" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
};

// Medallion Temple Arch Frame for Couple's Photograph inside Scroll
const ScrollPortraitMedallion: React.FC<{
  imageSrc: string;
  brideName: string;
  groomName: string;
}> = ({ imageSrc, brideName, groomName }) => {
  return (
    <div className="relative my-6 sm:my-7 flex flex-col items-center select-none w-full max-w-[290px] sm:max-w-[325px] mx-auto">
      {/* Decorative Temple Mandapam Arch Container */}
      <div className="relative w-full rounded-t-[130px] rounded-b-xl p-2.5 sm:p-3 bg-gradient-to-b from-[#F7EEDD] via-[#FBF7EE] to-[#EFE2CE] shadow-[0_10px_28px_rgba(74,14,23,0.18)] border-2 border-[#C5A059]">

        {/* Double Fine Inset Borders */}
        <div className="absolute inset-1 sm:inset-1.5 rounded-t-[125px] rounded-b-lg border border-[#5A101C]/60 pointer-events-none" />
        <div className="absolute inset-2 sm:inset-2.5 rounded-t-[120px] rounded-b border border-[#C5A059]/40 pointer-events-none" />

        {/* Top Temple Gopuram Kalasam Finial */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-[#FAF7F0] border border-[#C5A059] flex items-center justify-center shadow-md">
            <div className="w-3 h-3 rotate-45 bg-[#C5A059]" />
          </div>
        </div>

        {/* Couple Photo Container (Preserves facial identity, exact smiles, expressions, hairstyles) */}
        <div className="relative w-full aspect-[4/4.6] sm:aspect-[4/4.8] rounded-t-[115px] rounded-b-md overflow-hidden bg-[#2A050B]/10 shadow-inner">
          <img
            src={imageSrc}
            alt={`${groomName} & ${brideName}`}
            className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[0.98] transition-transform duration-700 hover:scale-105"
          />

          {/* Aged Scroll Lithograph Wash Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3B0811]/60 via-transparent to-[#5A101C]/15 pointer-events-none" />
          <div className="absolute inset-0 border border-[#C5A059]/50 rounded-t-[115px] rounded-b-md pointer-events-none" />

          {/* Draped Fragrant Jasmine Charam along lower rim */}
          <div className="absolute bottom-0 inset-x-0 h-4 bg-[radial-gradient(circle,#FAF7F0_42%,#C5A059_62%,transparent_70%)] bg-[length:12px_12px] opacity-85 pointer-events-none" />
        </div>

        {/* Bottom Ornamental Floral Trim */}
        <div className="flex items-center justify-between px-3 pt-2">
          <span className="w-2 h-2 rotate-45 border border-[#C5A059] bg-[#FAF7F0]" />
          <div className="flex items-center gap-1.5">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-[11px] text-[#5A101C] font-serif">⚜</span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>
          <span className="w-2 h-2 rotate-45 border border-[#C5A059] bg-[#FAF7F0]" />
        </div>

      </div>
    </div>
  );
};

// 100% Strictly Uniform Ceremony Event Card Component
interface UniformCeremonyCardProps {
  badge: string;
  title: string;
  date: string;
  subDate?: string;
  time: string;
}

const UniformCeremonyCard: React.FC<UniformCeremonyCardProps> = ({
  badge,
  title,
  date,
  subDate,
  time,
}) => {
  return (
    <div className="relative w-full rounded-xl p-5 sm:p-6 text-center bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E6] to-[#F5EED8] border-2 border-[#C5A059] shadow-[0_4px_16px_rgba(74,14,23,0.09)] transition-transform duration-300 hover:scale-[1.01]">
      {/* Delicate Kumkum Inset Borders */}
      <div className="absolute inset-1.5 rounded-lg border border-[#8B1E2F]/30 pointer-events-none" />
      <div className="absolute inset-2.5 rounded border border-[#C5A059]/35 pointer-events-none" />

      {/* Four Corner Micro-Diamonds */}
      <span className="absolute top-2.5 left-2.5 text-[9px] text-[#C5A059] select-none">✦</span>
      <span className="absolute top-2.5 right-2.5 text-[9px] text-[#C5A059] select-none">✦</span>
      <span className="absolute bottom-2.5 left-2.5 text-[9px] text-[#C5A059] select-none">✦</span>
      <span className="absolute bottom-2.5 right-2.5 text-[9px] text-[#C5A059] select-none">✦</span>

      {/* Auspicious Badge Header */}
      <div className="relative z-10 flex items-center justify-center mb-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3B0811] border border-[#C5A059] shadow-sm">
          <span className="text-[10px] text-gold-foil font-serif select-none">❖</span>
          <span className="font-cinzel text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gold-foil">
            {badge}
          </span>
          <span className="text-[10px] text-gold-foil font-serif select-none">❖</span>
        </div>
      </div>

      {/* Ceremony English Title */}
      <h4 className="relative z-10 font-cinzel text-xl sm:text-2xl font-bold text-[#3B0811] tracking-wide my-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
        {title}
      </h4>

      {/* Gregorian Date */}
      <p className="relative z-10 font-cinzel text-sm sm:text-base font-bold text-[#420A12] tracking-wider mt-1">
        {date}
      </p>

      {/* Auspicious Note & Day */}
      {subDate && (
        <p className="relative z-10 font-cormorant italic text-xs sm:text-sm font-semibold text-[#661622] mt-0.5">
          {subDate}
        </p>
      )}

      {/* Auspicious Time Window (Identical Golden Box) */}
      <div className="relative z-10 mt-3.5 inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#EFE1C6] via-[#FDFBF7] to-[#EFE1C6] border border-[#C5A059] shadow-inner">
        <span className="text-xs select-none">🪔</span>
        <span className="font-cinzel text-xs sm:text-sm font-extrabold text-[#420A12] tracking-wider">
          {time}
        </span>
      </div>
    </div>
  );
};

export const DigitalInvitation: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Subtle physical paper tilt responding to mouse / touch movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.015);
    setRotateY(x * 0.015);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative pt-14 sm:pt-20 pb-20 sm:pb-28 px-3 sm:px-6 w-full flex flex-col items-center justify-center bg-[#1A0205] overflow-hidden">
      {/* Background Sacred Atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(74,14,23,0.85)_0%,rgba(26,2,5,0.98)_85%)]" />

      {/* Top Auspicious Maavilai Thoranam draped across Mandapam */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
        <MaavilaiThoranam />
      </div>

      {/* Flanking Majestic Brass Kuthu Vilakku Lamps */}
      <div className="absolute left-2 sm:left-6 md:left-12 lg:left-20 bottom-16 z-20 pointer-events-none hidden sm:block">
        <KuthuVilakku size="lg" lit={true} />
      </div>
      <div className="absolute right-2 sm:right-6 md:right-12 lg:right-20 bottom-16 z-20 pointer-events-none hidden sm:block">
        <KuthuVilakku size="lg" lit={true} />
      </div>


      {/* THE ANTIQUE ROYAL SCROLL WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.25s ease-out',
        }}
        className="relative z-10 w-full max-w-[560px] sm:max-w-[620px] flex flex-col items-center select-none"
      >
        {/* 1. TOP CARVED BRASS & TEAK ROLLER */}
        <ScrollRoller position="top" />

        {/* 2. UNROLLING PARCHMENT CONTAINER (Animated Unfolding) */}
        <motion.div
          initial={{ height: 0, opacity: 0.85 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1], // Royal smooth unroll curve
          }}
          className="relative w-full overflow-hidden origin-top"
        >
          {/* Unfolding Golden Light Sheen */}
          <motion.div
            initial={{ top: '0%', opacity: 0.9 }}
            animate={{ top: '100%', opacity: 0 }}
            transition={{
              duration: 1.8,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-[#FFE8A3]/30 to-transparent pointer-events-none z-30"
          />

          {/* MAIN UNROLLED AGED PARCHMENT BODY */}
          <div className="relative w-full bg-[#FAF5E8] text-[#3B0811] px-5 sm:px-10 md:px-12 py-8 sm:py-12 shadow-[0_25px_60px_-15px_rgba(10,2,4,0.75),0_0_0_1px_rgba(197,160,89,0.3)] border-x-4 border-[#5A101C]">

          {/* Authentic Woven Gold Zari Border down Left & Right Selvedges */}
          <div className="absolute top-0 bottom-0 left-1 w-2.5 sm:w-3.5 bg-[repeating-linear-gradient(0deg,#C5A059,#C5A059_3px,#FAF5E8_3px,#FAF5E8_6px,#805F24_6px,#805F24_8px)] opacity-70 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-1 w-2.5 sm:w-3.5 bg-[repeating-linear-gradient(0deg,#C5A059,#C5A059_3px,#FAF5E8_3px,#FAF5E8_6px,#805F24_6px,#805F24_8px)] opacity-70 pointer-events-none" />

          {/* Top & Bottom Cylinder Shadow Gradients */}
          <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-[#2A050B]/25 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#2A050B]/25 to-transparent pointer-events-none" />

          {/* Double Gold Foil & Kumkum Inset Borders */}
          <div className="absolute inset-x-4 sm:inset-x-6 top-4 bottom-4 border-2 border-[#C5A059]/75 rounded pointer-events-none" />
          <div className="absolute inset-x-5 sm:inset-x-7 top-5 bottom-5 border border-[#8B1E2F]/45 rounded pointer-events-none" />

          {/* Sacred Kolam Watermark on Parchment */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.04]">
            <KolamMotif size={450} />
          </div>

          {/* ========================================================
              TOP SECTION — INVOCATION & ROYAL GANESHA SEAL
              ======================================================== */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-1.5 pt-1">
            {/* Sacred Symbol (ॐ) */}
            <PillaiyarSuzhi className="mb-0.5" />


            {/* Couple's Romantic Tagline */}
            <div className="space-y-0.5 pt-0.5">
              <p className="font-cinzel text-xs sm:text-sm font-bold text-[#805F24] tracking-[0.25em] uppercase">
                {weddingData.tagline}
              </p>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#5A101C]/85 font-medium">
                {weddingData.subTagline}
              </p>
            </div>

            {/* Ornate Gold Royal Divider */}
            <div className="flex items-center justify-center gap-2 w-52 mx-auto my-2">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]" />
              <span className="w-2.5 h-2.5 rotate-45 border border-[#5A101C] bg-[#C5A059]" />
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]" />
            </div>
          </div>

          {/* ========================================================
              INVITATION PREAMBLE
              ======================================================== */}
          <div className="relative z-10 text-center space-y-1.5 my-3 sm:my-4 px-2">
            <p className="font-cormorant italic text-sm sm:text-base text-[#70501C] font-semibold tracking-wide">
              With the divine grace of the Almighty and our beloved ancestors
            </p>
            <p className="font-cormorant italic text-base sm:text-lg text-[#3B0811] leading-relaxed max-w-md mx-auto font-medium">
              We cordially invite you and your family to celebrate the auspicious wedding of our children and shower your heartfelt blessings
            </p>
          </div>

          {/* ========================================================
              COUPLE PORTRAIT IN TEMPLE MEDALLION FRAME
              ======================================================== */}
          <div className="relative z-10">
            <ScrollPortraitMedallion
              imageSrc={weddingData.coupleImage}
              brideName={weddingData.brideName}
              groomName={weddingData.groomName}
            />
          </div>

          {/* ========================================================
              COUPLE NAMES — ROYAL PATRIYEGA TYPOGRAPHY (Groom & Bride Swapped)
              ======================================================== */}
          <div className="relative z-10 text-center space-y-2 py-4 border-y-2 border-double border-[#C5A059] my-4 bg-gradient-to-b from-[#F7EEDD]/80 via-[#FDFBF7]/90 to-[#F7EEDD]/80 rounded-lg shadow-sm">
            {/* Groom Name */}
            <div className="space-y-1">
              <div className="inline-flex items-center justify-center px-3.5 py-0.5 rounded-full bg-[#3B0811]/10 border border-[#C5A059]/60 mb-0.5">
                <span className="font-cinzel text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#805F24]">
                  Groom • Selvan
                </span>
              </div>
              <h1 className="font-cinzel-dec text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#35070E] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                {weddingData.groomName}
              </h1>
            </div>

            {/* Sacred Lotus Knot */}
            <div className="flex items-center justify-center gap-3 my-1.5">
              <span className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
              <span className="font-cormorant italic text-2xl sm:text-3xl text-[#C5A059] font-light select-none">
                &
              </span>
              <span className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
            </div>

            {/* Bride Name */}
            <div className="space-y-1">
              <div className="inline-flex items-center justify-center px-3.5 py-0.5 rounded-full bg-[#3B0811]/10 border border-[#C5A059]/60 mb-0.5">
                <span className="font-cinzel text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#805F24]">
                  Bride • Selvi
                </span>
              </div>
              <h2 className="font-cinzel-dec text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#35070E] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                {weddingData.brideName}
              </h2>
            </div>

            <p className="font-cormorant text-xs sm:text-sm uppercase tracking-[0.22em] text-[#805F24] font-bold pt-1.5">
              Cordially invite your gracious presence to bless the couple
            </p>
          </div>

          {/* ========================================================
              CEREMONIES & SCHEDULE (100% UNIFORM CEREMONY CARDS)
              ======================================================== */}
          <div className="relative z-10 space-y-4 pt-3">
            {/* Section Subtitle */}
            <div className="flex items-center justify-center gap-2 mb-2 text-center">
              <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#C5A059]" />
              <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#805F24] uppercase">
                Ceremonies & Auspicious Muhurtham
              </span>
              <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#C5A059]" />
            </div>

            {/* Ceremony 1: Engagement Ceremony */}
            <UniformCeremonyCard
              badge="ENGAGEMENT CEREMONY"
              title="Engagement & Ring Ceremony"
              date="Tuesday, November 10, 2026"
              subDate="Auspicious Evening Muhurtham"
              time="6:00 PM – 9:00 PM IST"
            />

            {/* Auspicious Divider Between Ceremonies */}
            <div className="flex items-center justify-center gap-3 py-1">
              <span className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
              <span className="text-xs text-[#805F24] font-serif select-none">⚜ ❖ ⚜</span>
              <span className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
            </div>

            {/* Ceremony 2: Holy Subha Muhurtham */}
            <UniformCeremonyCard
              badge="HOLY SUBHA MUHURTHAM"
              title="Sacred Subha Muhurtham"
              date="Wednesday, November 11, 2026"
              subDate="Auspicious Morning Muhurtham (Aippasi 25)"
              time="9:00 AM – 10:00 AM IST"
            />
          </div>

          {/* Traditional Closing Blessing Note */}
          <div className="relative z-10 pt-6 sm:pt-8 text-center border-t border-[#C5A059]/50 mt-6">
            <p className="font-cormorant text-base sm:text-lg text-[#5A101C] font-bold italic drop-shadow-sm">
              Your gracious presence is our greatest joy • Warmest Welcome
            </p>
            <p className="font-cormorant uppercase tracking-[0.25em] text-xs text-[#805F24] font-semibold pt-1">
              With Best Compliments from Family & Friends
            </p>
          </div>

        </div>
        </motion.div>

        {/* 3. BOTTOM CARVED BRASS & TEAK ROLLER */}
        <ScrollRoller position="bottom" />

        {/* 4. ROYAL SILK BRAIDED CORD & HANGING GOLD TASSEL (Gently Sways) */}
        <motion.div
          animate={{ rotate: [0, 2.5, -2.5, 1, -1, 0] }}
          transition={{
            duration: 3.5,
            delay: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="origin-top"
        >
          <HangingScrollTassel />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DigitalInvitation;
