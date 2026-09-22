import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Share2,
  Download,
  X,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
} from 'lucide-react';
import { weddingData } from '../config/weddingData';
import {
  OrnamentalCorner,
  KolamMotif,
  PillaiyarSuzhi,
  KuthuVilakku,
} from './TraditionalDecor';

export const LivingPatrikai: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copiedShare, setCopiedShare] = useState(false);

  const totalPages = 7;

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Wedding Invitation | Rudran & Nandhini',
      text: 'With immense joy, Rudran Veerabadran & Nandhini Gouthaman cordially invite you to their wedding on Nov 11, 2026!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share dismissed or cancelled');
      }
    } else {
      navigator.clipboard.writeText(
        `*Wedding Invitation | Rudran & Nandhini*\nWith immense joy, we cordially invite you to our wedding on Nov 11, 2026 at Soudamman Kovil Kalyana Mandapam, Bodinayakanur.\n\nView our wedding invitation: ${window.location.href}`
      );
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const handleDownload = () => {
    window.print();
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
    setZoomLevel(1);
  };

  // Render individual page content
  const renderPageContent = (page: number) => {
    switch (page) {
      case 0:
        // Page 1: The Couple
        return (
          <div className="flex flex-col items-center text-center space-y-4 py-2">
            <PillaiyarSuzhi />
            
            <div className="space-y-1">
              <span className="font-cormorant uppercase tracking-[0.28em] text-xs sm:text-sm text-[#805F24] font-bold">
                Holy Matrimony
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#3B0811]">
                {weddingData.groomName}
              </h3>
              <p className="font-cormorant italic text-xl text-[#C5A059]">&</p>
              <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#3B0811]">
                {weddingData.brideName}
              </h3>
            </div>

            {/* Couple Photograph in Temple Arch */}
            <div className="relative w-36 sm:w-44 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#C5A059] shadow-md my-2">
              <img
                src={weddingData.coupleImage}
                alt="Rudran & Nandhini"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A050B]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="space-y-1">
              <p className="font-cinzel text-xs sm:text-sm font-bold text-[#805F24] tracking-widest uppercase">
                {weddingData.date}
              </p>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#420A12]/80">
                {weddingData.venueName}, Bodinayakanur
              </p>
            </div>
          </div>
        );

      case 1:
        // Page 2: Wedding Announcement
        return (
          <div className="flex flex-col items-center text-center space-y-5 py-4 my-auto">
            <div className="w-12 h-12 rounded-full bg-[#FAF5E8] border border-[#C5A059] flex items-center justify-center text-xl shadow-sm">
              ✨
            </div>

            <span className="font-cormorant uppercase tracking-[0.3em] text-xs sm:text-sm text-[#805F24] font-bold">
              Subha Muhurtha Pathirikai
            </span>

            <h3 className="font-cinzel text-lg sm:text-xl md:text-2xl font-bold text-[#3B0811] leading-relaxed max-w-md">
              “With the blessings of our families and the Almighty, we invite you to celebrate our wedding.”
            </h3>

            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent my-1" />

            <div className="space-y-1 max-w-sm">
              <p className="font-cinzel text-xs sm:text-sm font-bold text-[#805F24] tracking-widest uppercase">
                {weddingData.tagline}
              </p>
              <p className="font-cormorant italic text-sm text-[#420A12]">
                {weddingData.subTagline}
              </p>
            </div>

            <p className="font-cormorant text-sm sm:text-base text-[#420A12]/90 italic leading-relaxed max-w-md pt-2">
              Together with their families, we warmly invite you and your family to grace our celebration and shower your auspicious blessings as we begin our lifelong journey.
            </p>
          </div>
        );

      case 2:
        // Page 3: Family Details
        return (
          <div className="flex flex-col items-center text-center space-y-5 py-3">
            <span className="font-cormorant uppercase tracking-[0.25em] text-xs sm:text-sm text-[#805F24] font-bold">
              Sacred Heritage & Family Blessings
            </span>

            <div className="w-full space-y-4 max-w-md">
              {/* Groom Parents */}
              <div className="p-4 rounded-xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF4E6] border border-[#C5A059]/60 shadow-sm">
                <span className="font-cinzel text-[10px] sm:text-xs text-[#805F24] font-bold tracking-widest uppercase block mb-1">
                  Groom's Parents
                </span>
                <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#3B0811]">
                  {weddingData.family?.groomParents || 'Mr. Veerabadran & Mrs. Soundaravalli'}
                </h4>
                <p className="font-cormorant italic text-xs sm:text-sm text-[#420A12]/80 mt-0.5">
                  Proud parents of Groom Rudran Veerabadran
                </p>
              </div>

              {/* Auspicious Lotus Knot */}
              <div className="flex items-center justify-center gap-2 opacity-60">
                <span className="w-12 h-[1px] bg-[#C5A059]" />
                <span className="text-xs text-[#805F24]">⚜</span>
                <span className="w-12 h-[1px] bg-[#C5A059]" />
              </div>

              {/* Bride Parents */}
              <div className="p-4 rounded-xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF4E6] border border-[#C5A059]/60 shadow-sm">
                <span className="font-cinzel text-[10px] sm:text-xs text-[#805F24] font-bold tracking-widest uppercase block mb-1">
                  Bride's Parents
                </span>
                <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#3B0811]">
                  {weddingData.family?.brideParents || 'Mr. Gouthaman & Mrs. Shanthi'}
                </h4>
                <p className="font-cormorant italic text-xs sm:text-sm text-[#420A12]/80 mt-0.5">
                  Proud parents of Bride Nandhini Gouthaman
                </p>
              </div>
            </div>

            <p className="font-cormorant italic text-xs sm:text-sm text-[#805F24] font-semibold pt-1">
              {weddingData.family?.grandparents || 'With the eternal blessings of our revered ancestors & family elders'}
            </p>
          </div>
        );

      case 3:
        // Page 4: Wedding Events
        return (
          <div className="flex flex-col items-center text-center space-y-4 py-2">
            <span className="font-cormorant uppercase tracking-[0.25em] text-xs sm:text-sm text-[#805F24] font-bold">
              Celebration Schedule & Ceremonies
            </span>

            <div className="w-full space-y-3.5 max-w-md">
              {weddingData.ceremonies.map((ceremony, idx) => (
                <div
                  key={ceremony.id || idx}
                  className="p-4 rounded-xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E6] to-[#F5EED8] border border-[#C5A059] shadow-sm text-left relative overflow-hidden"
                >
                  <div className="flex items-center justify-between border-b border-[#C5A059]/40 pb-1.5 mb-2">
                    <span className="font-cinzel text-[10px] sm:text-xs font-bold text-[#805F24] uppercase tracking-wider">
                      Ceremony {idx + 1}
                    </span>
                    <span className="text-sm">🌸</span>
                  </div>
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#3B0811]">
                    {ceremony.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#805F24] font-medium mt-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{ceremony.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#805F24] font-medium mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{ceremony.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#420A12]/80 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{ceremony.venue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        // Page 5: Muhurtham Spotlight
        return (
          <div className="flex flex-col items-center text-center space-y-4 py-4 my-auto">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#4A0E17] text-[#F5DE9C] border border-[#C5A059] shadow-md mb-1">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="font-cormorant uppercase tracking-[0.3em] text-xs sm:text-sm text-[#805F24] font-bold">
                Holy Subha Muhurtham
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#3B0811]">
                Sacred Vows & Mangalyam
              </h3>
            </div>

            <div className="w-full max-w-sm p-5 rounded-2xl bg-gradient-to-b from-[#FAF4E6] to-[#F5EED8] border-2 border-[#C5A059] shadow-md space-y-3">
              <p className="font-cinzel text-base sm:text-lg font-bold text-[#56101B]">
                Wednesday, November 11, 2026
              </p>
              <div className="inline-block px-4 py-1 rounded-full bg-[#4A0E17]/10 border border-[#C5A059]/60">
                <span className="font-cinzel text-xs sm:text-sm font-bold text-[#805F24] tracking-wider">
                  9:00 AM – 10:00 AM IST
                </span>
              </div>
              <p className="font-cormorant italic text-sm text-[#420A12] leading-relaxed pt-1">
                At the auspicious Brahma Muhurtham hour, with Vedic chants and sacred agni witness, Rudran & Nandhini unite in divine wedlock.
              </p>
            </div>

            <p className="font-cormorant italic text-xs sm:text-sm text-[#805F24] font-semibold">
              Please join us for breakfast and bestow your heartfelt blessings upon the couple.
            </p>
          </div>
        );

      case 5:
        // Page 6: Venue
        return (
          <div className="flex flex-col items-center text-center space-y-4 py-3">
            <div className="w-12 h-12 rounded-full bg-[#FAF5E8] border border-[#C5A059] flex items-center justify-center text-xl shadow-sm">
              🏛️
            </div>

            <span className="font-cormorant uppercase tracking-[0.25em] text-xs sm:text-sm text-[#805F24] font-bold">
              Kalyana Mandapam & Venue
            </span>

            <div className="w-full max-w-md p-5 rounded-xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E6] to-[#F5EED8] border border-[#C5A059] shadow-sm space-y-2 text-center">
              <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#3B0811]">
                {weddingData.venueName}
              </h4>
              <p className="font-cormorant italic text-xs sm:text-sm font-semibold text-[#805F24]">
                Marriage Hall & Convention Centre
              </p>
              <p className="font-cormorant text-xs sm:text-sm text-[#420A12]/90 leading-relaxed max-w-xs mx-auto pt-1">
                {weddingData.location}
              </p>

              <div className="pt-3">
                <a
                  href={weddingData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2A050B] font-cinzel text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            <p className="font-cormorant italic text-xs sm:text-sm text-[#420A12]/80 max-w-sm pt-1">
              Ample parking space and guest reception amenities are arranged at the mandapam.
            </p>
          </div>
        );

      case 6:
        // Page 7: Heartfelt Closing
        return (
          <div className="flex flex-col items-center text-center space-y-5 py-4 my-auto">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFEAA7] to-[#D4AF37] border border-[#805F24] flex items-center justify-center text-2xl shadow-md text-[#2A050B]">
              🙏
            </div>

            <span className="font-cormorant uppercase tracking-[0.3em] text-xs sm:text-sm text-[#805F24] font-bold">
              With Love & Gratitude
            </span>

            <h3 className="font-cormorant italic text-lg sm:text-xl md:text-2xl font-bold text-[#3B0811] leading-relaxed max-w-md px-2">
              “Your presence and blessings mean the world to us. We look forward to celebrating this beautiful beginning with you.”
            </h3>

            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent my-1" />

            <div className="space-y-1">
              <p className="font-cinzel text-sm sm:text-base font-bold text-[#56101B]">
                Rudran & Nandhini
              </p>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#805F24] font-semibold">
                Together with both our families
              </p>
            </div>

            {/* Quick Share CTA inside Invitation */}
            <div className="pt-3">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3B0811] text-[#FAF7F0] hover:bg-[#56101B] border border-[#C5A059] font-cinzel text-xs tracking-widest uppercase transition-all shadow-md"
              >
                <Share2 className="w-3.5 h-3.5 text-[#E5C578]" />
                <span>{copiedShare ? 'Link Copied!' : 'Share Invitation'}</span>
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="patrikai"
      className="relative w-full py-16 sm:py-24 px-3 sm:px-6 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#1A0205] via-[#2A050B] to-[#120104]"
      aria-label="Living Digital Patrikai"
    >
      {/* Background Sacred Kolam Pattern */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.05]">
        <KolamMotif size={650} />
      </div>

      {/* Flanking Kuthu Vilakku (Tablet/Desktop) */}
      <div className="absolute left-2 sm:left-6 md:left-12 lg:left-20 bottom-16 z-10 pointer-events-none hidden sm:block">
        <KuthuVilakku size="lg" lit={true} />
      </div>
      <div className="absolute right-2 sm:right-6 md:right-12 lg:right-20 bottom-16 z-10 pointer-events-none hidden sm:block">
        <KuthuVilakku size="lg" lit={true} />
      </div>

      {/* Section Header */}
      <div className="relative z-20 text-center mb-8 sm:mb-12 space-y-2">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="font-cormorant uppercase tracking-[0.3em] text-xs sm:text-sm text-[#E5C578] font-semibold">
            Traditional Tamil Patrikai
          </span>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-gold-foil tracking-wide uppercase">
          Our Wedding Invitation
        </h2>
        <p className="font-cormorant italic text-sm sm:text-base md:text-lg text-[#FAF7F0]/85 max-w-lg mx-auto">
          A traditional invitation, beautifully brought to life.
        </p>
      </div>

      {/* THE INVITATION BOOKLET / CARD CONTAINER */}
      <div className="relative z-20 w-full max-w-[540px] sm:max-w-[620px] flex flex-col items-center">

        {/* Top Control Bar (Fullscreen, Zoom, Share, Download) */}
        <div className="w-full flex items-center justify-between pb-3 px-2 text-xs text-[#E5C578] font-cinzel">
          <span className="tracking-widest uppercase text-[11px] sm:text-xs">
            Page {currentPage + 1} of {totalPages}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="p-2 rounded-full bg-[#2A050B] hover:bg-[#3B0811] border border-[#C5A059]/40 hover:border-[#C5A059] transition-all text-[#E5C578] hover:text-[#FAF7F0]"
              title="Share Invitation"
              aria-label="Share Invitation"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="p-2 rounded-full bg-[#2A050B] hover:bg-[#3B0811] border border-[#C5A059]/40 hover:border-[#C5A059] transition-all text-[#E5C578] hover:text-[#FAF7F0]"
              title="Print / Save PDF"
              aria-label="Print Invitation"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-2 rounded-full bg-[#2A050B] hover:bg-[#3B0811] border border-[#C5A059]/40 hover:border-[#C5A059] transition-all text-[#E5C578] hover:text-[#FAF7F0]"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Reader'}
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* THE ROYAL CARD BODY */}
        <div
          className={`relative w-full rounded-2xl sm:rounded-3xl border-4 border-[#C5A059] shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_0_1px_rgba(197,160,89,0.3)] bg-[#FAF5E8] text-[#3B0811] overflow-hidden transition-all duration-300 ${
            isFullscreen
              ? 'fixed inset-4 sm:inset-10 z-50 max-w-3xl mx-auto flex flex-col justify-between overflow-y-auto'
              : 'min-h-[520px] sm:min-h-[560px] flex flex-col justify-between'
          }`}
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Inner Double Gold Foil Border */}
          <div className="absolute inset-2 sm:inset-3 border-2 border-[#C5A059]/70 rounded-xl sm:rounded-2xl pointer-events-none" />
          <div className="absolute inset-3.5 sm:inset-4.5 border border-[#8B1E2F]/30 rounded-lg sm:rounded-xl pointer-events-none" />

          {/* Traditional Antique Corners */}
          <OrnamentalCorner position="top-left" className="top-2 left-2 scale-90" />
          <OrnamentalCorner position="top-right" className="top-2 right-2 scale-90" />
          <OrnamentalCorner position="bottom-left" className="bottom-2 left-2 scale-90" />
          <OrnamentalCorner position="bottom-right" className="bottom-2 right-2 scale-90" />

          {/* Exit Fullscreen Floating Button (if fullscreen) */}
          {isFullscreen && (
            <button
              type="button"
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-[#3B0811] text-[#E5C578] hover:text-[#FAF7F0] border border-[#C5A059] shadow-lg"
              aria-label="Close fullscreen"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {/* Active Page Animated Content */}
          <div className="relative z-10 flex-1 p-6 sm:p-10 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full"
              >
                {renderPageContent(currentPage)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card Footer: Navigation Dots & Arrows */}
          <div className="relative z-10 w-full px-6 py-4 border-t border-[#C5A059]/40 bg-[#FAF4E6]/90 flex items-center justify-between">
            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-cinzel text-xs font-bold uppercase transition-all ${
                currentPage === 0
                  ? 'opacity-30 cursor-not-allowed text-[#805F24]'
                  : 'text-[#3B0811] hover:bg-[#C5A059]/20 hover:text-[#805F24]'
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            {/* Page Dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentPage(i)}
                  className={`h-2 rounded-full transition-all ${
                    currentPage === i
                      ? 'w-6 bg-[#805F24]'
                      : 'w-2 bg-[#C5A059]/40 hover:bg-[#C5A059]'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-cinzel text-xs font-bold uppercase transition-all ${
                currentPage === totalPages - 1
                  ? 'opacity-30 cursor-not-allowed text-[#805F24]'
                  : 'text-[#3B0811] hover:bg-[#C5A059]/20 hover:text-[#805F24]'
              }`}
              aria-label="Next page"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Page Titles / Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 px-2">
          {[
            'The Couple',
            'Announcement',
            'Family',
            'Events',
            'Muhurtham',
            'Venue',
            'Blessings',
          ].map((title, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentPage(idx)}
              className={`text-[11px] sm:text-xs font-cinzel tracking-wider px-2.5 py-1 rounded-full border transition-all ${
                currentPage === idx
                  ? 'bg-[#C5A059] text-[#1A0205] border-[#F5DE9C] font-bold shadow-sm'
                  : 'bg-[#2A050B]/60 text-[#E5C578]/80 border-[#C5A059]/30 hover:border-[#C5A059]'
              }`}
            >
              {title}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
