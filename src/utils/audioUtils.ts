/**
 * Pure Web Audio API Synthesizer for an authentic, resonant South Indian Brass Temple Bell (கோவில் மணி ஓசை).
 * Plays an auspicious metallic chime with rich inharmonic overtones and smooth exponential decay.
 */
export const playTempleBellChime = () => {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.35, now);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);
    masterGain.connect(ctx.destination);

    // Authentic Brass Bell Inharmonic Partials (Strike note ~ 1175Hz, Hum, Prime, Tierce)
    const partials = [
      { freq: 587.3, gain: 0.45, decay: 3.2 },  // Low Hum tone (D5)
      { freq: 1174.6, gain: 0.8, decay: 2.8 },  // Prime / Fundamental (D6)
      { freq: 1400.0, gain: 0.35, decay: 2.0 }, // Tierce minor third
      { freq: 1760.0, gain: 0.5, decay: 1.8 },  // Quint fifth
      { freq: 2350.0, gain: 0.3, decay: 1.2 },  // Nominal octave
      { freq: 3520.0, gain: 0.15, decay: 0.8 }, // Supernominal
    ];

    partials.forEach(({ freq, gain, decay }) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      oscGain.gain.setValueAtTime(gain, now);
      oscGain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(oscGain);
      oscGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + decay);
    });

    // Clean up context after sound finishes
    setTimeout(() => {
      if (ctx.state !== 'closed') {
        ctx.close();
      }
    }, 4000);
  } catch (e) {
    console.warn('Temple bell chime audio context could not start:', e);
  }
};
