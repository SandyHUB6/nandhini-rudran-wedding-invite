export interface Ceremony {
  id: string;
  name: string;
  tamilName: string;
  date: string;
  tamilDate: string;
  day: string;
  time: string;
  venue: string;
}

export interface WeddingConfig {
  brideName: string;
  groomName: string;
  brideTamil: string;
  groomTamil: string;
  tagline: string;
  subTagline: string;
  auspiciousSymbol: string;
  invocationTamil: string;
  invitationTamilSubtitle: string;
  invitationEnglishSubtitle: string;
  parentsNote?: string;
  date: string;
  tamilDate: string;
  day: string;
  muhurthamTime: string;
  targetDateISO: string; // Used for live countdown
  venueName: string;
  venueTamil: string;
  location: string;
  mapUrl: string;
  audio: string;
  coupleImage: string;
  secondaryCoupleImage: string;
  ceremonies: Ceremony[];
  calendarEvent: {
    title: string;
    description: string;
    location: string;
    startDate: string; // YYYYMMDDTHHMMSSZ
    endDate: string;   // YYYYMMDDTHHMMSSZ
  };
}

export const weddingData: WeddingConfig = {
  brideName: "Nandhini Gouthaman",
  groomName: "Rudran Veerabadran",
  brideTamil: "நந்தினி கௌதமன்",
  groomTamil: "ருத்ரன் வீரபத்ரன்",
  tagline: "School Mate → Soul Mate",
  subTagline: "A Decade of Us (2016 – 2026)",
  auspiciousSymbol: "உ",
  invocationTamil: "ஸ்ரீ விக்னேஸ்வரர் துணை",
  invitationTamilSubtitle: "திருமண அழைப்பிதழ்",
  invitationEnglishSubtitle: "Wedding Invitation",
  parentsNote: "Together with their families",
  date: "11 November 2026",
  tamilDate: "ஐப்பசி 25, சுபகிருது வருடம்",
  day: "Wednesday",
  muhurthamTime: "9:00 AM – 10:00 AM IST",
  targetDateISO: "2026-11-11T09:00:00+05:30",
  venueName: "Soudamman Kovil Kalyana Mandapam",
  venueTamil: "சௌடம்மன் கோவில் கல்யாண மண்டபம்",
  location: "Souduman Koil Back Side, 1/1, Near IDBI Bank, Ammankulam, Bodinayakanur, Theni District, Tamil Nadu – 625513",
  mapUrl: "https://maps.app.goo.gl/rW2wJotrbcJr9mES9",
  audio: "/assets/audio/wedding-bgm.mp3",
  coupleImage: "/assets/images/couple-portrait.png",
  secondaryCoupleImage: "/assets/images/couple-portrait3.png",
  ceremonies: [
    {
      id: "engagement",
      name: "Engagement Ceremony",
      tamilName: "நிச்சயதார்த்தம்",
      date: "Tuesday, November 10, 2026",
      tamilDate: "செவ்வாய்க்கிழமை, நவம்பர் 10, 2026",
      day: "Tuesday",
      time: "6:00 PM – 9:00 PM IST",
      venue: "Soudamman Kovil Kalyana Mandapam, Bodinayakanur",
    },
    {
      id: "muhurtham",
      name: "Holy Subha Muhurtham",
      tamilName: "புனித முஹூர்த்தம்",
      date: "Wednesday, November 11, 2026",
      tamilDate: "புதன்கிழமை, நவம்பர் 11, 2026",
      day: "Wednesday",
      time: "9:00 AM – 10:00 AM IST",
      venue: "Soudamman Kovil Kalyana Mandapam, Bodinayakanur",
    },
  ],
  calendarEvent: {
    title: "Wedding of Nandhini & Rudran",
    description: "Traditional South Indian Tamil Hindu Wedding of Nandhini & Rudran. Muhurtham: 9:00 AM – 10:00 AM IST at Soudamman Kovil Kalyana Mandapam, Bodinayakanur.",
    location: "Soudamman Kovil Kalyana Mandapam, Souduman Koil Back Side, 1/1, Near IDBI Bank, Ammankulam, Bodinayakanur, Theni District, Tamil Nadu – 625513",
    startDate: "20261111T033000Z", // 9:00 AM IST = 3:30 AM UTC
    endDate: "20261111T043000Z",   // 10:00 AM IST = 4:30 AM UTC
  },
};
