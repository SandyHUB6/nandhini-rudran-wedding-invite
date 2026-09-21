import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface MusicControllerProps {
  audioSrc?: string;
  autoPlayTrigger?: boolean;
}

export const MusicController: React.FC<MusicControllerProps> = ({
  audioSrc = '/assets/audio/wedding-bgm.mp3',
  autoPlayTrigger = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.volume = 0.65;
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn('Audio playback pending user interaction or failed:', err);
      setIsPlaying(false);
    }
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (audio && !audio.paused) {
      audio.pause();
    }
    setIsPlaying(false);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  // Triggered automatically once user clicks "OPEN INVITATION"
  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) {
      playAudio();
    }
  }, [autoPlayTrigger]);

  return (
    <>
      {/* HTML5 Audio element playing directly from the audio asset */}
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating subtle music controller */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-1.5 bg-[#2A050B]/85 backdrop-blur-md border border-[#C5A059]/40 hover:border-[#C5A059] px-3 py-2 rounded-full shadow-gold-subtle transition-all duration-300">
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={togglePlay}
          className="flex items-center gap-2 text-[#FAF7F0] hover:text-[#F5DE9C] transition-colors p-1"
          title={isPlaying ? 'Pause Wedding Music' : 'Play Wedding Music'}
          aria-label="Toggle Wedding Music"
        >
          {isPlaying ? (
            <div className="flex items-center gap-1.5">
              <span className="text-base text-gold-foil font-serif select-none">♪</span>
              {/* Mini animated audio bars */}
              <div className="flex items-end gap-[2px] h-3.5 w-4">
                <span className="w-[2px] bg-[#C5A059] rounded-full animate-[pulse_1s_infinite]" style={{ height: '70%' }} />
                <span className="w-[2px] bg-[#F5DE9C] rounded-full animate-[pulse_1.4s_infinite_0.2s]" style={{ height: '100%' }} />
                <span className="w-[2px] bg-[#C5A059] rounded-full animate-[pulse_0.9s_infinite_0.4s]" style={{ height: '40%' }} />
              </div>
              <Pause className="w-3 h-3 text-[#E5C578] ml-0.5 opacity-80" />
            </div>
          ) : (
            <div className="flex items-center gap-1.5 opacity-70 hover:opacity-100">
              <span className="text-base text-[#C5A059] font-serif select-none">♪</span>
              <Play className="w-3.5 h-3.5 text-[#C5A059]" />
            </div>
          )}
        </button>

        {/* Vertical divider */}
        <div className="w-[1px] h-3.5 bg-[#C5A059]/30 mx-0.5" />

        {/* Mute/Unmute Button */}
        <button
          type="button"
          onClick={toggleMute}
          className="text-[#C5A059]/80 hover:text-[#FAF7F0] p-1 transition-colors"
          title={isMuted ? 'Unmute' : 'Mute'}
          aria-label="Toggle Mute"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </>
  );
};
