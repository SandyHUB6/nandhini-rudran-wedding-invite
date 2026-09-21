import React from 'react';

/**
 * Traditional South Indian Tamil Wedding Decor Elements:
 * - Maavilai Thoranam (Mango Leaves Garland)
 * - Brass Kuthu Vilakku (Traditional Tall Lamp with flickering flame)
 * - Kolam Motifs (Intricate Rice Flour Geometrical Mandalas)
 * - Jasmine Garlands & Golden Filigree Borders
 */

// Maavilai Thoranam (Mango Leaf Bunting with golden bells / marigold accents)
export const MaavilaiThoranam: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`}>
      {/* Repeating hanging garland */}
      <svg
        viewBox="0 0 1200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 md:h-16 object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Natural leaf gradient */}
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E5A36" />
            <stop offset="50%" stopColor="#1C3D24" />
            <stop offset="100%" stopColor="#0E2314" />
          </linearGradient>
          {/* Leaf vein gradient */}
          <linearGradient id="veinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5B9A67" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2E5A36" stopOpacity="0.4" />
          </linearGradient>
          {/* Gold Bell gradient */}
          <linearGradient id="goldBell" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E8B2" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#805F24" />
          </linearGradient>
          {/* Twine rope pattern */}
          <pattern id="ropePattern" width="10" height="4" patternUnits="userSpaceOnUse">
            <line x1="0" y1="2" x2="10" y2="2" stroke="#B89758" strokeWidth="2.5" strokeDasharray="3 1" />
          </pattern>
        </defs>

        {/* Hanging rope curve */}
        <path
          d="M0,8 Q150,16 300,8 Q450,16 600,8 Q750,16 900,8 Q1050,16 1200,8"
          stroke="#C5A059"
          strokeWidth="3"
          fill="none"
        />

        {/* Leaves distributed across the rope */}
        {[0, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960, 1020, 1080, 1140].map(
          (x, i) => {
            const rot = (i % 2 === 0 ? 3 : -3) * ((i % 3) + 1);
            return (
              <g key={i} transform={`translate(${x + 15}, 8) rotate(${rot})`}>
                {/* Mango Leaf */}
                <path
                  d="M0,0 C12,18 14,42 0,68 C-14,42 -12,18 0,0 Z"
                  fill="url(#leafGrad)"
                  stroke="#386B42"
                  strokeWidth="0.8"
                />
                {/* Leaf Central Vein */}
                <path d="M0,0 Q1,35 0,66" stroke="url(#veinGrad)" strokeWidth="0.9" fill="none" />
                {/* Subtle side veins */}
                <path d="M0,18 Q6,23 9,28" stroke="url(#veinGrad)" strokeWidth="0.5" fill="none" />
                <path d="M0,28 Q-6,33 -9,38" stroke="url(#veinGrad)" strokeWidth="0.5" fill="none" />
                <path d="M0,38 Q6,43 8,48" stroke="url(#veinGrad)" strokeWidth="0.5" fill="none" />

                {/* Small Marigold or Brass Bell at stem */}
                <circle cx="0" cy="0" r="2.5" fill="#E67E22" />
                {i % 3 === 0 && (
                  <circle cx="0" cy="1" r="1.8" fill="url(#goldBell)" />
                )}
              </g>
            );
          }
        )}
      </svg>
    </div>
  );
};

// Brass Kuthu Vilakku (Traditional Tall South Indian Lamp)
export const KuthuVilakku: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  lit?: boolean;
}> = ({ className = '', size = 'md', lit = true }) => {
  const heightMap = {
    sm: 'h-48 md:h-64',
    md: 'h-64 md:h-96',
    lg: 'h-80 md:h-[460px]',
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${heightMap[size]} ${className}`}>
      <svg
        viewBox="0 0 160 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
      >
        <defs>
          {/* Polished Brass Gradient */}
          <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A6421" />
            <stop offset="25%" stopColor="#DDB357" />
            <stop offset="50%" stopColor="#FFF2B8" />
            <stop offset="75%" stopColor="#C99838" />
            <stop offset="100%" stopColor="#6E4D14" />
          </linearGradient>

          {/* Darker Brass for Insets & Shadow */}
          <linearGradient id="brassShadow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A340C" />
            <stop offset="50%" stopColor="#8A6421" />
            <stop offset="100%" stopColor="#3B2909" />
          </linearGradient>

          {/* Diya Flame Gradient */}
          <radialGradient id="flameInner" cx="50%" cy="70%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#FFF5A0" />
            <stop offset="60%" stopColor="#FF9900" />
            <stop offset="100%" stopColor="#D93800" />
          </radialGradient>
        </defs>

        {/* 1. Top Finial / Annam Bird Top */}
        <g id="finial">
          <path
            d="M80,30 C76,20 72,12 80,4 C88,12 84,20 80,30 Z"
            fill="url(#brassGrad)"
            stroke="#6E4D14"
            strokeWidth="1"
          />
          <circle cx="80" cy="34" r="5" fill="url(#brassGrad)" />
        </g>

        {/* 2. Top Flame (Oil Wick) */}
        {lit && (
          <g id="topFlame" className="animate-flame-flicker origin-bottom">
            {/* Ambient Flame Glow */}
            <circle cx="80" cy="45" r="28" fill="rgba(255, 170, 40, 0.25)" filter="blur(8px)" />
            {/* Flame Shape */}
            <path
              d="M80,38 C75,48 74,54 80,62 C86,54 85,48 80,38 Z"
              fill="url(#flameInner)"
              className="glow-flame"
            />
          </g>
        )}

        {/* 3. Top Oil Bowl (Agal) with wicks */}
        <g id="agal">
          {/* Main central reservoir */}
          <ellipse cx="80" cy="65" rx="34" ry="10" fill="url(#brassGrad)" />
          <ellipse cx="80" cy="63" rx="30" ry="7" fill="url(#brassShadow)" />

          {/* Oil liquid sheen */}
          <ellipse cx="80" cy="63" rx="27" ry="5" fill="#5C3B00" />

          {/* Left Wick Flame */}
          {lit && (
            <path
              d="M50,56 C47,60 48,63 52,65 C54,63 53,60 50,56 Z"
              fill="url(#flameInner)"
              className="animate-flame-flicker origin-bottom"
            />
          )}

          {/* Right Wick Flame */}
          {lit && (
            <path
              d="M110,56 C107,60 108,63 112,65 C114,63 113,60 110,56 Z"
              fill="url(#flameInner)"
              className="animate-flame-flicker origin-bottom"
            />
          )}

          {/* Rim details */}
          <path d="M46,65 Q80,78 114,65" stroke="#6E4D14" strokeWidth="2" fill="none" />
        </g>

        {/* 4. Upper Neck & Ringed Nodes */}
        <path d="M74,70 L72,95 L88,95 L86,70 Z" fill="url(#brassGrad)" />
        <ellipse cx="80" cy="98" rx="14" ry="4" fill="url(#brassGrad)" />
        <circle cx="80" cy="112" r="12" fill="url(#brassGrad)" />
        <ellipse cx="80" cy="128" rx="16" ry="5" fill="url(#brassGrad)" />

        {/* 5. Main Pillar (Fluted Column) */}
        <g id="column">
          {/* Vertical fluted column */}
          <path d="M73,130 L70,320 L90,320 L87,130 Z" fill="url(#brassGrad)" />
          {/* Flute lines */}
          <line x1="77" y1="130" x2="75" y2="320" stroke="#6E4D14" strokeWidth="1" />
          <line x1="80" y1="130" x2="80" y2="320" stroke="#FFF2B8" strokeWidth="1.2" opacity="0.8" />
          <line x1="83" y1="130" x2="85" y2="320" stroke="#6E4D14" strokeWidth="1" />
        </g>

        {/* 6. Mid Rings & Ornamental Beads */}
        <ellipse cx="80" cy="225" rx="15" ry="4" fill="url(#brassGrad)" />
        <circle cx="80" cy="225" r="8" fill="url(#brassShadow)" />

        {/* 7. Lower Tier Base */}
        <g id="base">
          <ellipse cx="80" cy="324" rx="20" ry="6" fill="url(#brassGrad)" />
          <path d="M68,326 L55,410 L105,410 L92,326 Z" fill="url(#brassGrad)" />
          {/* Decorative engraved band on base */}
          <ellipse cx="80" cy="410" rx="36" ry="10" fill="url(#brassGrad)" />
          <path d="M44,410 C44,435 30,460 20,480 L140,480 C130,460 116,435 116,410 Z" fill="url(#brassGrad)" />
          
          {/* Bottom stepped plinth */}
          <rect x="15" y="480" width="130" height="12" rx="3" fill="url(#brassShadow)" />
          <rect x="10" y="490" width="140" height="8" rx="2" fill="url(#brassGrad)" />
        </g>
      </svg>
    </div>
  );
};

