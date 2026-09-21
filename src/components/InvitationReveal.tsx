import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import { OrnamentalCorner, PillaiyarSuzhi } from './TraditionalDecor';

interface InvitationRevealProps {
  isOpening: boolean;
  onAnimationComplete: () => void;
}

export const InvitationReveal: React.FC<InvitationRevealProps> = ({
  isOpening,
  onAnimationComplete,
}) => {
  const [animationStep, setAnimationStep] = useState<number>(0);

  useEffect(() => {
    if (isOpening) {
      // Step 1: Forward movement & seal breaking
      setAnimationStep(1);

      // Step 2: Flap opening in 3D (0.6s)
      const t1 = setTimeout(() => setAnimationStep(2), 600);

      // Step 3: Inner paper elevates and slides out (1.4s)
      const t2 = setTimeout(() => setAnimationStep(3), 1400);

      // Step 4: Golden light dissolves into the grand celebration (2.8s)
      const t3 = setTimeout(() => {
        setAnimationStep(4);
        onAnimationComplete();
      }, 2900);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [isOpening, onAnimationComplete]);

  if (!isOpening) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 flex items-center justify-center p-4 overflow-hidden pointer-events-none perspective-1000"
      >
        {/* Warm Ambient Golden Light Transition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: animationStep >= 2 ? 0.7 : 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.35)_0%,rgba(66,10,18,0.85)_60%,rgba(26,2,5,0.98)_100%)] pointer-events-none"
        />

        {/* 3D Envelope & Inner Card Unfolding Stage */}
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{
            scale: animationStep >= 1 ? 1.05 : 0.95,
            y: animationStep >= 3 ? -15 : 0,
          }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full max-w-[440px] sm:max-w-[490px] h-[580px] sm:h-[620px] flex items-center justify-center preserve-3d"
        >
          {/* 1. Envelope Back Pocket (Maroon Silk) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#35070E] via-[#2A050B] to-[#1A0205] rounded-xl border border-[#C5A059]/40 shadow-card-luxury overflow-hidden">
            {/* Shimmering Gold Lining inside the envelope */}
            <div className="absolute inset-2 bg-gradient-to-b from-[#8A6421]/30 via-[#420A12]/50 to-[#2A050B] rounded-lg border border-[#C5A059]/20" />
          </div>

          {/* 2. The Inner Ivory Cotton Wedding Invitation Card (Slides Up & Out) */}
          <motion.div
            initial={{ y: 0, scale: 0.96 }}
            animate={{
              y: animationStep >= 3 ? -90 : animationStep >= 2 ? -25 : 0,
              scale: animationStep >= 3 ? 1.02 : 0.98,
              opacity: 1,
            }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute w-[90%] h-[90%] bg-handmade-paper rounded-lg p-6 sm:p-8 border border-[#C5A059] shadow-2xl flex flex-col items-center justify-between text-center z-10"
          >
            {/* Inner Gold Foil Double Border */}
            <div className="absolute inset-3 border border-[#C5A059]/70 rounded pointer-events-none" />
            <div className="absolute inset-4 border border-[#805F24]/30 rounded pointer-events-none" />

            {/* Antique Gold Corners */}
            <OrnamentalCorner position="top-left" className="top-3 left-3" />
            <OrnamentalCorner position="top-right" className="top-3 right-3" />
            <OrnamentalCorner position="bottom-left" className="bottom-3 left-3" />
            <OrnamentalCorner position="bottom-right" className="bottom-3 right-3" />

            {/* Inner Content */}
            <div className="pt-2">
              <PillaiyarSuzhi />
              <p className="font-cormorant italic text-xs sm:text-sm font-semibold text-[#805F24] mt-1">
                {weddingData.invocation}
              </p>
            </div>

            <div className="space-y-1 my-auto">
              <p className="font-cormorant italic text-sm sm:text-base text-[#56101B]">
                Together with their families
              </p>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#2A050B] tracking-wide">
                {weddingData.groomName}
              </h3>
              <p className="font-cormorant italic text-lg text-[#805F24]">&</p>
              <h4 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#2A050B] tracking-wide">
                {weddingData.brideName}
              </h4>
              <p className="font-cormorant text-xs sm:text-sm text-[#56101B] tracking-widest uppercase pt-2">
                cordially invite you
              </p>
            </div>

            <div className="pb-2 border-t border-[#C5A059]/40 w-3/4 pt-2">
              <p className="font-cormorant font-semibold text-sm text-[#2A050B] tracking-widest uppercase">
                {weddingData.day} • {weddingData.date}
              </p>
              <p className="font-cormorant text-xs text-[#805F24] tracking-wider">
                {weddingData.venueName}
              </p>
            </div>
          </motion.div>

          {/* 3. Envelope Triangular Front Pocket & Lower Flap */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#2A050B] to-[#3B0811] rounded-b-xl border-t border-[#C5A059]/50 shadow-lg z-20 pointer-events-none flex items-center justify-center">
            {/* Front gold seal motif */}
            <div className="w-10 h-10 rounded-full border border-[#C5A059] bg-[#420A12] flex items-center justify-center shadow-gold-subtle -mt-16">
              <span className="font-serif text-sm text-gold-foil">ॐ</span>
            </div>
          </div>

          {/* 4. Envelope Top Flap (Flips Open in 3D with rotateX) */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{
              rotateX: animationStep >= 2 ? -175 : 0,
            }}
            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: 'top center' }}
            className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-[#3B0811] to-[#2A050B] rounded-t-xl border-b-2 border-[#C5A059] shadow-xl z-30 preserve-3d"
          >
            {/* Gold trim along flap edge */}
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gold-gradient" />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
