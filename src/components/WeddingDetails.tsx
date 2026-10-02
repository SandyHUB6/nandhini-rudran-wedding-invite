import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Navigation, Share2, Copy, Check, MessageCircle, Sparkles } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import { OrnamentalCorner, PillaiyarSuzhi } from './TraditionalDecor';

export const WeddingDetails: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copiedType, setCopiedType] = useState<'text' | 'link' | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Premium, richly formatted WhatsApp Invitation Message
  const formattedShareMessage = `✨ *WEDDING INVITATION | RUDRAN & NANDHINI* ✨
ॐ श्री गणेशाय नमः

With the divine grace of the Almighty and the heartfelt blessings of our beloved elders,

*V. RUDRAN*
       &
*G. NANDHINI*

warmly invite you and your family to join us as we exchange our sacred vows and begin our new chapter together.

━━━━━━━━━━━━━━━━━━━━━
💍 *ENGAGEMENT & RING CEREMONY*
📅 Tuesday, 10 November 2026
⏰ 7:35 PM – 8:35 PM
📍 *Soudamman Kovil Kalyana Mandapam*
Souduman Koil Back Side, Near IDBI Bank, Bodinayakanur

━━━━━━━━━━━━━━━━━━━━━
🌸 *WEDDING CEREMONY*
📅 Wednesday, 11 November 2026
⏰ 9:00 AM – 10:30 AM
📍 *Sri Srinivasa Perumal Temple*
Bodinayakanur, Theni District
━━━━━━━━━━━━━━━━━━━━━

Having you by our side to shower your love and blessings would mean the world to us.

View our interactive wedding patrikai & invitation:
👉 ${currentUrl}

With love & gratitude,
*Rudran & Nandhini*`;

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(formattedShareMessage)}`;

  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    weddingData.calendarEvent.title
  )}&dates=${weddingData.calendarEvent.startDate}/${weddingData.calendarEvent.endDate}&details=${encodeURIComponent(
    weddingData.calendarEvent.description
  )}&location=${encodeURIComponent(weddingData.calendarEvent.location)}`;

  // Generate .ics download for Apple Calendar / Outlook
  const downloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Rudran & Nandhini Wedding//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${weddingData.calendarEvent.title}`,
      `DESCRIPTION:${weddingData.calendarEvent.description}`,
      `LOCATION:${weddingData.calendarEvent.location}`,
      `DTSTART:${weddingData.calendarEvent.startDate}`,
      `DTEND:${weddingData.calendarEvent.endDate}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Rudran-Nandhini-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy full message
  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(formattedShareMessage);
      setCopiedType('text');
      setTimeout(() => setCopiedType(null), 3000);
    } catch {
      // Fallback
    }
  };

  // Native Device Share (Mobile iOS / Android Share Sheet)
  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Wedding of Rudran & Nandhini',
          text: formattedShareMessage,
          url: currentUrl,
        });
      } catch {
        // User cancelled or not supported
      }
    } else {
      // Desktop fallback: copy link
      try {
        await navigator.clipboard.writeText(currentUrl);
        setCopiedType('link');
        setTimeout(() => setCopiedType(null), 3000);
      } catch {
        // Fallback
      }
    }
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 w-full flex flex-col items-center justify-center bg-[#180205] overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(86,16,27,0.45)_0%,rgba(24,2,5,0.98)_70%)]" />

      {/* ========================================================
          SECTION HEADER
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center space-y-2 mb-10 sm:mb-14"
      >
        <div className="flex justify-center mb-1">
          <PillaiyarSuzhi />
        </div>
        <span className="font-cormorant uppercase tracking-[0.35em] text-xs sm:text-sm text-[#C5A059] font-medium">
          Auspicious Celebration Venues • Bodinayakanur
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-gold-foil">
          VENUES &amp; LOCATIONS
        </h2>
        <div className="flex items-center justify-center gap-2 w-36 mx-auto pt-1">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>
      </motion.div>

      {/* ========================================================
          TWO DISTINCT VENUE CARDS (ENGAGEMENT & WEDDING)
          ======================================================== */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl mx-auto">
        {weddingData.ceremonies.map((ceremony, idx) => (
          <motion.div
            key={ceremony.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
            className="relative rounded-2xl border border-[#C5A059]/40 bg-gradient-to-b from-[#2A050B] via-[#35070E] to-[#1E0307] p-7 sm:p-9 shadow-card-luxury text-center flex flex-col items-center justify-between space-y-6"
          >
            {/* 4 Corner Antique Gold Ornaments */}
            <OrnamentalCorner position="top-left" className="top-3 left-3 sm:top-4 sm:left-4" />
            <OrnamentalCorner position="top-right" className="top-3 right-3 sm:top-4 sm:right-4" />
            <OrnamentalCorner position="bottom-left" className="bottom-3 left-3 sm:bottom-4 sm:left-4" />
            <OrnamentalCorner position="bottom-right" className="bottom-3 right-3 sm:bottom-4 sm:right-4" />

            {/* Inner Border */}
            <div className="absolute inset-2 sm:inset-3 border border-[#C5A059]/25 rounded-xl pointer-events-none" />

            <div className="relative z-10 w-full flex flex-col items-center space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A0205] border border-[#C5A059] shadow-sm">
                <span className="text-[10px] text-gold-foil font-serif select-none">❖</span>
                <span className="font-cinzel text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gold-foil">
                  {ceremony.badge}
                </span>
                <span className="text-[10px] text-gold-foil font-serif select-none">❖</span>
              </div>

              {/* Venue Name */}
              <div className="space-y-1">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FAF7F0] tracking-wide">
                  {ceremony.venue}
                </h3>
                <p className="font-cormorant italic text-sm sm:text-base text-gold-foil">
                  {ceremony.subtitle}
                </p>
              </div>

              {/* Date & Muhurtham Time Capsule */}
              <div className="w-full max-w-sm rounded-xl py-2.5 px-4 bg-[#1A0205]/70 border border-[#C5A059]/30 space-y-1">
                <p className="font-cinzel text-xs sm:text-sm font-bold text-[#FAF7F0] tracking-wider">
                  {ceremony.date}
                </p>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#E5C578] font-bold">
                  <span className="text-xs">🪔</span>
                  <span className="font-cinzel tracking-wider">{ceremony.time}</span>
                </div>
              </div>

              {/* Address */}
              <p className="font-cormorant text-sm sm:text-base text-[#FAF7F0]/80 leading-relaxed px-2">
                {ceremony.address}
              </p>
            </div>

            {/* Google Maps Action */}
            <div className="relative z-10 w-full pt-2">
              <a
                href={ceremony.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-[#C5A059] bg-gradient-to-r from-[#3B0811] via-[#5A101C] to-[#3B0811] text-gold-foil hover:text-[#FAF7F0] shadow-gold-subtle hover:shadow-gold-glow transition-all duration-300 font-cinzel text-xs sm:text-sm tracking-[0.18em] uppercase font-bold"
              >
                <Navigation className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ========================================================
          PREMIUM ROYAL SHARE INVITATION HUB
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative z-10 w-full max-w-3xl mx-auto mt-12 sm:mt-16 rounded-2xl border-2 border-[#C5A059] bg-gradient-to-b from-[#2F060D] via-[#240409] to-[#160205] p-6 sm:p-10 shadow-card-luxury text-center flex flex-col items-center space-y-6"
      >
        {/* Subtle Decorative Corners */}
        <OrnamentalCorner position="top-left" className="top-2.5 left-2.5 sm:top-3 sm:left-3" />
        <OrnamentalCorner position="top-right" className="top-2.5 right-2.5 sm:top-3 sm:right-3" />

        {/* Monogram Seal */}
        <div className="flex flex-col items-center space-y-2">
          <img
            src={weddingData.weddingLogo}
            alt="Rudran & Nandhini Monogram"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain filter brightness-[1.65] contrast-[1.1] drop-shadow-[0_2px_8px_rgba(197,160,89,0.4)] select-none pointer-events-none"
          />
          <div className="space-y-1">
            <span className="font-cormorant uppercase tracking-[0.3em] text-xs text-[#C5A059] font-medium">
              Share The Joy &amp; Blessings
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-gold-foil tracking-wider">
              SHARE WEDDING INVITATION
            </h3>
            <p className="font-cormorant italic text-sm sm:text-base text-[#FAF7F0]/80">
              Invite your beloved family and friends with an elegant message
            </p>
          </div>
        </div>

        {/* Regal Formatted Message Preview Card */}
        <div className="w-full max-w-xl rounded-xl bg-[#FAF5E8] text-[#3B0811] p-4 sm:p-5 border border-[#C5A059]/60 shadow-inner text-left space-y-3 font-serif">
          <div className="flex items-center justify-between border-b border-[#C5A059]/40 pb-2">
            <span className="font-cinzel text-xs font-bold text-[#805F24] tracking-wider uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Invitation Preview Note
            </span>
            <span className="text-[11px] font-sans text-[#70501C]/80 italic">Ready to share</span>
          </div>

          <div className="text-xs sm:text-sm text-[#4A0E17] leading-relaxed space-y-2 font-cormorant">
            <p className="font-bold text-sm sm:text-base text-[#35070E] font-cinzel">
              Wedding of {weddingData.groomName} &amp; {weddingData.brideName}
            </p>
            <p className="italic text-[#5A101C]">
              With the divine grace of the Almighty, we warmly invite you and your family to celebrate our sacred union:
            </p>
            <div className="pl-3 border-l-2 border-[#C5A059] space-y-1 text-[11px] sm:text-xs font-sans text-[#2A050B]">
              <p>
                💍 <strong>Engagement Ceremony:</strong> Tuesday, 10 Nov 2026 (7:35 PM – 8:35 PM) • Soudamman Kovil Kalyana Mandapam, Bodinayakanur
              </p>
              <p>
                🌸 <strong>Wedding Ceremony:</strong> Wednesday, 11 Nov 2026 (9:00 AM – 10:30 AM) • Sri Srinivasa Perumal Temple, Bodinayakanur
              </p>
            </div>
            <p className="text-[11px] sm:text-xs text-[#805F24] pt-1">
              Interactive Invitation link included with directions, countdown &amp; blessings.
            </p>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {/* WhatsApp Direct Share Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-full border border-[#25D366] bg-gradient-to-r from-[#0F381E] via-[#1B5E20] to-[#0F381E] text-[#FAF7F0] hover:text-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_0_30px_rgba(37,211,102,0.45)] transition-all duration-300 font-cinzel text-xs sm:text-sm tracking-[0.18em] uppercase font-bold"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>Send on WhatsApp</span>
          </a>

          {/* Copy Full Invitation Text */}
          <button
            type="button"
            onClick={handleCopyText}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-[#C5A059] bg-[#2A050B] hover:bg-[#3D0A13] text-gold-foil hover:text-[#FAF7F0] transition-all duration-300 font-cinzel text-xs sm:text-sm tracking-[0.15em] uppercase font-semibold"
          >
            {copiedType === 'text' ? (
              <>
                <Check className="w-4 h-4 text-[#25D366]" />
                <span className="text-[#25D366]">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C5A059]" />
                <span>Copy Invitation Text</span>
              </>
            )}
          </button>

          {/* Native Share / Copy Link Button */}
          <button
            type="button"
            onClick={handleNativeShare}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-[#C5A059]/50 bg-[#1A0205] hover:bg-[#2A050B] text-[#FAF7F0]/90 hover:text-gold-foil transition-all duration-300 font-cinzel text-xs sm:text-sm tracking-[0.15em] uppercase"
          >
            {copiedType === 'link' ? (
              <>
                <Check className="w-4 h-4 text-[#25D366]" />
                <span className="text-[#25D366]">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#C5A059]" />
                <span>Share via Device</span>
              </>
            )}
          </button>
        </div>

        {/* Copy Feedback Toast */}
        <AnimatePresence>
          {copiedType && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183424] border border-[#25D366]/60 text-xs text-[#FAF7F0] font-sans"
            >
              <Check className="w-3.5 h-3.5 text-[#25D366]" />
              <span>
                {copiedType === 'text'
                  ? 'Complete invitation message copied! Ready to paste and send.'
                  : 'Invitation link copied to clipboard!'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Calendar Links Footer */}
        <div className="pt-3 border-t border-[#C5A059]/30 w-full flex flex-wrap items-center justify-center gap-6 text-xs text-[#FAF7F0]/80">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-cinzel tracking-wider text-[#C5A059] hover:text-[#FAF7F0] transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Add to Google Calendar</span>
          </a>

          <span className="text-[#C5A059]/40 select-none">•</span>

          <button
            type="button"
            onClick={downloadIcs}
            className="inline-flex items-center gap-2 font-cinzel tracking-wider text-[#C5A059] hover:text-[#FAF7F0] transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Download Apple / Outlook .ICS</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingDetails;
