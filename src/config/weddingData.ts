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
  family?: {
    groomParents: string;
    brideParents: string;
    grandparents?: string;
    note: string;
  };
}

export interface ThamboolamItem {
  id: string;
  title: string;
  tamilTitle: string;
  significance: string;
  culturalNote: string;
  symbol: string;
}

export interface BlessingItem {
  id: string;
  guestName: string;
  message: string;
  timestamp: string;
  avatarColor?: string;
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
  family: {
    groomParents: "Mr. Veerabadran & Mrs. Soundaravalli",
    brideParents: "Mr. Gouthaman & Mrs. Shanthi",
    grandparents: "With the eternal blessings of our revered ancestors & family elders",
    note: "Cordially invite you to share in the joy and celebrations of our children's wedding.",
  },
};

export const thamboolamItemsData: ThamboolamItem[] = [
  {
    id: "betel-leaves",
    title: "Betel Leaves",
    tamilTitle: "Vetrillai",
    significance: "A symbol of prosperity, auspiciousness, and well-being.",
    culturalNote: "Exchanged in all sacred Hindu rituals to invoke divine grace, good health, and mutual respect.",
    symbol: "🍃",
  },
  {
    id: "coconut",
    title: "Coconut",
    tamilTitle: "Thengai",
    significance: "A symbol of completeness, purity, and auspicious beginnings.",
    culturalNote: "Represents selflessness and the pure divine essence within, blessed by the holy trinity.",
    symbol: "🥥",
  },
  {
    id: "turmeric",
    title: "Turmeric",
    tamilTitle: "Manjal",
    significance: "Traditionally associated with purity, prosperity, and good fortune.",
    culturalNote: "An essential mangala dravya that sanctifies the marital bond with vibrant solar energy.",
    symbol: "✨",
  },
  {
    id: "kumkum",
    title: "Kumkum",
    tamilTitle: "Kungumam",
    significance: "A traditional symbol of auspiciousness and celebration.",
    culturalNote: "Applied on the forehead as a blessing of divine feminine grace, protection, and long life.",
    symbol: "🔴",
  },
  {
    id: "flowers",
    title: "Jasmine & Marigold Flowers",
    tamilTitle: "Malli & Sevvanthi",
    significance: "A symbol of beauty, love, joy, and new beginnings.",
    culturalNote: "Fragrant fresh blooms that sweeten the sacred path of the bride and groom together.",
    symbol: "🌸",
  },
  {
    id: "rice",
    title: "Akshadhai (Sacred Rice)",
    tamilTitle: "Akshadhai",
    significance: "A symbol of abundance, prosperity, and blessings.",
    culturalNote: "Turmeric-infused unbroken rice grains showered upon the couple for an everlasting union.",
    symbol: "🌾",
  },
  {
    id: "sweets",
    title: "Traditional Sweets",
    tamilTitle: "Inippu",
    significance: "A wish for sweetness, happiness, and joyful moments in life.",
    culturalNote: "Offered to guests as a heartfelt gesture of hospitality and sweetest beginnings.",
    symbol: "🍯",
  },
  {
    id: "coin",
    title: "Auspicious Coin",
    tamilTitle: "Kaasu",
    significance: "A traditional symbol of prosperity and abundance.",
    culturalNote: "Invokes the eternal blessings of Goddess Mahalakshmi for wealth and domestic harmony.",
    symbol: "🪙",
  },
];

export const seedBlessingsData: BlessingItem[] = [
  {
    id: "blessing-1",
    guestName: "Senthil Kumar & Family",
    message: "Wishing dearest Rudran & Nandhini a lifetime filled with immense joy, everlasting love, and abundant blessings! Congratulations on your holy union!",
    timestamp: "2 hours ago",
    avatarColor: "#C5A059",
  },
  {
    id: "blessing-2",
    guestName: "Dr. Meenakshi Sundaram",
    message: "May the divine grace shower upon both of you forever. Wishing you a blissful and radiant married life together!",
    timestamp: "5 hours ago",
    avatarColor: "#8E2232",
  },
  {
    id: "blessing-3",
    guestName: "Karthik & Divya",
    message: "From school mates to soul mates — your story is pure magic! Cheers to a wonderful new chapter filled with laughter and adventures.",
    timestamp: "1 day ago",
    avatarColor: "#345E47",
  },
  {
    id: "blessing-4",
    guestName: "Anand & Priya",
    message: "Heartiest congratulations Rudran and Nandhini! May your bond grow stronger with every passing sunrise.",
    timestamp: "2 days ago",
    avatarColor: "#C5A059",
  },
];
