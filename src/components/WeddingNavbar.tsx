import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface WeddingNavbarProps {
  onReopenEntrance?: () => void;
}

export const WeddingNavbar: React.FC<WeddingNavbarProps> = ({ onReopenEntrance }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Patrikai', href: '#patrikai' },
    { label: 'Events', href: '#events' },
    { label: 'Thamboolam', href: '#thamboolam' },
    { label: 'Blessings', href: '#blessings' },
    { label: 'Venue', href: '#venue' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A0205]/95 border-b border-[#C5A059]/40 shadow-[0_4px_25px_rgba(0,0,0,0.8)] backdrop-blur-md py-2.5 sm:py-3'
          : 'bg-gradient-to-b from-[#1A0205]/80 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Left: Brand Monogram / Couple Link */}
        <button
          type="button"
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 group text-left focus:outline-none"
          aria-label="Scroll to top"
        >
          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#805F24] text-[#1A0205] font-cinzel font-bold text-xs sm:text-sm flex items-center justify-center border border-[#FFF2B2] shadow-sm group-hover:scale-105 transition-transform">
            R&N
          </span>
          <div className="hidden sm:block">
            <span className="font-cinzel text-xs font-bold text-gold-foil tracking-wider block">
              Rudran & Nandhini
            </span>
            <span className="font-cormorant italic text-[10px] text-[#E5C578]/80 block">
              11.11.2026
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="font-cinzel text-xs tracking-widest uppercase text-[#FAF7F0]/85 hover:text-[#D4AF37] transition-colors relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Right Action: Entrance Door Reopen & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          {onReopenEntrance && (
            <button
              type="button"
              onClick={onReopenEntrance}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3B0811] hover:bg-[#56101B] border border-[#C5A059]/50 text-[#E5C578] hover:text-[#FAF7F0] font-cinzel text-[10px] uppercase tracking-wider transition-all"
              title="View Wedding Entrance Doorway"
            >
              <span>🚪</span>
              <span>Entrance</span>
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#E5C578] hover:text-[#FAF7F0] hover:bg-[#FAF7F0]/10 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A0205] border-b border-[#C5A059]/40 px-6 py-4 space-y-3 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left font-cinzel text-xs tracking-widest uppercase text-[#E5C578] hover:text-[#FAF7F0] py-2 border-b border-[#FAF7F0]/5"
            >
              {item.label}
            </button>
          ))}

          {onReopenEntrance && (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onReopenEntrance();
              }}
              className="w-full mt-2 py-2 px-4 rounded-full bg-[#3B0811] text-[#E5C578] border border-[#C5A059] font-cinzel text-xs uppercase tracking-wider text-center block"
            >
              🚪 Revisit Wedding Entrance
            </button>
          )}
        </div>
      )}
    </header>
  );
};
