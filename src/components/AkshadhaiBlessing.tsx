import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

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
            <span className="font-tamil text-sm sm:text-base font-bold text-gold-foil">
              அட்சதை தூவி வாழ்த்துக
            </span>
            <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>

          <p className="font-cormorant italic text-xs sm:text-sm text-[#FAF7F0]/80 max-w-sm">
            Tap below to shower sacred turmeric rice & jasmine blossoms to bless Nandhini & Rudran
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

      {/* Floating Sacred Blessing Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#2A050B] via-[#4A0E17] to-[#2A050B] border-2 border-[#C5A059] shadow-[0_15px_40px_rgba(0,0,0,0.8)] text-center max-w-sm sm:max-w-md w-[90%]"
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="text-base">🌸</span>
              <span className="font-tamil font-bold text-sm sm:text-base text-gold-foil">
                மங்களம் உண்டாகுக!
              </span>
              <span className="text-base">🌾</span>
            </div>
            <p className="font-tamil text-xs sm:text-sm text-[#FAF7F0] font-medium leading-relaxed">
              “நூறாண்டு காலம் நல்வாழ்வு வாழ்க! உங்கள் ஆசிகளுக்கு நன்றி.”
            </p>
            <p className="font-cormorant italic text-[11px] sm:text-xs text-[#E5C578] pt-1">
              Thank you for showering your heartfelt blessings on Nandhini & Rudran
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
