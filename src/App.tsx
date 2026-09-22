import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WeddingEntrance } from './components/WeddingEntrance';
import { WeddingNavbar } from './components/WeddingNavbar';
import { DigitalInvitation } from './components/DigitalInvitation';
import { LivingPatrikai } from './components/LivingPatrikai';
import { Countdown } from './components/Countdown';
import { PhotoMoment } from './components/PhotoMoment';
import { DigitalThamboolam } from './components/DigitalThamboolam';
import { DigitalBlessingTree } from './components/DigitalBlessingTree';
import { WeddingDetails } from './components/WeddingDetails';
import { FinalMessage } from './components/FinalMessage';
import { MusicController } from './components/MusicController';
import { PetalCanvas } from './components/PetalCanvas';
import { weddingData } from './config/weddingData';

export function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [hasStartedMusic, setHasStartedMusic] = useState(false);

  const handleEnterWedding = () => {
    setHasEntered(true);
    setHasStartedMusic(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReopenEntrance = () => {
    setHasEntered(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-[#1A0205] text-[#FAF7F0] overflow-x-hidden font-sans selection:bg-[#C5A059] selection:text-[#1A0205]">
      {/* Subtle Floating Petal Ambience */}
      <PetalCanvas active={true} intensity={hasEntered ? 'gentle' : 'medium'} />

      {/* Discreet Floating Audio Controller */}
      <MusicController audioSrc={weddingData.audio} autoPlayTrigger={hasStartedMusic} />

      <AnimatePresence mode="wait">
        {!hasEntered ? (
          /* =========================================================================
             1. INTERACTIVE WEDDING ENTRANCE (Cinematic 3D Chettinad Doorway)
             ========================================================================= */
          <motion.div
            key="wedding-entrance"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <WeddingEntrance onEnter={handleEnterWedding} />
          </motion.div>
        ) : (
          /* =========================================================================
             MAIN WEDDING EXPERIENCE: THE GRAND SOUTH INDIAN CELEBRATION
             ========================================================================= */
          <motion.div
            key="wedding-main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative pt-12 sm:pt-14"
          >
            {/* Sticky Traditional South Indian Navigation Bar */}
            <WeddingNavbar onReopenEntrance={handleReopenEntrance} />

            {/* 1. Traditional Royal Antique Scroll Patrikai (#home) */}
            <DigitalInvitation />

            {/* 2. Living Digital Patrikai - 7-Page Interactive Reader (#patrikai) */}
            <LivingPatrikai />

            {/* 3. Minimal Stationery Countdown & Events (#events) */}
            <Countdown />

            {/* 4. Editorial Couple Photograph with Integrated Akshadhai Blessing Shower */}
            <PhotoMoment />

            {/* 5. Digital Thamboolam - 8 Interactive Auspicious Offerings (#thamboolam) */}
            <DigitalThamboolam />

            {/* 6. Digital Blessing Tree - Interactive Blooming Wishes & Guestbook (#blessings) */}
            <DigitalBlessingTree />

            {/* 7. Venue Location, Google Maps & WhatsApp Share Hub (#venue) */}
            <WeddingDetails />

            {/* 8. Poetic Closing & Sacred Diya */}
            <FinalMessage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