// Auspicious Kolam / Rangoli Motif (Sacred Rice Geometric Floor Pattern)
export const KolamMotif: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 120,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none opacity-80 ${className}`}
    >
      <defs>
        <linearGradient id="kolamGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5DE9C" />
          <stop offset="50%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#9E7B35" />
        </linearGradient>
      </defs>

      {/* Central sacred lotus / geometric knot */}
      <circle cx="100" cy="100" r="14" stroke="url(#kolamGold)" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="4" fill="url(#kolamGold)" />

      {/* 8 Interlocking Lotus Petal Loops */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M100,86 C90,65 75,50 100,24 C125,50 110,65 100,86 Z"
            stroke="url(#kolamGold)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Auspicious dot in loop */}
          <circle cx="100" cy="46" r="2.5" fill="url(#kolamGold)" />
          {/* Outer ray accent */}
          <circle cx="100" cy="16" r="1.5" fill="url(#kolamGold)" />
        </g>
      ))}

      {/* Outer concentric ornamental ring */}
      <circle
        cx="100"
        cy="100"
        r="88"
        stroke="url(#kolamGold)"
        strokeWidth="1"
        strokeDasharray="4 6"
      />
    </svg>
  );
};

// Traditional Corner Ornamental Filigree (Antique Gold Foil)
export const OrnamentalCorner: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position = 'top-left', className = '' }) => {
  const transformMap = {
    'top-left': '',
    'top-right': 'scale(-1, 1)',
    'bottom-left': 'scale(1, -1)',
    'bottom-right': 'scale(-1, -1)',
  };

  return (
    <div
      className={`pointer-events-none select-none absolute w-14 h-14 md:w-20 md:h-20 ${className}`}
      style={{ transform: transformMap[position] }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M4,4 L96,4 M4,4 L4,96"
          stroke="#C5A059"
          strokeWidth="2.5"
        />
        <path
          d="M10,10 L75,10 M10,10 L10,75"
          stroke="#805F24"
          strokeWidth="1.2"
        />
        {/* Curvilinear Corner Flourish */}
        <path
          d="M16,16 C35,16 48,28 48,48 C28,48 16,35 16,16 Z"
          fill="none"
          stroke="#C5A059"
          strokeWidth="1.5"
        />
        <circle cx="28" cy="28" r="3" fill="#D4AF37" />
        <path
          d="M4,4 C14,14 14,14 24,24"
          stroke="#F5DE9C"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

// Auspicious Sacred Symbol (ॐ)
export const PillaiyarSuzhi: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <span className="font-serif font-bold text-xl md:text-2xl text-gold-foil tracking-wider">
        ॐ
      </span>
      <div className="flex items-center gap-1.5 mt-0.5">
        <div className="w-4 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
        <div className="w-1.5 h-1.5 rotate-45 border border-[#C5A059] bg-[#805F24]/40" />
        <div className="w-4 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
      </div>
    </div>
  );
};
