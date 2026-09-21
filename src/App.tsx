import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InvitationCover } from './components/InvitationCover';
import { InvitationReveal } from './components/InvitationReveal';
import { DigitalInvitation } from './components/DigitalInvitation';
import { ThirukkuralBanner } from './components/ThirukkuralBanner';
import { Countdown } from './components/Countdown';
import { PhotoMoment } from './components/PhotoMoment';
import { WeddingDetails } from './components/WeddingDetails';
import { FinalMessage } from './components/FinalMessage';
import { MusicController } from './components/MusicController';
import { PetalCanvas } from './components/PetalCanvas';
import { weddingData } from './config/weddingData';

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [hasStartedMusic, setHasStartedMusic] = useState(false);

  const handleOpenInvitation = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);
    setHasStartedMusic(true);
  };

  const handleAnimationComplete = () => {
    setIsOpen(true);
    setIsOpening(false);
    // Smooth scroll to top of celebration
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-[#1A0205] text-[#FAF7F0] overflow-x-hidden font-sans selection:bg-[#C5A059] selection:text-[#1A0205]">
      {/* Subtle Floating Petal Ambience */}
      <PetalCanvas active={true} intensity={isOpening ? 'medium' : 'gentle'} />

      {/* Discreet Floating Audio Controller */}
      <MusicController audioSrc={weddingData.audio} autoPlayTrigger={hasStartedMusic} />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* Step 1 & 2: Closed Invitation & Unfolding Signature Experience */
          <motion.div
            key="cover-wrapper"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <InvitationCover
              onOpen={handleOpenInvitation}
              isOpening={isOpening}
            />

            <InvitationReveal
              isOpening={isOpening}
              onAnimationComplete={handleAnimationComplete}
            />
          </motion.div>
        ) : (
          /* Step 3+: The Grand Mandapam Wedding Experience */
          <motion.div
            key="wedding-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative"
          >
            {/* 1. Traditional Royal Antique Scroll Patrikai (Framed by Mandapam Thoranam & Kuthu Vilakku) */}
            <DigitalInvitation />

            {/* 2. Auspicious Thirukkural (குறள் 45) Blessing */}
            <ThirukkuralBanner />

            {/* 3. Minimal Stationery Countdown */}
            <Countdown />

            {/* 4. Editorial Cinematic Couple Photograph with Integrated Akshadhai Shower */}
            <PhotoMoment />

            {/* 5. Venue Location, Google Maps & WhatsApp Share Hub */}
            <WeddingDetails />

            {/* 6. Poetic Closing & Sacred Diya */}
            <FinalMessage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
