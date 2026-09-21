import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, X } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import { OrnamentalCorner } from './TraditionalDecor';
import { playTempleBellChime } from '../utils/audioUtils';

interface AkshadhaiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rot: number;
  vRot: number;
  sway: number;
  vSway: number;
  color: string;
  type: 'rice' | 'jasmine' | 'rose' | 'gold';
  opacity: number;
}

export const PhotoMoment: React.FC = () => {
  const [blessingCount, setBlessingCount] = useState<number>(42);
  const [hasBlessed, setHasBlessed] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<AkshadhaiParticle[]>([]);
  const isAnimatingRef = useRef<boolean>(false);
  const dprRef = useRef<number>(1);

  // Update canvas size accurately matching container bounds and DPR
  const updateCanvasSize = () => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;

    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
  };

  useEffect(() => {
    updateCanvasSize();
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });
    resizeObserver.observe(container);

    window.addEventListener('resize', updateCanvasSize);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  // Trigger sacred Akshadhai shower directly falling over the couple
  const triggerAkshadhaiOnCouple = (clickX?: number, clickY?: number) => {
    // Play sacred temple bell blessing chime
    playTempleBellChime();

    setBlessingCount((prev) => prev + 1);
    setHasBlessed(true);
    setShowToast(true);

    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const width = rect.width;

    const newParticles: AkshadhaiParticle[] = [];
    const colors = ['#FFF2B2', '#F9E8B2', '#E5C578', '#D4AF37', '#FFD700', '#C5A059'];

    // 1. Broad rainfall over couple's crowns, shoulders, and garlands (120 particles)
    for (let i = 0; i < 120; i++) {
      // Traditional composition: 60% turmeric rice, 25% jasmine flowers, 10% rose petals, 5% gold specks
      const rand = Math.random();
      const type: 'rice' | 'jasmine' | 'rose' | 'gold' =
        rand < 0.6 ? 'rice' : rand < 0.85 ? 'jasmine' : rand < 0.95 ? 'rose' : 'gold';

      newParticles.push({
        // Concentrated across couple's seated width (15% to 85%)
        x: width * 0.15 + Math.random() * (width * 0.7),
        y: Math.random() * -80 - 15,
        vx: (Math.random() - 0.5) * 1.8,
        vy: Math.random() * 2.6 + 2.2,
        size:
          type === 'rice'
            ? Math.random() * 3 + 2.6
            : type === 'jasmine'
            ? Math.random() * 6 + 6
            : type === 'rose'
            ? Math.random() * 7 + 7
            : Math.random() * 3 + 2,
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 5,
        sway: Math.random() * Math.PI * 2,
        vSway: Math.random() * 0.06 + 0.03,
        color: colors[Math.floor(Math.random() * colors.length)],
        type,
        opacity: 1,
      });
    }

    // 2. If user tapped on a specific spot on the photo, add an intimate localized burst (25 particles)
    if (clickX !== undefined && clickY !== undefined) {
      for (let i = 0; i < 25; i++) {
        const rand = Math.random();
        const type: 'rice' | 'jasmine' | 'rose' | 'gold' =
          rand < 0.5 ? 'rice' : rand < 0.8 ? 'jasmine' : 'rose';

        newParticles.push({
          x: clickX + (Math.random() - 0.5) * 35,
          y: clickY + (Math.random() - 0.5) * 25,
          vx: (Math.random() - 0.5) * 3.5,
          vy: Math.random() * 2.0 + 1.2,
          size: type === 'rice' ? 3.5 : 7,
          rot: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 6,
          sway: Math.random() * Math.PI * 2,
          vSway: 0.05,
          color: colors[Math.floor(Math.random() * colors.length)],
          type,
          opacity: 1,
        });
      }
    }

    particlesRef.current = [...particlesRef.current, ...newParticles];

    if (!isAnimatingRef.current) {
      isAnimatingRef.current = true;
      runAnimation();
    }

    // Auto-dismiss toast
    setTimeout(() => {
      setShowToast(false);
    }, 4500);
  };

  const runAnimation = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) {
      isAnimatingRef.current = false;
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      isAnimatingRef.current = false;
      return;
    }

    const rect = container.getBoundingClientRect();
    const height = rect.height;
    const dpr = dprRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.scale(dpr, dpr);

    // Keep active particles
    particlesRef.current = particlesRef.current.filter(
      (p) => p.y < height + 40 && p.opacity > 0.05
    );

    particlesRef.current.forEach((p) => {
      p.sway += p.vSway;
      p.x += p.vx + Math.sin(p.sway) * 0.7;
      p.y += p.vy;
      p.rot += p.vRot;

      // Soft fade as it approaches bottom
      if (p.y > height * 0.75) {
        p.opacity -= 0.018;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);

      if (p.type === 'rice') {
        // Sacred turmeric-coated golden rice grain (மஞ்சள் அட்சதை)
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.42, p.size * 1.35, 0, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.strokeStyle = '#8B5A10';
        ctx.lineWidth = 0.6;
        ctx.stroke();

        // Shimmer glint on rice grain
        ctx.beginPath();
        ctx.arc(-p.size * 0.1, -p.size * 0.4, p.size * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
      } else if (p.type === 'jasmine') {
        // Fragrant white Jasmine blossom (மல்லிகைப் பூ)
        const petRadius = p.size * 0.45;
        // 5 white petals
        for (let j = 0; j < 5; j++) {
          const angle = (j * 72 * Math.PI) / 180;
          const px = Math.cos(angle) * petRadius;
          const py = Math.sin(angle) * petRadius;
          ctx.beginPath();
          ctx.ellipse(px, py, petRadius * 0.6, petRadius * 0.9, angle, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        }
        // Tender golden center
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.22, 0, Math.PI * 2);
        ctx.fillStyle = '#FFDD55';
        ctx.fill();
      } else if (p.type === 'rose') {
        // Crimson South Indian temple rose petal (ரோஜா இதழ்)
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.75, p.size * 1.05, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#9B1B30';
        ctx.fill();
        ctx.strokeStyle = '#5E0E1B';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else {
        // Shimmering antique gold foil flake
        ctx.fillStyle = '#D4AF37';
        ctx.fillRect(-p.size * 0.5, -p.size * 0.5, p.size, p.size);
      }

      ctx.restore();
    });

    ctx.restore();

    if (particlesRef.current.length > 0) {
      requestAnimationFrame(runAnimation);
    } else {
      isAnimatingRef.current = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 w-full flex flex-col items-center justify-center bg-[#1A0205] overflow-hidden">
      {/* Background Sacred Atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(66,10,18,0.5)_0%,rgba(26,2,5,0.98)_80%)]" />

      {/* Editorial Frame Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-4xl rounded-2xl p-3 sm:p-4 md:p-6 border border-[#C5A059]/40 bg-gradient-to-b from-[#3B0811] via-[#2A050B] to-[#1A0205] shadow-[0_30px_70px_-10px_rgba(0,0,0,0.85)]"
      >
        {/* Corner Filigrees */}
        <OrnamentalCorner position="top-left" className="top-2 left-2 sm:top-3 sm:left-3" />
        <OrnamentalCorner position="top-right" className="top-2 right-2 sm:top-3 sm:right-3" />
        <OrnamentalCorner position="bottom-left" className="bottom-2 left-2 sm:bottom-3 sm:left-3" />
        <OrnamentalCorner position="bottom-right" className="bottom-2 right-2 sm:bottom-3 sm:right-3" />

        {/* ========================================================
            INNER CONTAINER WITH COUPLE PHOTOGRAPH & INTERACTIVE SHOWER
            ======================================================== */}
        <div
          ref={containerRef}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            triggerAkshadhaiOnCouple(clickX, clickY);
          }}
          className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#C5A059]/40 cursor-pointer group/photo select-none"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              triggerAkshadhaiOnCouple();
            }
          }}
          aria-label="Tap to shower Akshadhai on the couple"
        >
          {/* Couple Photograph Seated Together on Traditional Oonjal */}
          <motion.img
            src={weddingData.secondaryCoupleImage}
            alt={`${weddingData.brideName} and ${weddingData.groomName}`}
            initial={{ scale: 1 }}
            animate={{ scale: 1.04 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 16,
              ease: 'easeInOut',
            }}
            className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.03] transition-transform duration-500 group-hover/photo:scale-[1.03]"
          />

          {/* DEDICATED AKSHADHAI CANVAS DIRECTLY OVER THE COUPLE */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-20"
          />

          {/* Top-Right Interactive Prompt Overlay on Photograph */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 px-3.5 py-1.5 rounded-full bg-[#1A0205]/85 backdrop-blur-sm border border-[#C5A059]/70 flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.6)] pointer-events-none transition-all duration-300 group-hover/photo:border-[#E5C578] group-hover/photo:scale-105">
            <span className="text-xs sm:text-sm animate-bounce">🌾</span>
            <span className="font-cinzel text-[10px] sm:text-xs tracking-wider text-[#E5C578] font-bold uppercase">
              Tap photo to shower Akshadhai
            </span>
          </div>

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0205]/85 via-transparent to-[#1A0205]/20 pointer-events-none" />

          {/* Bottom Editorial Caption */}
          <div className="absolute bottom-4 sm:bottom-8 inset-x-4 sm:inset-x-8 flex flex-col items-center text-center pointer-events-none space-y-1 z-10">
            <p className="font-cormorant italic text-sm sm:text-lg text-[#E5C578] drop-shadow-md">
              “From shared classrooms to a lifetime of sacred togetherness”
            </p>
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#FAF7F0]/85 uppercase font-medium">
              A Decade of Us • 2016 – 2026
            </p>
          </div>
        </div>

        {/* ========================================================
            INTERACTIVE BLESSING CONTROLLER DIRECTLY BENEATH PHOTO
            ======================================================== */}
        <div className="pt-6 pb-2 w-full flex flex-col items-center text-center space-y-2.5">
          <motion.button
            type="button"
            onClick={() => triggerAkshadhaiOnCouple()}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group relative flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-[#C5A059] bg-gradient-to-r from-[#4A0E17] via-[#5A101C] to-[#4A0E17] shadow-gold-subtle hover:shadow-gold-glow transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Shimmer sweep */}
            <div className="absolute inset-0 bg-gold-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <span className="text-base select-none">🌾</span>

            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.18em] text-gold-foil uppercase">
              {hasBlessed ? 'Shower More Akshadhai' : 'Shower Akshadhai on Couple'}
            </span>

            <Sparkles className="w-4 h-4 text-[#E5C578] group-hover:rotate-12 transition-transform" />
          </motion.button>

          {/* Communal Blessing Counter & Subtitle */}
          <div className="flex items-center gap-2 text-xs text-[#C5A059]/80 font-cormorant tracking-wide">
            <Heart className="w-3.5 h-3.5 text-[#E5C578] fill-[#E5C578]" />
            <span>
              {blessingCount} sacred blessings showered upon Nandhini & Rudran
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating Sacred Blessing Toast (Mobile-Responsive & Tap-to-Dismiss) */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={() => setShowToast(false)}
            className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-gradient-to-r from-[#2A050B] via-[#4A0E17] to-[#2A050B] border border-[#C5A059] shadow-[0_10px_35px_rgba(0,0,0,0.85)] text-center w-[calc(100%-2rem)] max-w-[360px] sm:max-w-md cursor-pointer backdrop-blur-md"
            role="alert"
            aria-live="polite"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowToast(false);
              }}
              className="absolute top-2 right-2 p-1 rounded-full text-[#E5C578]/70 hover:text-[#FAF7F0] hover:bg-[#FAF7F0]/10 transition-colors"
              aria-label="Dismiss toast"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center justify-center gap-1.5 mb-0.5 pr-4 pl-4">
              <span className="text-sm select-none">🌸</span>
              <span className="font-arima font-bold text-sm sm:text-base text-gold-foil">
                மங்களம் உண்டாகுக!
              </span>
              <span className="text-sm select-none">🌾</span>
            </div>

            <p className="font-tamil text-[11px] sm:text-xs text-[#FAF7F0] font-medium leading-snug">
              “நூறாண்டு காலம் நல்வாழ்வு வாழ்க! உங்கள் ஆசிகளுக்கு நன்றி.”
            </p>

            <p className="font-cormorant italic text-[10px] sm:text-[11px] text-[#E5C578] pt-0.5">
              Sacred Akshadhai showered on Nandhini & Rudran
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoMoment;
