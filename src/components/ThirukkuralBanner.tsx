import React from 'react';
import { motion } from 'framer-motion';

/**
 * Auspicious Thirukkural (Couplet 45) - The Sacred blessing on domestic love and righteousness.
 */
export const ThirukkuralBanner: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 w-full flex flex-col items-center justify-center bg-[#150103] overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.08)_0%,transparent_75%)]" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center space-y-3 px-6 py-6 sm:py-8 rounded-xl border-y border-[#C5A059]/30"
      >
        {/* Sacred Quill / Lotus Icon */}
        <span className="text-sm select-none text-gold-foil">🪷</span>

        {/* The Sacred Blessing Verse in English */}
        <div className="space-y-2">
          <p className="font-cormorant italic text-lg sm:text-xl md:text-2xl font-bold text-gold-foil leading-relaxed tracking-wide drop-shadow-sm">
            “When love and virtue grace a married life,
            <br />
            that union blossoms into its truest character and crowning joy.”
          </p>
          <p className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#C5A059]/85 font-semibold">
            — Sacred Thirukkural • Couplet 45 (Domestic Harmony)
          </p>
        </div>

        {/* Poetic Blessing Note */}
        <p className="font-cormorant italic text-xs sm:text-sm text-[#FAF7F0]/75 max-w-md mx-auto pt-1 leading-relaxed">
          May their journey of togetherness be blessed with eternal love, happiness, and profound companionship.
        </p>

        {/* Ornamental End Flourish */}
        <div className="flex items-center gap-2 pt-1 opacity-70">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#C5A059]" />
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>
      </motion.div>
    </section>
  );
};
