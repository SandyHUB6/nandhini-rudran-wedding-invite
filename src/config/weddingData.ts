export interface Ceremony {
  id: string;
  name: string;
  tamilName?: string;
  date: string;
  tamilDate?: string;
  day: string;
  time: string;
  venue: string;
}

export interface WeddingConfig {
  brideName: string;
  groomName: string;
  brideTamil?: string;
  groomTamil?: string;
  tagline: string;
  subTagline: string;
  auspiciousSymbol: string;
  invocation: string;
  invocationTamil?: string;
  invitationSubtitle: string;
  invitationTamilSubtitle?: string;
  invitationEnglishSubtitle?: string;
  parentsNote?: string;
  date: string;
  tamilDate?: string;
  day: string;
  muhurthamTime: string;
  targetDateISO: string; // Used for live countdown
  venueName: string;
  venueTamil?: string;
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
  groomName: "Rudran Veerabadran",
  brideName: "Nandhini Gouthaman",
  groomTamil: "",
  brideTamil: "",
  tagline: "School Mate → Soul Mate",
  subTagline: "A Decade of Us (2016 – 2026)",
  auspiciousSymbol: "ॐ",
  invocation: "",
  invocationTamil: "",
  invitationSubtitle: "Wedding Invitation",
  invitationEnglishSubtitle: "Wedding Invitation",
  invitationTamilSubtitle: "Wedding Invitation",
  parentsNote: "Together with their families",
  date: "11 November 2026",
  tamilDate: "Wednesday, 11 November 2026",
  day: "Wednesday",
  muhurthamTime: "9:00 AM – 10:00 AM IST",
  targetDateISO: "2026-11-11T09:00:00+05:30",
  venueName: "Soudamman Kovil Kalyana Mandapam",
  venueTamil: "Soudamman Kovil Kalyana Mandapam",
  location: "Souduman Koil Back Side, 1/1, Near IDBI Bank, Ammankulam, Bodinayakanur, Theni District, Tamil Nadu – 625513",
  mapUrl: "https://maps.app.goo.gl/rW2wJotrbcJr9mES9",
  audio: "/assets/audio/wedding-bgm.mp3",
  coupleImage: "/assets/images/couple-portrait.png",
  secondaryCoupleImage: "/assets/images/couple-portrait3.png",
  ceremonies: [
    {
      id: "engagement",
      name: "Engagement Ceremony",
      tamilName: "Engagement Ceremony",
      date: "Tuesday, November 10, 2026",
      tamilDate: "Auspicious Evening Muhurtham",
      day: "Tuesday",
      time: "6:00 PM – 9:00 PM IST",
      venue: "Soudamman Kovil Kalyana Mandapam, Bodinayakanur",
    },
    {
      id: "muhurtham",
      name: "Holy Subha Muhurtham",
      tamilName: "Holy Subha Muhurtham",
      date: "Wednesday, November 11, 2026",
      tamilDate: "Auspicious Morning Muhurtham",
      day: "Wednesday",
      time: "9:00 AM – 10:00 AM IST",
      venue: "Soudamman Kovil Kalyana Mandapam, Bodinayakanur",
    },
  ],
  calendarEvent: {
    title: "Wedding of Rudran & Nandhini",
    description: "Traditional South Indian Hindu Wedding of Rudran Veerabadran & Nandhini Gouthaman. Muhurtham: 9:00 AM – 10:00 AM IST at Soudamman Kovil Kalyana Mandapam, Bodinayakanur.",
    location: "Soudamman Kovil Kalyana Mandapam, Souduman Koil Back Side, 1/1, Near IDBI Bank, Ammankulam, Bodinayakanur, Theni District, Tamil Nadu – 625513",
    startDate: "20261111T033000Z", // 9:00 AM IST = 3:30 AM UTC
    endDate: "20261111T043000Z",   // 10:00 AM IST = 4:30 AM UTC
  },
};
