import fs from 'fs';
import path from 'path';

// Generate a valid 44.1kHz 16-bit Stereo PCM WAV audio file
// containing a beautiful traditional Carnatic Mohanam raga wedding nadaswaram melody
const sampleRate = 44100;
const durationSeconds = 32;
const numChannels = 2;
const bytesPerSample = 2;
const totalSamples = sampleRate * durationSeconds;
const dataSize = totalSamples * numChannels * bytesPerSample;

const buffer = Buffer.alloc(44 + dataSize);

// Write WAV Header
buffer.write('RIFF', 0);
buffer.writeUInt32LE(36 + dataSize, 4);
buffer.write('WAVE', 8);
buffer.write('fmt ', 12);
buffer.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
buffer.writeUInt16LE(1, 20);  // AudioFormat (1 for PCM)
buffer.writeUInt16LE(numChannels, 22);
buffer.writeUInt32LE(sampleRate, 24);
buffer.writeUInt32LE(sampleRate * numChannels * bytesPerSample, 28); // ByteRate
buffer.writeUInt16LE(numChannels * bytesPerSample, 32);              // BlockAlign
buffer.writeUInt16LE(bytesPerSample * 8, 34);                        // BitsPerSample
buffer.write('data', 36);
buffer.writeUInt32LE(dataSize, 40);

// Carnatic Mohanam Raga notes (Pentatonic Major: Sa, Ri2, Ga3, Pa, Dha2)
// Base Sa = C#4 (277.18 Hz)
const Sa = 277.18;
const Ri = Sa * (9 / 8);      // 311.83 Hz
const Ga = Sa * (5 / 4);      // 346.48 Hz
const Pa = Sa * (3 / 2);      // 415.77 Hz
const Dha = Sa * (5 / 3);     // 461.97 Hz
const SaHigh = Sa * 2;        // 554.36 Hz
const RiHigh = Ri * 2;        // 623.66 Hz
const GaHigh = Ga * 2;        // 692.96 Hz

// Beautiful traditional Tamil Mangala Vathiyam wedding phrase
const melody = [
  // Phrase 1: Auspicious opening invocation
  { note: Pa, dur: 1.2 }, { note: Dha, dur: 0.8 }, { note: SaHigh, dur: 1.5 }, { note: Dha, dur: 0.8 },
  { note: Pa, dur: 1.2 }, { note: Ga, dur: 0.8 }, { note: Ri, dur: 1.5 }, { note: Sa, dur: 2.0 },
  // Phrase 2: Ascending celebration
  { note: Sa, dur: 0.8 }, { note: Ri, dur: 0.8 }, { note: Ga, dur: 1.0 }, { note: Pa, dur: 1.0 },
  { note: Dha, dur: 1.2 }, { note: SaHigh, dur: 1.5 }, { note: RiHigh, dur: 1.0 }, { note: SaHigh, dur: 2.0 },
  // Phrase 3: Graceful descent with gamaka
  { note: GaHigh, dur: 1.0 }, { note: RiHigh, dur: 0.8 }, { note: SaHigh, dur: 1.2 }, { note: Dha, dur: 1.0 },
  { note: Pa, dur: 1.5 }, { note: Ga, dur: 1.0 }, { note: Ri, dur: 1.2 }, { note: Sa, dur: 2.5 },
  // Phrase 4: Auspicious closing flourish
  { note: Pa, dur: 1.0 }, { note: SaHigh, dur: 1.5 }, { note: Dha, dur: 1.0 }, { note: Pa, dur: 1.5 },
  { note: Ga, dur: 1.2 }, { note: Ri, dur: 1.2 }, { note: Sa, dur: 3.5 },
];

let offset = 44;
let melodyTime = 0;
let phraseIdx = 0;
let phraseStartTime = 0;

for (let i = 0; i < totalSamples; i++) {
  const t = i / sampleRate;

  // Track melody note
  while (phraseIdx < melody.length - 1 && t > phraseStartTime + melody[phraseIdx].dur) {
    phraseStartTime += melody[phraseIdx].dur;
    phraseIdx++;
  }
  const currentNote = melody[phraseIdx % melody.length];
  const noteAge = t - phraseStartTime;
  const freq = currentNote.note;

  // Envelope for note (attack, sustain, gentle release)
  const attack = Math.min(1, noteAge * 8);
  const release = Math.max(0, 1 - (noteAge / currentNote.dur) * 0.3);
  const noteAmp = attack * release;

  // 1. Tanpura Drone Background (Pa = 207.8Hz, Sa = 138.6Hz)
  const tanpuraSa = 138.59;
  const tanpuraPa = 207.89;
  const drone =
    (Math.sin(2 * Math.PI * tanpuraSa * t) * 0.12 +
     Math.sin(2 * Math.PI * (tanpuraSa * 2) * t) * 0.08 +
     Math.sin(2 * Math.PI * tanpuraPa * t) * 0.1 +
     Math.sin(2 * Math.PI * (tanpuraPa * 2) * t) * 0.05) * 0.4;

  // 2. Nadaswaram / Shehnai Lead (Reed instrument with rich odd and even harmonics)
  const vibrato = Math.sin(2 * Math.PI * 5.2 * t) * 2.5; // Traditional vocal gamaka vibrato
  const activeFreq = freq + vibrato;
  const nadaswaram =
    (Math.sin(2 * Math.PI * activeFreq * t) * 0.4 +
     Math.sin(2 * Math.PI * activeFreq * 2 * t) * 0.28 +
     Math.sin(2 * Math.PI * activeFreq * 3 * t) * 0.18 +
     Math.sin(2 * Math.PI * activeFreq * 4 * t) * 0.12 +
     Math.sin(2 * Math.PI * activeFreq * 5 * t) * 0.08) * noteAmp * 0.45;

  // 3. Subtle Mridangam / Thavil Thappi rhythm pulse (auspicious tintin pulse)
  const beatTime = (t * 2) % 1;
  const thavil = Math.exp(-beatTime * 15) * Math.sin(2 * Math.PI * 85 * beatTime) * 0.12;

  // Master mix
  let sampleL = drone + nadaswaram * 0.95 + thavil * 0.7;
  let sampleR = drone + nadaswaram * 1.05 + thavil * 0.7;

  // Fade in at start & fade out at end for seamless looping
  const masterFade = Math.min(1, t * 0.5) * Math.min(1, (durationSeconds - t) * 0.5);
  sampleL *= masterFade * 0.8;
  sampleR *= masterFade * 0.8;

  // Clamp 16-bit
  const intL = Math.max(-32768, Math.min(32767, Math.floor(sampleL * 32767)));
  const intR = Math.max(-32768, Math.min(32767, Math.floor(sampleR * 32767)));

  buffer.writeInt16LE(intL, offset);
  buffer.writeInt16LE(intR, offset + 2);
  offset += 4;
}

const targetDir = 'e:/nandhini-rudran-wedding-invite/public/assets/audio';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Write to both wedding-bgm.mp3 and wedding-bgm.wav
fs.writeFileSync(path.join(targetDir, 'wedding-bgm.mp3'), buffer);
fs.writeFileSync(path.join(targetDir, 'wedding-bgm.wav'), buffer);
console.log('Successfully generated traditional South Indian wedding audio asset at public/assets/audio/wedding-bgm.mp3');
