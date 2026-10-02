export interface Ceremony {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  tamilName?: string;
  date: string;
  tamilDate?: string;
  day: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
}

export interface WeddingConfig {
  groomName: string;
  groomFirstName: string;
  groomEducation?: string;
  groomProfession?: string;
  groomDesignation?: string;
  groomTamil?: string;
  brideName: string;
  brideFirstName: string;
  brideEducation?: string;
  brideDesignation?: string;
  brideCompany?: string;
  brideTamil?: string;
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
  weddingLogo: string;
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
  groomName: "V. Rudran",
  groomFirstName: "Rudran",
  groomTamil: "",
  brideName: "G. Nandhini",
  brideFirstName: "Nandhini",
  brideTamil: "",
  tagline: "School Mate → Soul Mate",
  subTagline: "A Decade of Us (2016 – 2026)",
  auspiciousSymbol: "ॐ",
  invocation: "",
  invocationTamil: "",
  invitationSubtitle: "Wedding Invitation",
  invitationEnglishSubtitle: "Wedding Invitation",
  invitationTamilSubtitle: "Wedding Invitation",
  parentsNote: "With the blessings of our elders",
  date: "11 November 2026",
  tamilDate: "Wednesday, 11 November 2026",
  day: "Wednesday",
  muhurthamTime: "9:00 AM – 10:30 AM",
  targetDateISO: "2026-11-11T09:00:00+05:30",
  venueName: "Sri Srinivasa Perumal Temple",
  venueTamil: "Sri Srinivasa Perumal Temple",
  location: "Sri Srinivasa Perumal Temple, Bodinayakanur, Theni District, Tamil Nadu",
  mapUrl: "https://maps.app.goo.gl/rW2wJotrbcJr9mES9",
  audio: "/assets/audio/wedding-bgm.mp3",
  coupleImage: "/assets/images/couple-portrait.png",
  secondaryCoupleImage: "/assets/images/couple-portrait3.png",
  weddingLogo: "/assets/images/wedding-logo.png",
  ceremonies: [
    {
      id: "engagement",
      name: "Engagement & Ring Ceremony",
      badge: "ENGAGEMENT & RING CEREMONY",
      subtitle: "Marriage Hall & Reception Venue",
      date: "Tuesday, 10 November 2026",
      tamilDate: "Auspicious Evening Muhurtham",
      day: "Tuesday",
      time: "7:35 PM – 8:35 PM",
      venue: "Soudamman Kovil Kalyana Mandapam",
      address: "Souduman Koil Back Side, 1/1, Near IDBI Bank, Ammankulam, Bodinayakanur, Theni District – 625513",
      mapUrl: "https://maps.google.com/?q=Soudamman+Kovil+Kalyana+Mandapam+Bodinayakanur",
    },
    {
      id: "wedding",
      name: "Wedding Ceremony",
      badge: "WEDDING CEREMONY",
      subtitle: "Sacred Temple Muhurtham Venue",
      date: "Wednesday, 11 November 2026",
      tamilDate: "Sacred Morning Muhurtham",
      day: "Wednesday",
      time: "9:00 AM – 10:30 AM",
      venue: "Sri Srinivasa Perumal Temple",
      address: "Sri Srinivasa Perumal Temple, Bodinayakanur, Theni District, Tamil Nadu",
      mapUrl: "https://maps.google.com/?q=Sri+Srinivasa+Perumal+Temple+Bodinayakanur",
    },
  ],
  calendarEvent: {
    title: "Wedding of Rudran & Nandhini",
    description: "Traditional South Indian Hindu Wedding of V. Rudran & G. Nandhini. Engagement & Ring Ceremony: Tuesday, 10 Nov 2026 (7:35 PM – 8:35 PM) at Soudamman Kovil Kalyana Mandapam, Bodinayakanur. Wedding Ceremony: Wednesday, 11 Nov 2026 (9:00 AM – 10:30 AM) at Sri Srinivasa Perumal Temple, Bodinayakanur.",
    location: "Sri Srinivasa Perumal Temple, Bodinayakanur, Theni District, Tamil Nadu",
    startDate: "20261111T033000Z", // 9:00 AM IST = 3:30 AM UTC
    endDate: "20261111T050000Z",   // 10:30 AM IST = 5:00 AM UTC
  },
};
