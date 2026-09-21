import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Navigation, Share2 } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import { OrnamentalCorner } from './TraditionalDecor';

export const WeddingDetails: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const whatsappShareText = `*Wedding Invitation | நந்தினி & ருத்ரன்* 💍\n\nWith immense joy, Nandhini Gouthaman & Rudran Veerabadran cordially invite you to celebrate their traditional South Indian wedding!\n\n✨ *Engagement Ceremony*: Tuesday, Nov 10, 2026 (6:00 PM – 9:00 PM IST)\n🌸 *Holy Subha Muhurtham*: Wednesday, Nov 11, 2026 (9:00 AM – 10:00 AM IST)\n📍 *Venue*: Soudamman Kovil Kalyana Mandapam, Bodinayakanur\n\nView our wedding invitation: ${currentUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappShareText)}`;
  // Generate Google Calendar Link
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
      'PRODID:-//Nandhini & Rudran Wedding//EN',
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
    link.setAttribute('download', 'Nandhini-Rudran-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 w-full flex flex-col items-center justify-center bg-[#180205] overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(86,16,27,0.45)_0%,rgba(24,2,5,0.98)_70%)]" />

      {/* Main Venue & Directions Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full max-w-2xl mx-auto rounded-2xl border border-[#C5A059]/40 bg-gradient-to-b from-[#2A050B] via-[#35070E] to-[#1E0307] p-8 sm:p-12 shadow-card-luxury text-center flex flex-col items-center space-y-7"
      >
        {/* Ornamental Corners */}
        <OrnamentalCorner position="top-left" className="top-3 left-3 sm:top-4 sm:left-4" />
        <OrnamentalCorner position="top-right" className="top-3 right-3 sm:top-4 sm:right-4" />
        <OrnamentalCorner position="bottom-left" className="bottom-3 left-3 sm:bottom-4 sm:left-4" />
        <OrnamentalCorner position="bottom-right" className="bottom-3 right-3 sm:bottom-4 sm:right-4" />

        {/* Section Header */}
        <div className="space-y-1.5">
          <span className="font-cormorant uppercase tracking-[0.35em] text-xs sm:text-sm text-[#C5A059] font-medium">
            திருமண மண்டபம் • கல்யாண மஹால்
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-gold-foil">
            VENUE & LOCATION
          </h2>
          <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-2" />
        </div>

        {/* Venue Title & Tamil Script */}
        <div className="space-y-1 pt-1">
          <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#FAF7F0] tracking-wide">
            {weddingData.venueName}
          </h3>
          <p className="font-tamil text-base sm:text-lg font-bold text-gold-foil">
            {weddingData.venueTamil}
          </p>
        </div>

        {/* Full Address */}
        <p className="font-cormorant text-sm sm:text-base md:text-lg text-[#FAF7F0]/80 leading-relaxed max-w-md mx-auto">
          {weddingData.location}
        </p>

        {/* Primary Action Button: Open in Google Maps */}
        <div className="pt-2 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={weddingData.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-[#C5A059] bg-gradient-to-r from-[#3B0811] via-[#5A101C] to-[#3B0811] text-gold-foil hover:text-[#FAF7F0] shadow-gold-subtle hover:shadow-gold-glow transition-all duration-300 font-cinzel text-xs sm:text-sm tracking-[0.2em] uppercase font-bold"
          >
            <Navigation className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform" />
            <span>Open in Google Maps</span>
          </a>

          {/* Google Calendar Link */}
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-[#C5A059]/40 hover:border-[#C5A059] bg-[#1A0205]/60 hover:bg-[#2A050B] text-[#FAF7F0]/85 hover:text-[#FAF7F0] transition-all duration-300 font-cinzel text-xs sm:text-sm tracking-[0.15em] uppercase"
          >
            <Calendar className="w-4 h-4 text-[#C5A059]/80" />
            <span>Calendar</span>
          </a>

          {/* WhatsApp Share Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-[#25D366]/60 hover:border-[#25D366] bg-[#1A0205]/60 hover:bg-[#075E54]/40 text-[#FAF7F0]/90 hover:text-[#25D366] transition-all duration-300 font-cinzel text-xs sm:text-sm tracking-[0.15em] uppercase"
          >
            <Share2 className="w-4 h-4 text-[#25D366]" />
            <span>Share on WhatsApp</span>
          </a>
        </div>

        {/* Apple Calendar .ICS Download */}
        <div className="pt-1">
          <button
            type="button"
            onClick={downloadIcs}
            className="text-[11px] font-sans tracking-wider text-[#C5A059]/75 hover:text-[#FAF7F0] underline underline-offset-4 decoration-[#C5A059]/40 transition-colors"
          >
            Download .ICS Event (Apple Calendar / Outlook)
          </button>
        </div>
      </motion.div>
    </section>
  );
};
