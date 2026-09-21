import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(weddingData.targetDateISO).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 w-full flex flex-col items-center justify-center bg-[#150103] overflow-hidden">
      {/* Background Soft Gold Radial */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center space-y-10 sm:space-y-12">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="font-cormorant uppercase tracking-[0.35em] text-xs sm:text-sm text-[#C5A059]">
            Awaiting The Auspicious Hour
          </span>
          <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.25em] text-gold-foil">
            THE COUNTDOWN
          </h2>
          <div className="w-10 h-[1px] bg-[#C5A059]/40 mt-1" />
        </motion.div>

        {/* Minimal Luxury Stationery Typography Units */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12 w-full max-w-lg border-y border-[#C5A059]/30 py-8"
        >
          {/* Days */}
          <div className="flex flex-col items-center space-y-1">
            <span className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-normal text-gold-foil tracking-tight">
              {formatNumber(timeLeft.days)}
            </span>
            <span className="font-cormorant uppercase tracking-[0.25em] text-xs sm:text-sm text-[#FAF7F0]/70">
              Days
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center space-y-1">
            <span className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-normal text-gold-foil tracking-tight">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="font-cormorant uppercase tracking-[0.25em] text-xs sm:text-sm text-[#FAF7F0]/70">
              Hours
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center space-y-1">
            <span className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-normal text-gold-foil tracking-tight">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="font-cormorant uppercase tracking-[0.25em] text-xs sm:text-sm text-[#FAF7F0]/70">
              Minutes
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center space-y-1">
            <span className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-normal text-gold-foil tracking-tight">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="font-cormorant uppercase tracking-[0.25em] text-xs sm:text-sm text-[#FAF7F0]/70">
              Seconds
            </span>
          </div>
        </motion.div>

        {/* Auspicious Blessing Subtext */}
        <p className="font-cormorant text-sm sm:text-base text-[#C5A059]/85 italic tracking-wide">
          Awaiting the sacred and auspicious hour...
        </p>

      </div>
    </section>
  );
};
