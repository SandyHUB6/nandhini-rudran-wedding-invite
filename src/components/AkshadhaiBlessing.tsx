import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, X } from 'lucide-react';

interface Grain {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rot: number;
  vRot: number;
  color: string;
  type: 'rice' | 'jasmine' | 'rose' | 'gold';
  opacity: number;
}

export const AkshadhaiBlessing: React.FC = () => {
  const [blessingCount, setBlessingCount] = useState<number>(28);
  const [hasBlessed, setHasBlessed] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const grainsRef = useRef<Grain[]>([]);
  const isAnimatingRef = useRef<boolean>(false);

  // Trigger Akshadhai Shower Animation
  const triggerAkshadhai = () => {
    setBlessingCount((prev) => prev + 1);
    setHasBlessed(true);
    setShowToast(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = canvas.width;

    // Create 90 golden turmeric rice grains, jasmine petals, and rose flakes
    const newGrains: Grain[] = [];
    const colors = ['#E5C578', '#D4AF37', '#FFD700', '#F9E8B2'];

    for (let i = 0; i < 90; i++) {
      const type = i % 3 === 0 ? 'rice' : i % 5 === 0 ? 'rose' : i % 2 === 0 ? 'jasmine' : 'gold';
      newGrains.push({
        x: width * 0.2 + Math.random() * (width * 0.6),
        y: Math.random() * -60 - 20,
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 2.5 + 2.5,
        size: type === 'rice' ? Math.random() * 3 + 2.5 : Math.random() * 7 + 5,
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        type,
        opacity: 1,
      });
    }

    grainsRef.current = [...grainsRef.current, ...newGrains];

    if (!isAnimatingRef.current) {
      isAnimatingRef.current = true;
      runAnimation();
    }

    // Auto-dismiss toast after 4.5s
    setTimeout(() => {
      setShowToast(false);
    }, 4500);
  };

  const runAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      isAnimatingRef.current = false;
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      isAnimatingRef.current = false;
      return;
    }

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    grainsRef.current = grainsRef.current.filter((g) => g.y < height + 40 && g.opacity > 0.05);

    grainsRef.current.forEach((g) => {
      g.x += g.vx;
      g.y += g.vy;
      g.rot += g.vRot;
      if (g.y > height * 0.75) {
        g.opacity -= 0.015;
      }

      ctx.save();
      ctx.translate(g.x, g.y);
      ctx.rotate((g.rot * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, g.opacity);

      if (g.type === 'rice') {
        // Turmeric-coated sacred golden rice grain (Manjal Akshadhai)
        ctx.beginPath();
        ctx.ellipse(0, 0, g.size * 0.45, g.size * 1.3, 0, 0, Math.PI * 2);
        ctx.fillStyle = g.color;
        ctx.fill();
        ctx.strokeStyle = '#B8860B';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else if (g.type === 'jasmine') {
        // Fragrant Jasmine petal (Malli poo)
        ctx.beginPath();
        ctx.ellipse(0, 0, g.size * 0.6, g.size, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, g.size * 0.3, g.size * 0.15, 0, Math.PI * 2);
        ctx.fillStyle = '#FFE680';
        ctx.fill();
      } else if (g.type === 'rose') {
        // Crimson rose petal
        ctx.beginPath();
        ctx.ellipse(0, 0, g.size * 0.7, g.size * 0.9, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#8B1E2F';
        ctx.fill();
      } else {
        // Antique gold flake
        ctx.fillStyle = '#D4AF37';
        ctx.fillRect(-g.size * 0.4, -g.size * 0.4, g.size * 0.8, g.size * 0.8);
      }

      ctx.restore();
    });

    if (grainsRef.current.length > 0) {
      requestAnimationFrame(runAnimation);
    } else {
      isAnimatingRef.current = false;
      ctx.clearRect(0, 0, width, height);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Fullscreen Overlay Canvas for Falling Akshadhai & Jasmine */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50"
      />

      {/* Interactive Blessing Button Section */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center my-8 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center space-y-3 p-6 sm:p-7 rounded-2xl border border-[#C5A059]/40 bg-gradient-to-b from-[#2A050B]/80 via-[#3B0811]/90 to-[#1A0205] shadow-card-luxury max-w-lg w-full"
        >
          {/* Sacred Title */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="font-cinzel text-xs sm:text-sm font-bold text-gold-foil uppercase tracking-wider">
              Shower Your Sacred Blessings
            </span>
            <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>

          <p className="font-cormorant italic text-xs sm:text-sm text-[#FAF7F0]/80 max-w-sm">
            Tap below to shower sacred turmeric rice & jasmine blossoms to bless Rudran & Nandhini
          </p>

          {/* Interactive Button */}
          <motion.button
            type="button"
            onClick={triggerAkshadhai}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group relative flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-[#C5A059] bg-gradient-to-r from-[#4A0E17] via-[#5A101C] to-[#4A0E17] shadow-gold-subtle hover:shadow-gold-glow transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer sweep */}
            <div className="absolute inset-0 bg-gold-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <span className="text-base select-none">🌾</span>

            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.18em] text-gold-foil uppercase">
              {hasBlessed ? 'Shower More Blessings' : 'Shower Akshadhai'}
            </span>

            <Sparkles className="w-4 h-4 text-[#E5C578] group-hover:rotate-12 transition-transform" />
          </motion.button>

          {/* Communal Blessing Counter */}
          <div className="flex items-center gap-2 pt-1 text-xs text-[#C5A059]/80 font-cormorant tracking-wide">
            <Heart className="w-3.5 h-3.5 text-[#E5C578] fill-[#E5C578]" />
            <span>
              {blessingCount} blessings showered with love
            </span>
          </div>
        </motion.div>
      </div>

      {/* Centered Sacred Blessing Toast (Responsive via Media Queries & Rendered in Portal) */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {showToast && (
              <div
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 pointer-events-none"
                role="dialog"
                aria-modal="true"
                aria-labelledby="blessing-toast-title"
              >
                {/* Subtle dismiss backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setShowToast(false)}
                  className="fixed inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-auto"
                  aria-hidden="true"
                />

                {/* Centered Modal Toast Card with Media Query Responsiveness */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.88, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="pointer-events-auto relative z-10 w-[92vw] max-w-[340px] sm:max-w-[420px] md:max-w-[480px] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 bg-gradient-to-b from-[#3B0811] via-[#2A050B] to-[#1A0205] border-2 border-[#C5A059] shadow-[0_0_50px_rgba(197,160,89,0.3),0_20px_50px_rgba(0,0,0,0.95)] text-center cursor-default backdrop-blur-md"
                >
                  {/* Inner Fine Gold Border */}
                  <div className="absolute inset-1.5 sm:inset-2 rounded-xl sm:rounded-2xl border border-[#C5A059]/40 pointer-events-none" />

                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => setShowToast(false)}
                    className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 p-1.5 rounded-full text-[#E5C578]/80 hover:text-[#FAF7F0] hover:bg-[#FAF7F0]/10 transition-colors z-20"
                    aria-label="Dismiss toast"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Toast Icon & Header */}
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 pr-6 pl-6">
                    <span className="text-base sm:text-xl select-none">🌸</span>
                    <h3
                      id="blessing-toast-title"
                      className="font-cinzel font-bold text-xs sm:text-sm md:text-base text-gold-foil uppercase tracking-wider"
                    >
                      Auspicious Blessings Bestowed!
                    </h3>
                    <span className="text-base sm:text-xl select-none">🌾</span>
                  </div>

                  {/* Blessing Quote */}
                  <p className="font-cormorant italic text-sm sm:text-base md:text-lg text-[#FAF7F0] font-medium leading-relaxed my-2 px-1">
                    “May they live a long, blissful, and joyful life together! Thank you for your heartfelt blessings.”
                  </p>

                  {/* Decorative Divider */}
                  <div className="flex items-center justify-center gap-2 w-28 sm:w-36 mx-auto my-2 opacity-60">
                    <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]" />
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
                    <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]" />
                  </div>

                  {/* Couple Subtext */}
                  <p className="font-cormorant italic text-xs sm:text-sm text-[#E5C578] pt-0.5">
                    Sacred Akshadhai showered on Rudran & Nandhini
                  </p>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};
