import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import {
  MaavilaiThoranam,
  KuthuVilakku,
  KolamMotif,
  OrnamentalCorner,
  PillaiyarSuzhi,
} from './TraditionalDecor';
import { playTempleBellChime } from '../utils/audioUtils';

interface InvitationCoverProps {
  onOpen: () => void;
  isOpening: boolean;
}

export const InvitationCover: React.FC<InvitationCoverProps> = ({ onOpen, isOpening }) => {
  const handleCardClick = () => {
    if (!isOpening) {
      playTempleBellChime();
      onOpen();
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden bg-maroon-pattern">
      {/* Soft Ambient Radial Light simulating temple oil lamps & morning sunlight */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.12)_0%,rgba(42,5,11,0.7)_60%,rgba(26,2,5,0.95)_100%)]" />

      {/* Top Maavilai Thoranam */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <MaavilaiThoranam />
      </div>

      {/* Background Sacred Kolam Watermarks */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <KolamMotif size={650} />
      </div>

      {/* Flanking Brass Kuthu Vilakku (Hidden on tiny screens, majestic on tablet/desktop) */}
      <div className="absolute left-2 sm:left-6 md:left-12 lg:left-20 bottom-0 pointer-events-none z-10 hidden sm:block">
        <KuthuVilakku size="lg" lit={true} />
      </div>
      <div className="absolute right-2 sm:right-6 md:right-12 lg:right-20 bottom-0 pointer-events-none z-10 hidden sm:block">
        <KuthuVilakku size="lg" lit={true} />
      </div>

      {/* The Luxury Physical Wedding Invitation Card / Envelope */}
      <motion.div
        layout
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: isOpening ? 1.04 : 1,
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] perspective-1000"
      >
        {/* Envelope / Pocket Card Container */}
        <div
          onClick={handleCardClick}
          className="relative bg-gradient-to-b from-[#3B0811] via-[#2A050B] to-[#1E0307] rounded-xl p-6 sm:p-9 md:p-10 border border-[#C5A059]/40 shadow-envelope cursor-pointer group transition-all duration-700 hover:border-[#C5A059] hover:shadow-card-luxury"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleCardClick();
            }
          }}
          aria-label="Open Wedding Invitation"
        >
          {/* Inner Paper Inset Border (Double Gold Line with Corner Filigree) */}
          <div className="absolute inset-3 sm:inset-4 border border-[#C5A059]/50 rounded-lg pointer-events-none" />
          <div className="absolute inset-4 sm:inset-5 border border-[#805F24]/40 rounded pointer-events-none" />

          {/* 4 Corner Antique Gold Ornaments */}
          <OrnamentalCorner position="top-left" className="top-3 left-3 sm:top-4 sm:left-4" />
          <OrnamentalCorner position="top-right" className="top-3 right-3 sm:top-4 sm:right-4" />
          <OrnamentalCorner position="bottom-left" className="bottom-3 left-3 sm:bottom-4 sm:left-4" />
          <OrnamentalCorner position="bottom-right" className="bottom-3 right-3 sm:bottom-4 sm:right-4" />

          {/* Card Content Header */}
          <div className="flex flex-col items-center text-center space-y-4 pt-2">
            {/* Auspicious Pillaiyar Suzhi */}
            <PillaiyarSuzhi />

            {/* Invocational Header: ஸ்ரீ விக்னேஸ்வரர் துணை */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="font-tamil text-sm sm:text-base font-semibold text-gold-foil tracking-wide"
            >
              {weddingData.invocationTamil}
            </motion.p>

            {/* Subtle Divider with Diamond Accent */}
            <div className="flex items-center justify-center gap-2 w-full max-w-[200px] my-1 opacity-70">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
            </div>

            {/* Couple Names - The Crown of the Invitation */}
            <div className="py-2 space-y-2">
              <div className="space-y-0.5">
                <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#420A12]/60 border border-[#C5A059]/40 mb-1">
                  <span className="font-tamil text-[10px] sm:text-xs text-[#E5C578] font-medium">
                    மணமகள் : செல்வி.
                  </span>
                  <span className="text-[#C5A059] text-[10px]">•</span>
                  <span className="font-cinzel text-[9px] sm:text-[10px] text-[#E5C578] font-bold tracking-wider uppercase">
                    Bride : Selvi
                  </span>
                </div>
                <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-gold-foil">
                  {weddingData.brideName}
                </h1>
                <p className="font-tamil text-xs sm:text-sm text-[#E5C578] font-medium">
                  {weddingData.brideTamil}
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 my-1">
                <span className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
                <p className="font-cormorant italic text-lg sm:text-2xl text-[#E5C578]/80 font-normal select-none">
                  &
                </p>
                <span className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
              </div>

              <div className="space-y-0.5">
                <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#420A12]/60 border border-[#C5A059]/40 mb-1">
                  <span className="font-tamil text-[10px] sm:text-xs text-[#E5C578] font-medium">
                    மணமகன் : செல்வன்.
                  </span>
                  <span className="text-[#C5A059] text-[10px]">•</span>
                  <span className="font-cinzel text-[9px] sm:text-[10px] text-[#E5C578] font-bold tracking-wider uppercase">
                    Groom : Selvan
                  </span>
                </div>
                <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-gold-foil">
                  {weddingData.groomName}
                </h2>
                <p className="font-tamil text-xs sm:text-sm text-[#E5C578] font-medium">
                  {weddingData.groomTamil}
                </p>
              </div>
            </div>

            {/* Tamil Subtitle and English Subtitle */}
            <div className="space-y-0.5 pt-1">
              <p className="font-tamil text-xs sm:text-sm text-[#FAF7F0]/80 tracking-widest uppercase">
                {weddingData.invitationTamilSubtitle}
              </p>
              <p className="font-cormorant uppercase tracking-[0.25em] text-xs sm:text-sm text-[#C5A059]/90 font-medium">
                {weddingData.invitationEnglishSubtitle}
              </p>
            </div>

            {/* Traditional Auspicious Wedding Date Preview */}
            <div className="pt-2 text-center">
              <p className="font-cormorant text-sm sm:text-base text-[#FAF7F0]/70 tracking-widest">
                {weddingData.date}
              </p>
            </div>

            {/* Signature Interactive Button: "OPEN INVITATION" */}
            <div className="pt-6 pb-2 w-full flex justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                className="relative group/btn flex items-center gap-3 px-7 py-3 rounded-full bg-gradient-to-r from-[#2A050B] via-[#4A0E17] to-[#2A050B] border border-[#C5A059] shadow-gold-subtle overflow-hidden"
              >
                {/* Shimmer sweep effect */}
                <div className="absolute inset-0 bg-gold-shimmer opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Wax seal inspired gold emblem */}
                <span className="w-5 h-5 rounded-full border border-[#F5DE9C] flex items-center justify-center text-[10px] text-gold-foil bg-[#805F24]/30 font-serif">
                  உ
                </span>

                <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold-foil">
                  {isOpening ? 'OPENING...' : 'OPEN INVITATION'}
                </span>

                {/* Subtle Pulsing Outer Ring */}
                <span className="absolute -inset-1 rounded-full border border-[#C5A059]/30 animate-pulse pointer-events-none" />
              </motion.button>
            </div>

            {/* Tactile interaction prompt */}
            <p className="text-[11px] font-sans text-[#C5A059]/60 tracking-wider pt-1">
              Tap anywhere to unseal invitation
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
