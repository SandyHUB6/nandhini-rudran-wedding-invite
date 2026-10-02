import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InvitationCover } from './components/InvitationCover';
import { DigitalInvitation } from './components/DigitalInvitation';
import { Countdown } from './components/Countdown';
import { PhotoMoment } from './components/PhotoMoment';
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
  };

  return (
    <main
      className={`relative min-h-screen bg-[#1A0205] text-[#FAF7F0] font-sans selection:bg-[#C5A059] selection:text-[#1A0205] ${
        isOpen ? 'overflow-x-hidden' : 'h-screen overflow-hidden'
      }`}
    >
      {/* Subtle Floating Petal Ambience */}
      <PetalCanvas active={true} intensity={isOpening ? 'medium' : 'gentle'} />

      {/* Discreet Floating Audio Controller */}
      <MusicController audioSrc={weddingData.audio} autoPlayTrigger={hasStartedMusic} />

      {/* 1. Closed Envelope Cover (Full-Screen Overlay before opening) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="invitation-cover-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: isOpening ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`fixed inset-0 z-50 ${isOpening ? 'pointer-events-none' : ''}`}
          >
            <InvitationCover
              onOpen={handleOpenInvitation}
              isOpening={isOpening}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Wedding Celebration Experience (Unrolling Royal Scroll & Sacred Mandapam) */}
      <div className="w-full relative z-10">
        {/* The Royal Scroll Patrikai with Integrated Physical Unfolding */}
        <DigitalInvitation
          isOpening={isOpening}
          isOpen={isOpen}
          onAnimationComplete={handleAnimationComplete}
          isPreUnrolled={isOpen}
        />

        {/* Subsequent Sections (Smoothly revealed upon opening) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={isOpen ? 'block' : 'hidden'}
        >
          {/* 3. Minimal Stationery Countdown */}
          <Countdown />

          {/* 4. Editorial Cinematic Couple Photograph with Integrated Akshadhai Shower */}
          <PhotoMoment />

          {/* 5. Poetic Closing & Sacred Diya */}
          <FinalMessage />
        </motion.div>
      </div>
    </main>
  );
}

export default App;
