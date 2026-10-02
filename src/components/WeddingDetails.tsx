import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Navigation } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import { OrnamentalCorner, PillaiyarSuzhi } from './TraditionalDecor';

export const WeddingDetails: React.FC = () => {
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

      {/* Calendar Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#FAF7F0]/80"
      >
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
      </motion.div>
    </section>
  );
};

export default WeddingDetails;
