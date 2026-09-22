import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send, MessageCircle, User } from 'lucide-react';
import { seedBlessingsData, BlessingItem } from '../config/weddingData';
import { KolamMotif } from './TraditionalDecor';

const STORAGE_KEY = 'rudran_nandhini_blessings_tree';

export const DigitalBlessingTree: React.FC = () => {
  const [blessings, setBlessings] = useState<BlessingItem[]>([]);
  const [guestName, setGuestName] = useState('');
  const [message, setMessage] = useState('');
  const [activeBlessing, setActiveBlessing] = useState<BlessingItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  // Load from localStorage or seed
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setBlessings(parsed);
          setActiveBlessing(parsed[parsed.length - 1]);
          return;
        }
      }
    } catch (e) {
      console.warn('Could not read blessings from localStorage', e);
    }
    setBlessings(seedBlessingsData);
    setActiveBlessing(seedBlessingsData[0]);
  }, []);

  // Save to localStorage
  const saveBlessings = (newBlessings: BlessingItem[]) => {
    setBlessings(newBlessings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newBlessings));
    } catch (e) {
      console.warn('Could not write blessings to localStorage', e);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!guestName.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!message.trim()) {
      setFormError('Please write your heartfelt blessing for the couple.');
      return;
    }

    setIsSubmitting(true);

    const colors = ['#C5A059', '#8E2232', '#345E47', '#E5C578', '#D4AF37'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newBlessing: BlessingItem = {
      id: `blessing-${Date.now()}`,
      guestName: guestName.trim(),
      message: message.trim(),
      timestamp: 'Just now',
      avatarColor: randomColor,
    };

    setTimeout(() => {
      const updated = [newBlessing, ...blessings];
      saveBlessings(updated);
      setActiveBlessing(newBlessing);
      setGuestName('');
      setMessage('');
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setTimeout(() => setSubmittedSuccess(false), 4000);
    }, 600);
  };

  // Fixed coordinates for flowers on tree branches
  const flowerPositions = [
    { x: 30, y: 35 },
    { x: 70, y: 32 },
    { x: 45, y: 22 },
    { x: 55, y: 20 },
    { x: 22, y: 48 },
    { x: 78, y: 45 },
    { x: 38, y: 38 },
    { x: 62, y: 36 },
    { x: 50, y: 30 },
    { x: 18, y: 38 },
    { x: 82, y: 35 },
    { x: 32, y: 26 },
    { x: 68, y: 24 },
    { x: 42, y: 15 },
    { x: 58, y: 14 },
    { x: 26, y: 55 },
    { x: 74, y: 52 },
    { x: 50, y: 12 },
  ];

  return (
    <section
      id="blessings"
      className="relative w-full py-16 sm:py-24 px-3 sm:px-6 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1A0205] via-[#2A050B] to-[#120104]"
      aria-label="Digital Blessing Tree"
    >
      {/* Background Kolam Atmosphere */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.05]">
        <KolamMotif size={650} />
      </div>

      {/* Section Header */}
      <div className="relative z-20 text-center mb-8 sm:mb-12 space-y-2">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="font-cormorant uppercase tracking-[0.3em] text-xs sm:text-sm text-[#E5C578] font-semibold">
            Sacred Guestbook & Wishes
          </span>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-gold-foil tracking-wide uppercase">
          Your Blessings, Our Memories
        </h2>
        <p className="font-cormorant italic text-sm sm:text-base md:text-lg text-[#FAF7F0]/85 max-w-lg mx-auto">
          Leave us a message and let your blessing become part of our wedding story.
        </p>

        {/* Counter Badge */}
        <div className="pt-1 flex items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-0.5 rounded-full bg-[#3B0811] border border-[#C5A059]/40 text-xs font-cinzel text-[#E5C578]">
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            <span>{blessings.length} Sacred Blessings on the Tree</span>
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT: BOTANICAL TREE + BLESSING FORM / CARDS */}
      <div className="relative z-20 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* =========================================================================
            THE INTERACTIVE BOTANICAL WEDDING TREE (SVG + BLOOMING FLOWERS)
            ========================================================================= */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-3xl p-4 sm:p-6 bg-gradient-to-b from-[#25050B] via-[#1B0307] to-[#120204] border-2 border-[#C5A059] shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden flex items-center justify-center select-none">
            
            {/* Ambient Radial Golden Glow Behind Tree Canopy */}
            <div className="absolute top-10 inset-x-8 h-64 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(197,160,89,0.08)_50%,transparent_75%)] pointer-events-none filter blur-md" />

            {/* Botanical Tree Trunk and Branches SVG */}
            <svg
              viewBox="0 0 500 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-contain"
            >
              <defs>
                <linearGradient id="barkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8A6421" />
                  <stop offset="35%" stopColor="#5A3E0C" />
                  <stop offset="70%" stopColor="#3B2606" />
                  <stop offset="100%" stopColor="#241502" />
                </linearGradient>
                <linearGradient id="leafGradTree" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4E8D56" />
                  <stop offset="50%" stopColor="#2E6930" />
                  <stop offset="100%" stopColor="#1B4D20" />
                </linearGradient>
              </defs>

              {/* Main Trunk Base */}
              <path
                d="M210,580 C230,460 215,380 235,300 C245,260 255,260 265,300 C285,380 270,460 290,580 Z"
                fill="url(#barkGrad)"
              />
              {/* Root flares */}
              <path d="M210,580 C180,590 140,595 120,600 L240,600 Z" fill="url(#barkGrad)" />
              <path d="M290,580 C320,590 360,595 380,600 L260,600 Z" fill="url(#barkGrad)" />

              {/* Major Left Bough */}
              <path
                d="M235,310 C180,270 140,240 90,270 C85,265 95,255 120,245 C160,230 205,265 242,285 Z"
                fill="url(#barkGrad)"
              />
              <path
                d="M150,240 C120,200 95,170 50,185 C65,175 110,185 145,215 Z"
                fill="url(#barkGrad)"
              />

              {/* Major Right Bough */}
              <path
                d="M265,310 C320,270 360,240 410,270 C415,265 405,255 380,245 C340,230 295,265 258,285 Z"
                fill="url(#barkGrad)"
              />
              <path
                d="M350,240 C380,200 405,170 450,185 C435,175 390,185 355,215 Z"
                fill="url(#barkGrad)"
              />

              {/* Center Canopy Branches */}
              <path
                d="M245,280 C235,220 210,160 180,120 C195,120 225,160 248,220 Z"
                fill="url(#barkGrad)"
              />
              <path
                d="M255,280 C265,220 290,160 320,120 C305,120 275,160 252,220 Z"
                fill="url(#barkGrad)"
              />
              <path
                d="M248,220 C250,170 250,130 250,80 C252,130 252,170 252,220 Z"
                stroke="url(#barkGrad)"
                strokeWidth="8"
              />

              {/* Foliage Clusters */}
              {[
                { cx: 120, cy: 220, r: 42 },
                { cx: 200, cy: 140, r: 46 },
                { cx: 300, cy: 140, r: 46 },
                { cx: 380, cy: 220, r: 42 },
                { cx: 250, cy: 100, r: 48 },
                { cx: 160, cy: 260, r: 36 },
                { cx: 340, cy: 260, r: 36 },
              ].map((c, i) => (
                <circle
                  key={i}
                  cx={c.cx}
                  cy={c.cy}
                  r={c.r}
                  fill="url(#leafGradTree)"
                  opacity="0.75"
                />
              ))}
            </svg>

            {/* DYNAMIC BLOOMING BLESSING FLOWERS ON THE TREE */}
            {blessings.slice(0, flowerPositions.length).map((blessing, idx) => {
              const pos = flowerPositions[idx];
              const isSelected = activeBlessing?.id === blessing.id;

              return (
                <motion.button
                  key={blessing.id}
                  type="button"
                  onClick={() => setActiveBlessing(blessing)}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: isSelected ? 1.4 : 1,
                    opacity: 1,
                  }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className={`absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center cursor-pointer z-30 transition-shadow ${
                    isSelected
                      ? 'shadow-[0_0_20px_rgba(255,215,0,0.95)] ring-2 ring-[#FFF2B2]'
                      : 'hover:shadow-[0_0_12px_rgba(255,215,0,0.6)]'
                  }`}
                  aria-label={`View blessing by ${blessing.guestName}`}
                >
                  {/* Blossom Graphic */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <span className="text-base sm:text-lg select-none filter drop-shadow">
                      🌸
                    </span>
                  </div>
                </motion.button>
              );
            })}

            {/* Helper Caption */}
            <div className="absolute bottom-3 inset-x-4 text-center">
              <span className="font-cormorant italic text-[11px] sm:text-xs text-[#E5C578]/80 bg-[#1A0205]/70 px-3 py-1 rounded-full border border-[#C5A059]/30 backdrop-blur-sm">
                Tap any flower above to read guest blessings
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BLESSING FORM & ACTIVE GUEST CARD DISPLAY
            ========================================================================= */}
        <div className="lg:col-span-5 space-y-6">

          {/* ACTIVE SELECTED BLESSING CARD */}
          <AnimatePresence mode="wait">
            {activeBlessing && (
              <motion.div
                key={activeBlessing.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#FAF5E8] via-[#FAF7F0] to-[#F5EFEB] border-2 border-[#C5A059] shadow-xl text-[#3B0811]"
              >
                <div className="flex items-center gap-3 mb-2 pb-2 border-b border-[#C5A059]/30">
                  <div
                    className="w-10 h-10 rounded-full text-white font-cinzel font-bold text-sm flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: activeBlessing.avatarColor || '#C5A059' }}
                  >
                    {activeBlessing.guestName.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#3B0811] truncate">
                      {activeBlessing.guestName}
                    </h4>
                    <span className="font-cormorant italic text-xs text-[#805F24]">
                      {activeBlessing.timestamp}
                    </span>
                  </div>
                  <span className="text-xl select-none">🌸</span>
                </div>

                <p className="font-cormorant italic text-sm sm:text-base text-[#420A12] leading-relaxed font-medium pt-1">
                  “{activeBlessing.message}”
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ADD YOUR BLESSING FORM */}
          <div className="rounded-2xl p-5 sm:p-6 bg-[#2A050B]/90 border border-[#C5A059]/50 shadow-xl text-[#FAF7F0] space-y-4 backdrop-blur-sm">
            <div className="space-y-0.5">
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-gold-foil uppercase tracking-wider">
                Add Your Blessing
              </h3>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#FAF7F0]/80">
                Your heartfelt wish will bloom as a fresh flower on our wedding tree.
              </p>
            </div>

            {submittedSuccess && (
              <div className="p-3 rounded-xl bg-[#1B5E20]/80 border border-[#81C784] text-xs text-[#E8F5E9] font-cinzel text-center">
                ✨ Thank you! Your blessing is now blooming on the tree.
              </div>
            )}

            {formError && (
              <div className="p-2.5 rounded-xl bg-[#B71C1C]/80 border border-[#EF5350] text-xs text-[#FFEBEE] font-cinzel text-center">
                {formError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="guest-name"
                  className="block font-cinzel text-xs font-bold text-[#E5C578] tracking-wider uppercase mb-1"
                >
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A059]" />
                  <input
                    id="guest-name"
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Enter your name (e.g. Arun & Family)"
                    maxLength={60}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#1A0205] border border-[#C5A059]/40 text-[#FAF7F0] placeholder-[#FAF7F0]/40 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="guest-blessing"
                  className="block font-cinzel text-xs font-bold text-[#E5C578] tracking-wider uppercase mb-1"
                >
                  Your Blessing
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-[#C5A059]" />
                  <textarea
                    id="guest-blessing"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your heartfelt blessing for Rudran & Nandhini..."
                    maxLength={300}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#1A0205] border border-[#C5A059]/40 text-[#FAF7F0] placeholder-[#FAF7F0]/40 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] resize-none"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 px-5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5DE9C] to-[#AA7C11] text-[#2A050B] font-cinzel font-bold text-xs sm:text-sm tracking-widest uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Blooming...' : 'Add My Blessing'}</span>
              </motion.button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
