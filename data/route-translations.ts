import type { Locale, PhotoSpot } from '@/types';

type RouteTranslation = {
  shortDescription?: string;
  description?: string;
  season?: string;
  duration?: string;
  region?: string;
  location?: string;
  fieldNotes?: string;
  spots?: PhotoSpot[];
  premiumFeatures?: string[];
};

export const routeTranslations: Record<
  string,
  Partial<Record<Exclude<Locale, 'tr'>, RouteTranslation>>
> = {
  gokcada: {
    en: {
      shortDescription: "Turkey's largest island with quiet coves, olive groves and golden-hour sunsets.",
      description: "Gökçeada offers the purest shores of the Aegean, rugged wind-beaten cliffs and tranquil bays. Olive villages, abandoned Greek settlements and turquoise coastal hamlets create a unique palette for photographers.",
      season: 'April – October',
      duration: '3–5 days',
      region: 'Aegean',
      location: 'Gökçeada, Çanakkale',
      fieldNotes: 'Ferries run from Çanakkale. West coast winds can be very strong; a tripod is essential. Book accommodation early in summer. Sunday market in Merkez village is excellent for documentary photography.',
    },
    de: {
      shortDescription: 'Die größte Insel der Türkei mit ruhigen Buchten, Olivenhainen und goldenen Sonnenuntergängen.',
      description: 'Gökçeada vereint die reinsten Ufer der Ägäis, windgepeitschte Klippen und stille Buchten. Olivendörfer und türkisfarbene Küstensiedlungen bieten Fotografen eine einzigartige Kulisse.',
      season: 'April – Oktober',
      duration: '3–5 Tage',
      region: 'Ägäis',
      location: 'Gökçeada, Çanakkale',
    },
    fr: {
      shortDescription: "La plus grande île de Turquie avec des criques paisibles, des oliveraies et des couchers de soleil dorés.",
      description: "Gökçeada réunit les rivages les plus purs de la mer Égée, des falaises battues par le vent et des baies tranquilles. Villages d'oliviers et hameaux côtiers turquoise offrent une palette unique aux photographes.",
      season: 'Avril – Octobre',
      duration: '3–5 jours',
      region: 'Égée',
      location: 'Gökçeada, Çanakkale',
    },
  },
  bozcaada: {
    en: {
      shortDescription: "Turkey's most photogenic island with vineyards, castle silhouettes and Aegean blue.",
      season: 'May – September',
      duration: '2–3 days',
      region: 'Aegean',
    },
    de: {
      shortDescription: 'Die fotogenste Insel der Türkei mit Weinbergen, Burg-Silhouetten und Ägäisblau.',
      season: 'Mai – September',
      duration: '2–3 Tage',
      region: 'Ägäis',
    },
    fr: {
      shortDescription: "L'île la plus photogénique de Turquie avec vignobles, silhouettes de château et bleu égéen.",
      season: 'Mai – Septembre',
      duration: '2–3 jours',
      region: 'Égée',
    },
  },
  kapadokya: {
    en: {
      shortDescription: 'Fairy chimneys, hot air balloons and golden light over Cappadocia.',
      season: 'April – June, September – November',
      duration: '4–6 days',
      region: 'Central Anatolia',
      location: 'Göreme, Nevşehir',
    },
    de: {
      shortDescription: 'Feenkamine, Heißluftballons und goldenes Licht über Kappadokien.',
      season: 'April – Juni, September – November',
      duration: '4–6 Tage',
      region: 'Zentralanatolien',
      location: 'Göreme, Nevşehir',
    },
    fr: {
      shortDescription: 'Cheminées de fées, montgolfières et lumière dorée sur la Cappadoce.',
      season: 'Avril – Juin, Septembre – Novembre',
      duration: '4–6 jours',
      region: 'Anatolie centrale',
      location: 'Göreme, Nevşehir',
    },
  },
  'bolu-golleri': {
    en: {
      shortDescription: "Turkey's most romantic landscape with autumn forests and misty lake mornings.",
      season: 'October – November, April – May',
      duration: '2–4 days',
      region: 'Western Black Sea',
      location: 'Abant & Yedigöller, Bolu',
    },
    de: {
      shortDescription: 'Die romantischste Landschaft der Türkei mit Herbstwäldern und nebligen See-Morgen.',
      season: 'Oktober – November, April – Mai',
      duration: '2–4 Tage',
      region: 'Westliches Schwarzes Meer',
      location: 'Abant & Yedigöller, Bolu',
    },
    fr: {
      shortDescription: 'Le paysage le plus romantique de Turquie avec forêts d’automne et matins brumeux au bord des lacs.',
      season: 'Octobre – Novembre, Avril – Mai',
      duration: '2–4 jours',
      region: 'Mer Noire occidentale',
      location: 'Abant & Yedigöller, Bolu',
    },
  },
  'kaz-daglari': {
    en: {
      shortDescription: 'Mythical Mount Ida with pine forests, clear streams and endemic flora.',
      season: 'May – June, September – October',
      duration: '3–5 days',
      region: 'Northern Aegean',
      location: 'Balıkesir / Çanakkale',
    },
    de: {
      shortDescription: 'Der mythische Ida-Berg mit Kiefernwäldern, klaren Bächen und endemischer Flora.',
      season: 'Mai – Juni, September – Oktober',
      duration: '3–5 Tage',
      region: 'Nördliche Ägäis',
      location: 'Balıkesir / Çanakkale',
    },
    fr: {
      shortDescription: 'Le mont mythique Ida avec forêts de pins, ruisseaux clairs et flore endémique.',
      season: 'Mai – Juin, Septembre – Octobre',
      duration: '3–5 jours',
      region: 'Égée du Nord',
      location: 'Balıkesir / Çanakkale',
    },
  },
  himalayalar: {
    en: {
      shortDescription: 'A photography expedition among the world\'s highest peaks in the Everest region.',
      season: 'October – November, March – May',
      duration: '14–21 days',
      region: 'South Asia',
      location: 'Khumbu Region, Nepal',
    },
    de: {
      shortDescription: 'Eine Fotografie-Expedition zwischen den höchsten Gipfeln der Welt in der Everest-Region.',
      season: 'Oktober – November, März – Mai',
      duration: '14–21 Tage',
      region: 'Südasien',
      location: 'Khumbu-Region, Nepal',
    },
    fr: {
      shortDescription: 'Une expédition photo parmi les plus hauts sommets du monde dans la région de l\'Everest.',
      season: 'Octobre – Novembre, Mars – Mai',
      duration: '14–21 jours',
      region: 'Asie du Sud',
      location: 'Région du Khumbu, Népal',
    },
  },
  patagonia: {
    en: {
      shortDescription: "The world's most dramatic landscape: Torres del Paine granite towers and Patagonian light.",
      season: 'November – February',
      duration: '10–14 days',
      region: 'South America',
      location: 'Torres del Paine, Chile',
    },
    de: {
      shortDescription: 'Die dramatischste Landschaft der Welt: Granittürme von Torres del Paine und patagonisches Licht.',
      season: 'November – Februar',
      duration: '10–14 Tage',
      region: 'Südamerika',
      location: 'Torres del Paine, Chile',
    },
    fr: {
      shortDescription: 'Le paysage le plus dramatique au monde : tours de granit de Torres del Paine et lumière patagonienne.',
      season: 'Novembre – Février',
      duration: '10–14 jours',
      region: 'Amérique du Sud',
      location: 'Torres del Paine, Chili',
    },
  },
  'izlanda-yaylalari': {
    en: {
      shortDescription: 'Northern lights, black volcanic beaches and glacier waterfalls in dreamlike Iceland.',
      season: 'June – August (highlands), September – March (aurora)',
      duration: '10–14 days',
      region: 'Northern Europe',
      location: 'Iceland Interior',
    },
    de: {
      shortDescription: 'Nordlichter, schwarze Vulkanstrände und Gletscherwasserfälle im traumhaften Island.',
      season: 'Juni – August (Hochland), September – März (Aurora)',
      duration: '10–14 Tage',
      region: 'Nordeuropa',
      location: 'Island-Inland',
    },
    fr: {
      shortDescription: 'Aurores boréales, plages volcaniques noires et cascades glaciaires en Islande.',
      season: 'Juin – Août (hautes terres), Septembre – Mars (aurores)',
      duration: '10–14 jours',
      region: 'Europe du Nord',
      location: 'Intérieur de l\'Islande',
    },
  },
  'norve-fiyordlari': {
    en: {
      shortDescription: 'Dramatic coastal cliffs and midnight sun golden light in Norway\'s deepest fjords.',
      season: 'May – September',
      duration: '7–10 days',
      region: 'Northern Europe',
      location: 'Sognefjord & Nærøyfjord',
    },
    de: {
      shortDescription: 'Dramatische Küstenklippen und Mitternachtssonne in Norwegens tiefsten Fjorden.',
      season: 'Mai – September',
      duration: '7–10 Tage',
      region: 'Nordeuropa',
      location: 'Sognefjord & Nærøyfjord',
    },
    fr: {
      shortDescription: 'Falaises côtières dramatiques et lumière dorée du soleil de minuit dans les fjords norvégiens.',
      season: 'Mai – Septembre',
      duration: '7–10 jours',
      region: 'Europe du Nord',
      location: 'Sognefjord & Nærøyfjord',
    },
  },
  amazon: {
    en: {
      shortDescription: 'Wildlife, tropical light and mystical river landscapes in the lungs of the world.',
      season: 'July – November',
      duration: '10–14 days',
      region: 'South America',
      location: 'Amazonas State, Brazil',
    },
    de: {
      shortDescription: 'Tierwelt, tropisches Licht und mystische Flusslandschaften in den Lungen der Welt.',
      season: 'Juli – November',
      duration: '10–14 Tage',
      region: 'Südamerika',
      location: 'Bundesstaat Amazonas, Brasilien',
    },
    fr: {
      shortDescription: 'Faune, lumière tropicale et paysages fluviaux mystiques dans les poumons du monde.',
      season: 'Juillet – Novembre',
      duration: '10–14 jours',
      region: 'Amérique du Sud',
      location: 'État d\'Amazonas, Brésil',
    },
  },
  'misir-piramitleri': {
    en: {
      shortDescription: '4,500 years of monumental architecture in desert golden hour and starry skies.',
      season: 'October – April',
      duration: '5–7 days',
      region: 'North Africa',
      location: 'Giza Plateau, Cairo',
    },
    de: {
      shortDescription: '4500 Jahre monumentale Architektur in der goldenen Wüstenstunde und unter Sternenhimmel.',
      season: 'Oktober – April',
      duration: '5–7 Tage',
      region: 'Nordafrika',
      location: 'Gizeh-Plateau, Kairo',
    },
    fr: {
      shortDescription: '4500 ans d\'architecture monumentale à l\'heure dorée du désert et sous un ciel étoilé.',
      season: 'Octobre – Avril',
      duration: '5–7 jours',
      region: 'Afrique du Nord',
      location: 'Plateau de Gizeh, Le Caire',
    },
  },
  'altay-daglari': {
    en: {
      shortDescription: 'Kazakh nomads, eagle hunters and endless steppes beyond civilization in Mongolia.',
      season: 'June – September',
      duration: '14–21 days',
      region: 'Central Asia',
      location: 'Bayan-Ölgii Province',
    },
    de: {
      shortDescription: 'Kasachische Nomaden, Adlerjäger und endlose Steppen jenseits der Zivilisation in der Mongolei.',
      season: 'Juni – September',
      duration: '14–21 Tage',
      region: 'Zentralasien',
      location: 'Provinz Bayan-Ölgii',
    },
    fr: {
      shortDescription: 'Nomades kazakhs, chasseurs d\'aigles et steppes infinies au-delà de la civilisation en Mongolie.',
      season: 'Juin – Septembre',
      duration: '14–21 jours',
      region: 'Asie centrale',
      location: 'Province de Bayan-Ölgii',
    },
  },
  'cin-seddi': {
    en: {
      shortDescription: 'Autumn colour bursts and morning mist along the unrestored walls of Jinshanling.',
      season: 'October – November, March – April',
      duration: '5–7 days',
      region: 'East Asia',
      location: 'Badaling & Jinshanling, Beijing',
    },
    de: {
      shortDescription: 'Herbstfarben und Morgennebel entlang der unrestaurierten Mauern von Jinshanling.',
      season: 'Oktober – November, März – April',
      duration: '5–7 Tage',
      region: 'Ostasien',
      location: 'Badaling & Jinshanling, Peking',
    },
    fr: {
      shortDescription: 'Explosion de couleurs d\'automne et brume matinale le long des murs non restaurés de Jinshanling.',
      season: 'Octobre – Novembre, Mars – Avril',
      duration: '5–7 jours',
      region: 'Asie de l\'Est',
      location: 'Badaling & Jinshanling, Pékin',
    },
  },
};
