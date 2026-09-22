import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Share2,
  Download,
  Sparkles,
  X,
} from 'lucide-react';
import { weddingData, thamboolamItemsData, ThamboolamItem } from '../config/weddingData';
import { KolamMotif, OrnamentalCorner } from './TraditionalDecor';

export const DigitalThamboolam: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ThamboolamItem | null>(null);
  const [exploredIds, setExploredIds] = useState<Set<string>>(new Set());
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const handleSelectItem = (item: ThamboolamItem) => {
    setSelectedItem(item);
    setExploredIds((prev) => {
      const next = new Set(prev);
      next.add(item.id);
      if (next.size === thamboolamItemsData.length && !showCompletionModal) {
        setTimeout(() => {
          setShowCompletionModal(true);
        }, 1200);
      }
      return next;
    });
  };

  const handleShareWhatsApp = () => {
    const text = `*Thamboolam from Rudran & Nandhini's Wedding* 💍\n\n“A small token of love and gratitude from our wedding.”\nThank you for being part of our special celebration on Nov 11, 2026.\n\nView our wedding invitation & digital thamboolam: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleDownloadCard = () => {
    window.print();
  };

  // Dedicated custom SVG vector artwork for each thamboolam item
  const renderItemArtwork = (id: string, isLarge = false) => {
    const size = isLarge ? 84 : 52;
    switch (id) {
      case 'betel-leaves':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <path
              d="M50,15 C75,18 90,45 80,82 C55,90 45,90 20,82 C10,45 25,18 50,15 Z"
              fill="url(#leafGreenGrad)"
              stroke="#2E6930"
              strokeWidth="1.5"
            />
            <path d="M50,18 Q52,50 50,84" stroke="#78C27C" strokeWidth="1.8" fill="none" />
            <path d="M50,38 Q65,46 72,55" stroke="#78C27C" strokeWidth="1.2" fill="none" />
            <path d="M50,48 Q35,56 28,65" stroke="#78C27C" strokeWidth="1.2" fill="none" />
            <defs>
              <linearGradient id="leafGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#388E3C" />
                <stop offset="50%" stopColor="#1B5E20" />
                <stop offset="100%" stopColor="#0B3D11" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'coconut':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            {/* Coconut Shell */}
            <circle cx="50" cy="54" r="34" fill="url(#coconutShell)" stroke="#4E342E" strokeWidth="2" />
            {/* Texture fibers */}
            <path d="M28,45 Q50,30 72,45" stroke="#6D4C41" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
            <path d="M24,58 Q50,45 76,58" stroke="#6D4C41" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
            <path d="M30,70 Q50,60 70,70" stroke="#6D4C41" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
            {/* 3 Eyes */}
            <circle cx="44" cy="40" r="3.5" fill="#2E1C14" />
            <circle cx="56" cy="40" r="3.5" fill="#2E1C14" />
            <circle cx="50" cy="50" r="4" fill="#2E1C14" />
            {/* Top Tuft */}
            <path d="M50,20 L44,8 L50,14 L56,6 Z" fill="#4E342E" stroke="#3E2723" strokeWidth="1" />
            <defs>
              <radialGradient id="coconutShell" cx="40%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#8D6E63" />
                <stop offset="60%" stopColor="#5D4037" />
                <stop offset="100%" stopColor="#3E2723" />
              </radialGradient>
            </defs>
          </svg>
        );

      case 'turmeric':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            {/* Turmeric root bundle */}
            <path
              d="M30,75 C20,60 25,35 45,28 C58,24 75,32 78,48 C80,62 70,80 50,84 C38,86 32,82 30,75 Z"
              fill="url(#turmericGrad)"
              stroke="#D84315"
              strokeWidth="1.5"
            />
            {/* Ridges */}
            <path d="M34,42 Q48,45 62,38" stroke="#BF360C" strokeWidth="1.5" fill="none" />
            <path d="M30,55 Q50,60 70,52" stroke="#BF360C" strokeWidth="1.5" fill="none" />
            <path d="M36,68 Q52,72 65,65" stroke="#BF360C" strokeWidth="1.5" fill="none" />
            <circle cx="50" cy="50" r="2" fill="#FFE082" />
            <defs>
              <linearGradient id="turmericGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF176" />
                <stop offset="35%" stopColor="#FBC02D" />
                <stop offset="70%" stopColor="#F57F17" />
                <stop offset="100%" stopColor="#E65100" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'kumkum':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            {/* Small Silver/Brass Cup (Kinnam) */}
            <ellipse cx="50" cy="74" rx="32" ry="12" fill="#C5A059" stroke="#7A5617" strokeWidth="1.5" />
            <path d="M18,74 L25,84 L75,84 L82,74 Z" fill="#8A6421" />
            {/* Radiant Crimson Kumkum Cone */}
            <path
              d="M24,72 C28,52 40,24 50,18 C60,24 72,52 76,72 Z"
              fill="url(#kumkumRed)"
              stroke="#B71C1C"
              strokeWidth="1.2"
            />
            <ellipse cx="50" cy="72" rx="26" ry="7" fill="#C62828" />
            <circle cx="50" cy="20" r="2.5" fill="#FFEB3B" />
            <defs>
              <radialGradient id="kumkumRed" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FF1744" />
                <stop offset="50%" stopColor="#D50000" />
                <stop offset="100%" stopColor="#880E4F" />
              </radialGradient>
            </defs>
          </svg>
        );

      case 'flowers':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            {/* Jasmine and Marigold Garland Ring */}
            <circle cx="50" cy="50" r="28" stroke="#FFE082" strokeWidth="6" strokeDasharray="6 4" fill="none" />
            {/* Orange Marigold center */}
            <circle cx="50" cy="50" r="16" fill="url(#marigoldGrad)" stroke="#E65100" strokeWidth="1.2" />
            {/* Delicate petals */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
              <circle
                key={i}
                cx={50 + 26 * Math.cos((ang * Math.PI) / 180)}
                cy={50 + 26 * Math.sin((ang * Math.PI) / 180)}
                r="6"
                fill="#FFFFFF"
                stroke="#FFF9C4"
                strokeWidth="1"
              />
            ))}
            <defs>
              <radialGradient id="marigoldGrad" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#FFEE58" />
                <stop offset="45%" stopColor="#FFA726" />
                <stop offset="100%" stopColor="#E65100" />
              </radialGradient>
            </defs>
          </svg>
        );

      case 'rice':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            {/* Small Silver Bowl */}
            <ellipse cx="50" cy="68" rx="34" ry="14" fill="#D4AF37" stroke="#7A5617" strokeWidth="1.5" />
            {/* Turmeric Rice Mound */}
            <ellipse cx="50" cy="60" rx="30" ry="18" fill="url(#akshadhaiGrad)" />
            {/* Individual grains */}
            <ellipse cx="44" cy="54" rx="4" ry="1.8" fill="#FFFDE7" transform="rotate(-20 44 54)" />
            <ellipse cx="56" cy="52" rx="4" ry="1.8" fill="#FFFDE7" transform="rotate(30 56 52)" />
            <ellipse cx="50" cy="46" rx="4.5" ry="1.8" fill="#FFFDE7" transform="rotate(10 50 46)" />
            <ellipse cx="40" cy="62" rx="4" ry="1.8" fill="#FFFDE7" transform="rotate(-40 40 62)" />
            <ellipse cx="60" cy="60" rx="4" ry="1.8" fill="#FFFDE7" transform="rotate(15 60 60)" />
            <defs>
              <radialGradient id="akshadhaiGrad" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#FFF59D" />
                <stop offset="60%" stopColor="#FDD835" />
                <stop offset="100%" stopColor="#F57F17" />
              </radialGradient>
            </defs>
          </svg>
        );

      case 'sweets':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            {/* Golden Boondi Laddu */}
            <circle cx="50" cy="52" r="30" fill="url(#ladduGrad)" stroke="#E65100" strokeWidth="1.5" />
            {/* Boondi beads */}
            <circle cx="42" cy="44" r="5" fill="#FFF59D" opacity="0.8" />
            <circle cx="56" cy="42" r="6" fill="#FDD835" opacity="0.8" />
            <circle cx="50" cy="56" r="6.5" fill="#FFE082" opacity="0.9" />
            <circle cx="38" cy="58" r="5.5" fill="#FBC02D" opacity="0.75" />
            <circle cx="62" cy="56" r="5" fill="#F57F17" opacity="0.75" />
            {/* Pistachio & saffron garnish */}
            <rect x="48" y="38" width="4" height="2.5" rx="1" fill="#43A047" />
            <path d="M52,48 Q54,43 56,47" stroke="#D50000" strokeWidth="1.2" fill="none" />
            <defs>
              <radialGradient id="ladduGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FFF59D" />
                <stop offset="35%" stopColor="#FFCA28" />
                <stop offset="70%" stopColor="#FFA000" />
                <stop offset="100%" stopColor="#E65100" />
              </radialGradient>
            </defs>
          </svg>
        );

      case 'coin':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            {/* Auspicious Gold / Silver Coin */}
            <circle cx="50" cy="50" r="32" fill="url(#coinGrad)" stroke="#8A6421" strokeWidth="2" />
            <circle cx="50" cy="50" r="26" stroke="#AA7C11" strokeWidth="1" strokeDasharray="3 2" fill="none" />
            {/* Sacred Lakshmi / Kalasam emblem */}
            <circle cx="50" cy="50" r="14" fill="#AA7C11" opacity="0.15" />
            <path d="M50,38 L54,45 L46,45 Z" fill="#805F24" />
            <circle cx="50" cy="50" r="4" fill="#805F24" />
            <path d="M42,58 Q50,52 58,58" stroke="#805F24" strokeWidth="1.5" fill="none" />
            <defs>
              <radialGradient id="coinGrad" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FFFDE7" />
                <stop offset="25%" stopColor="#FFF59D" />
                <stop offset="60%" stopColor="#FFD54F" />
                <stop offset="85%" stopColor="#FFA000" />
                <stop offset="100%" stopColor="#8D6E63" />
              </radialGradient>
            </defs>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="thamboolam"
      className="relative w-full py-16 sm:py-24 px-3 sm:px-6 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#120104] via-[#230408] to-[#1A0205]"
      aria-label="Digital Thamboolam"
    >
      {/* Sacred Floor Kolam Watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06]">
        <KolamMotif size={650} />
      </div>

      {/* Section Header */}
      <div className="relative z-20 text-center mb-8 sm:mb-12 space-y-2">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="font-cormorant uppercase tracking-[0.3em] text-xs sm:text-sm text-[#E5C578] font-semibold">
            Sacred Auspicious Offering
          </span>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-gold-foil tracking-wide uppercase">
          A Thamboolam With Love
        </h2>
        <p className="font-cormorant italic text-sm sm:text-base md:text-lg text-[#FAF7F0]/85 max-w-lg mx-auto">
          A small token of love and gratitude from our wedding.
        </p>

        {/* Progress Counter Pill */}
        <div className="pt-2 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2A050B] border border-[#C5A059]/40 text-xs font-cinzel text-[#E5C578]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>
              Explored: {exploredIds.size} of {thamboolamItemsData.length} items
            </span>
          </div>
        </div>
      </div>

      {/* THE BRASS THAMBOOLAM TRAY CONTAINER */}
      <div className="relative z-20 w-full max-w-[540px] sm:max-w-[620px] flex flex-col items-center">

        {/* Ornate Brass Tray (Plate) */}
        <div className="relative w-full aspect-square max-h-[500px] sm:max-h-[560px] rounded-full p-6 sm:p-10 border-8 border-[#A6802B] shadow-[0_20px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(197,160,89,0.25)] bg-gradient-to-br from-[#3E2305] via-[#65430D] to-[#2B1703] flex items-center justify-center select-none overflow-hidden">
          
          {/* Outer Polished Brass Ring Rim with Engravings */}
          <div className="absolute inset-1 sm:inset-2 rounded-full border-4 border-[#F5DE9C]/60 pointer-events-none" />
          <div className="absolute inset-4 sm:inset-6 rounded-full border-2 border-[#8A6421] border-dashed pointer-events-none opacity-70" />
          
          {/* Inner Sacred Kolam Embossing on Brass Tray */}
          <div className="absolute inset-10 rounded-full flex items-center justify-center pointer-events-none opacity-20">
            <KolamMotif size={340} />
          </div>

          {/* Central Sacred Bell / Knot in Tray */}
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#F5DE9C] via-[#C5A059] to-[#805F24] border-2 border-[#543806] shadow-md flex items-center justify-center pointer-events-none z-10">
            <span className="font-serif text-lg sm:text-xl font-bold text-[#3B0811]">ॐ</span>
          </div>

          {/* 8 CIRCULAR POSITIONED THAMBOOLAM ITEMS */}
          <div className="relative w-full h-full">
            {thamboolamItemsData.map((item, index) => {
              // Calculate circular radial positions
              const total = thamboolamItemsData.length;
              const angle = (index * (360 / total) - 90) * (Math.PI / 180);
              const radiusPercent = 36; // percent from center
              const left = 50 + radiusPercent * Math.cos(angle);
              const top = 50 + radiusPercent * Math.sin(angle);

              const isSelected = selectedItem?.id === item.id;
              const isExplored = exploredIds.has(item.id);

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectItem(item)}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.94 }}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className={`absolute w-14 h-14 sm:w-18 sm:h-18 rounded-full flex flex-col items-center justify-center p-1.5 transition-all cursor-pointer z-20 focus:outline-none ${
                    isSelected
                      ? 'bg-[#FAF7F0] border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(255,215,0,0.8)] scale-110'
                      : isExplored
                      ? 'bg-[#2A050B]/90 border border-[#C5A059] shadow-md hover:bg-[#3B0811]'
                      : 'bg-[#1F080C]/80 border border-[#C5A059]/40 shadow-sm hover:border-[#C5A059]'
                  }`}
                  aria-label={`Explore ${item.title}`}
                >
                  {/* Item Artwork */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                    {renderItemArtwork(item.id)}
                  </div>

                  {/* Tiny Item Label */}
                  <span
                    className={`text-[8px] sm:text-[9px] font-cinzel font-bold tracking-tight uppercase line-clamp-1 ${
                      isSelected ? 'text-[#3B0811]' : 'text-[#E5C578]'
                    }`}
                  >
                    {item.title.split(' ')[0]}
                  </span>

                  {/* Checkmark Indicator */}
                  {isExplored && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#1B5E20] text-white flex items-center justify-center text-[10px] shadow-sm">
                      ✓
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* INSTRUCTION OR SELECTED ITEM INFORMATION CARD */}
        <div className="w-full mt-6">
          <AnimatePresence mode="wait">
            {selectedItem ? (
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="relative w-full rounded-2xl p-5 sm:p-7 bg-gradient-to-b from-[#FAF5E8] via-[#FAF7F0] to-[#F5EFEB] border-2 border-[#C5A059] shadow-[0_15px_40px_rgba(0,0,0,0.85)] text-[#3B0811]"
              >
                {/* Dismiss X */}
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-3 right-3 p-1 rounded-full text-[#805F24] hover:bg-[#C5A059]/20"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  {/* Large Item Visual */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#FFFDF9] border border-[#C5A059] shadow-inner flex items-center justify-center shrink-0">
                    {renderItemArtwork(selectedItem.id, true)}
                  </div>

                  {/* Explanation Content */}
                  <div className="text-center sm:text-left space-y-1.5 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#3B0811]">
                        {selectedItem.title}
                      </h3>
                      <span className="font-cormorant italic text-xs sm:text-sm font-semibold text-[#805F24]">
                        {selectedItem.tamilTitle}
                      </span>
                    </div>

                    <p className="font-cormorant italic text-base sm:text-lg text-[#56101B] font-medium leading-snug">
                      “{selectedItem.significance}”
                    </p>

                    <p className="font-cormorant text-xs sm:text-sm text-[#420A12]/85 leading-relaxed pt-1">
                      {selectedItem.culturalNote}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center p-4 rounded-xl bg-[#2A050B]/60 border border-[#C5A059]/30 text-xs sm:text-sm text-[#E5C578] font-cormorant italic"
              >
                Tap any sacred item on the brass tray above to discover its traditional cultural significance.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* COMPLETION MODAL / CELEBRATION POPUP */}
        <AnimatePresence>
          {showCompletionModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-md rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#2A050B] via-[#3B0811] to-[#1A0205] border-2 border-[#C5A059] shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-center text-[#FAF7F0] space-y-4"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setShowCompletionModal(false)}
                  className="absolute top-3 right-3 p-1.5 rounded-full text-[#E5C578] hover:text-[#FAF7F0] hover:bg-[#FAF7F0]/10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF5E8] text-[#805F24] border-2 border-[#C5A059] flex items-center justify-center text-3xl shadow-lg">
                  🎁
                </div>

                <div className="space-y-1">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-gold-foil uppercase tracking-wide">
                    Your Thamboolam Is Complete ❤️
                  </h3>
                  <p className="font-cormorant italic text-sm sm:text-base text-[#FAF7F0]/90">
                    Thank you for being a part of our celebration.
                  </p>
                </div>

                {/* Souvenir Digital Card */}
                <div className="p-4 rounded-2xl bg-[#FAF5E8] text-[#3B0811] border border-[#C5A059] shadow-inner space-y-1.5 text-center relative overflow-hidden">
                  <OrnamentalCorner position="top-left" className="top-1 left-1 scale-50 opacity-60" />
                  <OrnamentalCorner position="top-right" className="top-1 right-1 scale-50 opacity-60" />
                  <OrnamentalCorner position="bottom-left" className="bottom-1 left-1 scale-50 opacity-60" />
                  <OrnamentalCorner position="bottom-right" className="bottom-1 right-1 scale-50 opacity-60" />

                  <span className="font-cormorant uppercase tracking-[0.25em] text-[10px] text-[#805F24] font-bold block">
                    Wedding Thamboolam Souvenir
                  </span>
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#2A050B]">
                    {weddingData.groomName} & {weddingData.brideName}
                  </h4>
                  <p className="font-cinzel text-xs font-bold text-[#805F24]">
                    {weddingData.date}
                  </p>
                  <p className="font-cormorant italic text-xs sm:text-sm text-[#420A12]/90 pt-1 leading-relaxed">
                    “Thank you for being part of our special day. Your presence and blessings mean everything to us.”
                  </p>
                </div>

                {/* Modal Action Buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={handleShareWhatsApp}
                    className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-cinzel text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadCard}
                    className="w-full py-2.5 px-4 rounded-full bg-[#FAF5E8] text-[#3B0811] font-cinzel text-xs font-bold tracking-wider uppercase border border-[#C5A059] shadow-md hover:bg-[#FAF7F0] transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4 text-[#805F24]" />
                    <span>Download Digital Thamboolam</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowCompletionModal(false)}
                    className="text-xs text-[#E5C578] underline hover:text-[#FAF7F0] font-cinzel tracking-wider pt-1 block mx-auto"
                  >
                    Back to Wedding
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
