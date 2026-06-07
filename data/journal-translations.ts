import type { Locale } from '@/types';

type JournalTranslation = {
  title?: string;
  excerpt?: string;
  content?: string;
  location?: string;
  tags?: string[];
};

const sharedContent = {
  kapadokya: {
    en: `On my first visit to Cappadocia in 2021, I asked myself why photograph a place seen so many times. I was wrong.

Two hours before sunrise at Red Valley, frost on the tripod and mist lifting through the chimneys — Cappadocia resets every morning.

When balloons broke through the fog, the shooting window lasted four minutes. Three usable frames from three hundred. Among the best of my career.

**Practical Notes**

Arrive at Red Valley ninety minutes before sunrise. The east-facing slope catches light first. Keep Zelve and Devrent as backup if balloon flights cancel.`,
    de: `Bei meinem ersten Besuch in Kappadokien 2021 fragte ich mich, warum ein so oft gesehener Ort fotografiert werden soll. Ich lag falsch.

Zwei Stunden vor Sonnenaufgang im Roten Tal — Frost auf dem Stativ, Nebel über den Feenkaminen. Kappadokien beginnt jeden Morgen neu.

Als die Ballons aus dem Nebel kamen, dauerte das Fenster vier Minuten. Drei brauchbare Bilder von dreihundert. Zu den besten meiner Laufbahn.

**Praktische Hinweise**

Kommen Sie neunzig Minuten vor Sonnenaufgang ins Rote Tal. Die ostwärts gerichtete Flanke fängt zuerst Licht. Zelve und Devrent als Plan B, falls Ballonflüge ausfallen.`,
    fr: `Lors de ma première visite en Cappadoce en 2021, je me demandais pourquoi photographier un lieu si souvent vu. J'avais tort.

Deux heures avant le lever au Val Rouge — givre sur le trépied, brume sur les cheminées. La Cappadoce se réinvente chaque matin.

Quand les montgolfières ont percé le brouillard, la fenêtre a duré quatre minutes. Trois images utilisables sur trois cents. Parmi les meilleures de ma carrière.

**Notes pratiques**

Arrivez quatre-vingt-dix minutes avant le lever au Val Rouge. Le versant est capte la lumière en premier. Gardez Zelve et Devrent en plan B si les vols en ballon sont annulés.`,
  },
  patagonia: {
    en: `Patagonia teaches photographers one thing: patience.

On day one, ninety-kilometre winds knocked over my tripod. Rain, fog, cloud ceiling. Then on day fourteen at 4:00, the Cuernos turned pink on Pehoe Lake. Six seconds. One perfect frame.

**Technical Notes**

Plan for wind. Weight your tripod legs. Rain covers are not optional.`,
    de: `Patagonien lehrt Fotografen eines: Geduld.

Am ersten Tag warf Wind mit 90 km/h mein Stativ um. Regen, Nebel, Wolkendecke. Am vierzehnten Tag um 4:00 Uhr färbten sich die Cuernos rosa auf dem Pehoe-See. Sechs Sekunden. Ein perfektes Bild.

**Technische Hinweise**

Wind einplanen. Stativbeine beschweren. Regenschutz ist Pflicht.`,
    fr: `La Patagonie enseigne une chose aux photographes : la patience.

Le premier jour, des vents à 90 km/h ont renversé mon trépied. Pluie, brouillard, ciel fermé. Le quatorzième jour à 4h00, les Cuernos sont devenus roses sur le lac Pehoe. Six secondes. Une image parfaite.

**Notes techniques**

Anticipez le vent. Lestez les pieds du trépied. Protection pluie indispensable.`,
  },
  gokceada: {
    en: `I went to Gökçeada because a colleague said there was nothing there. He was right — and that was the point.

No crowds, no resorts. Olive trees, stone houses, the Aegean. At Kaleköy, two hours before sunset, the castle, sky and harbour aligned in one frame. Eighteen minutes of perfect light.

**Practical Info**

Ferries from Çanakkale. Rent a bicycle. Book guesthouses early in summer.`,
    de: `Ich fuhr nach Gökçeada, weil ein Kollege sagte, dort sei nichts. Er hatte recht — genau das war der Punkt.

Keine Massen, keine Resorts. Oliven, Steinhaus, Ägäis. In Kaleköy, zwei Stunden vor Sonnenuntergang, Burg, Himmel und Hafen in einem Bild. Achtzehn Minuten perfektes Licht.

**Praktische Infos**

Fähren ab Çanakkale. Fahrrad mieten. Früh im Sommer buchen.`,
    fr: `Je suis allé à Gökçeada parce qu'un collègue disait qu'il n'y avait rien. Il avait raison — c'était tout l'intérêt.

Pas de foule, pas de grands hôtels. Oliviers, maisons de pierre, Égée. À Kaleköy, deux heures avant le coucher, château, ciel et port en un seul cadre. Dix-huit minutes de lumière parfaite.

**Infos pratiques**

Ferries depuis Çanakkale. Louer un vélo. Réserver tôt en été.`,
  },
  norway: {
    en: `In Norwegian summer the sun barely sets. At 23:45 atop Preikestolen, Lysefjord lay mirror-still. At 00:12 the wind died. The longest exposure of my life.

**Norway Photo Notes**

June–July white nights keep light in golden-hour mode — both gift and challenge.`,
    de: `Im norwegischen Sommer geht die Sonne kaum unter. Um 23:45 auf Preikestolen lag der Lysefjord spiegelglatt. Um 00:12 verstummte der Wind. Meine längste Belichtung.

**Norwegen-Fotonotizen**

Weiße Nächte im Juni–Juli halten das Licht in der goldenen Stunde — Geschenk und Herausforderung zugleich.`,
    fr: `En été norvégien, le soleil se couche à peine. À 23h45 au sommet de Preikestolen, le Lysefjord était miroir. À 00h12, le vent s'est tu. Ma plus longue exposition.

**Notes photo Norvège**

Les nuits blanches de juin–juillet maintiennent la lumière en mode heure dorée — cadeau et défi.`,
  },
  altay: {
    en: `Reaching Ölgii took three flights and two days. At 4:30, Bekzat the eagle hunter mounted his horse against the steppe dawn. Fifty millimetres, f/2.0. The portrait I came for.

**Altai Photo Note**

Without a local guide this meeting is impossible. Offer respect before raising the camera.`,
    de: `Ölgii erforderte drei Flüge und zwei Tage. Um 4:30 bestieg Bekzat, der Adlerjäger, sein Pferd in der Steppe. Fünfzig Millimeter, f/2.0. Das Porträt, für das ich kam.

**Altai-Fotonotiz**

Ohne lokalen Führer ist diese Begegnung unmöglich. Respekt zeigen, bevor die Kamera kommt.`,
    fr: `Atteindre Ölgii a demandé trois vols et deux jours. À 4h30, Bekzat le chasseur à aigle monta à cheval dans l'aube de la steppe. Cinquante millimètres, f/2.0. Le portrait que je cherchais.

**Note photo Altaï**

Sans guide local, cette rencontre est impossible. Montrez du respect avant l'appareil.`,
  },
  bolu: {
    en: `The forecast said partly cloudy — perfect for photographers.

At Yedigöller before dawn, mist two centimetres above the water. At 07:23 the sun broke through for forty seconds. The lake became a mirror.

**Autumn Timing**

Last week of October through early November offers peak colour. Track cold nights for mist.`,
    de: `Die Vorhersage sagte bewölkt — perfekt für Fotografen.

Vor der Morgendämmerung am Yedigöller, Nebel zwei Zentimeter über dem Wasser. Um 07:23 brach die Sonne vierzig Sekunden durch. Der See wurde ein Spiegel.

**Herbst-Timing**

Letzte Oktoberwoche bis Anfang November für Spitzenfarben. Kalte Nächte für Nebel verfolgen.`,
    fr: `Les prévisions annonçaient un ciel partiellement nuageux — parfait pour les photographes.

Avant l'aube à Yedigöller, brume à deux centimètres au-dessus de l'eau. À 07h23, le soleil a percé quarante secondes. Le lac est devenu un miroir.

**Calendrier automnal**

Dernière semaine d'octobre et début novembre pour les couleurs maximales. Suivre les nuits froides pour la brume.`,
  },
};

export const journalTranslations: Record<
  string,
  Partial<Record<Exclude<Locale, 'tr'>, JournalTranslation>>
> = {
  'kapadokya-bes-gun': {
    en: {
      title: 'Five Days in Cappadocia: Chimneys, Balloons and Golden Light',
      excerpt: 'When I woke at 4:30, the valley still seemed asleep. But as I shouldered my camera, the glow of rising balloons pierced the night. Göreme is reborn for photographers every morning.',
      content: sharedContent.kapadokya.en,
      location: 'Göreme, Nevşehir, Turkey',
      tags: ['cappadocia', 'turkey', 'balloons', 'sunrise', 'landscape'],
    },
    de: {
      title: 'Fünf Tage in Kappadokien: Feenkamine, Ballons und goldenes Licht',
      excerpt: 'Als ich um 4:30 Uhr aufwachte, schien das Tal noch zu schlafen. Doch als ich meine Kamera schulterte, durchdrang das Feuer der Ballons die Nacht. Göreme wird für Fotografen jeden Morgen neu geboren.',
      content: sharedContent.kapadokya.de,
      location: 'Göreme, Nevşehir, Türkei',
      tags: ['kappadokien', 'türkei', 'ballons', 'sonnenaufgang', 'landschaft'],
    },
    fr: {
      title: 'Cinq jours en Cappadoce : cheminées de fées, montgolfières et lumière dorée',
      excerpt: "À 4h30, la vallée semblait encore endormie. Mais en chargeant mon appareil, j'ai vu la lueur des montgolfières percer la nuit. Göreme renaît pour les photographes chaque matin.",
      content: sharedContent.kapadokya.fr,
      location: 'Göreme, Nevşehir, Turquie',
      tags: ['cappadoce', 'turquie', 'montgolfières', 'lever de soleil', 'paysage'],
    },
  },
  'patagonya-uc-hafta': {
    en: {
      title: 'Patagonia: Three Weeks, Four Storms, One Photograph',
      excerpt: "I went to Torres del Paine and didn't see the towers for two weeks. Clouds, rain, wind. Then on day 14 I woke at 4:00 — and there they were: pink peaks on a mirror lake.",
      content: sharedContent.patagonia.en,
      location: 'Torres del Paine, Chile',
      tags: ['patagonia', 'chile', 'mountains', 'landscape', 'patience'],
    },
    de: {
      title: 'Patagonien: Drei Wochen, vier Stürme, ein Foto',
      excerpt: 'In Torres del Paine sah ich die Türme zwei Wochen lang nicht. Wolken, Regen, Wind. Am 14. Tag wachte ich um 4:00 auf — und dort standen sie: rosa Gipfel auf einem Spiegelsee.',
      content: sharedContent.patagonia.de,
      location: 'Torres del Paine, Chile',
      tags: ['patagonien', 'chile', 'berge', 'landschaft', 'geduld'],
    },
    fr: {
      title: 'Patagonie : trois semaines, quatre tempêtes, une photographie',
      excerpt: "À Torres del Paine, je n'ai pas vu les tours pendant deux semaines. Nuages, pluie, vent. Le 14e jour, à 4h00, elles étaient là : sommets roses sur un lac miroir.",
      content: sharedContent.patagonia.fr,
      location: 'Torres del Paine, Chili',
      tags: ['patagonie', 'chili', 'montagnes', 'paysage', 'patience'],
    },
  },
  'gokcada-altin-saat': {
    en: {
      title: 'Golden Hour on Gökçeada: The Silence of Kaleköy',
      excerpt: "On Turkey's largest island, I climbed the rocks at golden hour in a village far from tourism. Between the endless Aegean blue and the Byzantine castle silhouette, being there was enough.",
      content: sharedContent.gokceada.en,
      location: 'Kaleköy, Gökçeada, Turkey',
      tags: ['gokceada', 'turkey', 'aegean', 'sunset', 'island'],
    },
    de: {
      title: 'Goldene Stunde auf Gökçeada: Die Stille von Kaleköy',
      excerpt: 'Auf der größten Insel der Türkei stieg ich zur goldenen Stunde auf die Felsen. Zwischen dem endlosen Ägäisblau und der byzantinischen Burg-Silhouette reichte das Dasein.',
      content: sharedContent.gokceada.de,
      location: 'Kaleköy, Gökçeada, Türkei',
      tags: ['gökçeada', 'türkei', 'ägäis', 'sonnenuntergang', 'insel'],
    },
    fr: {
      title: "Heure dorée à Gökçeada : le silence de Kaleköy",
      excerpt: "Sur la plus grande île de Turquie, j'ai gravi les rochers à l'heure dorée. Entre le bleu infini de l'Égée et la silhouette du château byzantin, être là suffisait.",
      content: sharedContent.gokceada.fr,
      location: 'Kaleköy, Gökçeada, Turquie',
      tags: ['gökçeada', 'turquie', 'égée', 'coucher de soleil', 'île'],
    },
  },
  'norvec-fiyordlari-gece-yarisi': {
    en: {
      title: 'Midnight Sun over the Norwegian Fjords',
      excerpt: "It's 23:45 and the sun is still on the horizon. Alone atop Preikestolen. Below, Lysefjord; above, an endless open sky. I came for this moment.",
      content: sharedContent.norway.en,
      location: 'Preikestolen, Stavanger, Norway',
      tags: ['norway', 'fjord', 'midnight sun', 'preikestolen', 'landscape'],
    },
    de: {
      title: 'Mitternachtssonne über den norwegischen Fjorden',
      excerpt: '23:45 Uhr und die Sonne steht noch am Horizont. Allein auf Preikestolen. Unten der Lysefjord, oben endloser Himmel. Dafür bin ich gekommen.',
      content: sharedContent.norway.de,
      location: 'Preikestolen, Stavanger, Norwegen',
      tags: ['norwegen', 'fjord', 'mitternachtssonne', 'preikestolen', 'landschaft'],
    },
    fr: {
      title: 'Soleil de minuit sur les fjords norvégiens',
      excerpt: "23h45 et le soleil est encore à l'horizon. Seul au sommet de Preikestolen. En bas, le Lysefjord ; au-dessus, un ciel infini. Je suis venu pour cet instant.",
      content: sharedContent.norway.fr,
      location: 'Preikestolen, Stavanger, Norvège',
      tags: ['norvège', 'fjord', 'soleil de minuit', 'preikestolen', 'paysage'],
    },
  },
  'altay-kartal-avcisi': {
    en: {
      title: 'A Morning with an Eagle Hunter in the Altai',
      excerpt: "In Mongolia's Altai Mountains, a Kazakh eagle hunter mounted his horse at first light. I was in position. The finest portrait of my career.",
      content: sharedContent.altay.en,
      location: 'Bayan-Ölgii, Mongolia',
      tags: ['mongolia', 'altai', 'eagle', 'portrait', 'culture'],
    },
    de: {
      title: 'Ein Morgen mit einem Adlerjäger im Altai',
      excerpt: 'In den Altai-Bergen Mongoleis bestieg ein kasachischer Adlerjäger bei ersten Licht sein Pferd. Ich war in Position. Das schönste Porträt meiner Laufbahn.',
      content: sharedContent.altay.de,
      location: 'Bayan-Ölgii, Mongolei',
      tags: ['mongolei', 'altai', 'adler', 'porträt', 'kultur'],
    },
    fr: {
      title: "Un matin avec un chasseur à aigle dans l'Altaï",
      excerpt: "Dans les montagnes de l'Altaï en Mongolie, un chasseur kazakh monta à cheval à la première lumière. J'étais en place. Le plus beau portrait de ma carrière.",
      content: sharedContent.altay.fr,
      location: 'Bayan-Ölgii, Mongolie',
      tags: ['mongolie', 'altaï', 'aigle', 'portrait', 'culture'],
    },
  },
  'bolu-golleri-sonbahar': {
    en: {
      title: 'Autumn at Bolu Lakes: The Beauty of Getting Lost',
      excerpt: 'A warning for those heading to Yedigöller in early November: arrive very early. Sit by the lake until the morning mist lifts. When it does, everything is worth it.',
      content: sharedContent.bolu.en,
      location: 'Yedigöller, Bolu, Turkey',
      tags: ['bolu', 'turkey', 'autumn', 'lake', 'mist'],
    },
    de: {
      title: 'Herbst an den Bolu-Seen: Die Schönheit des Verlorenseins',
      excerpt: 'Eine Warnung für Yedigöller Anfang November: sehr früh ankommen. Am See sitzen, bis der Morgennebel sich hebt. Dann ist alles es wert.',
      content: sharedContent.bolu.de,
      location: 'Yedigöller, Bolu, Türkei',
      tags: ['bolu', 'türkei', 'herbst', 'see', 'nebel'],
    },
    fr: {
      title: 'Automne aux lacs de Bolu : la beauté de se perdre',
      excerpt: 'Un avertissement pour Yedigöller début novembre : arrivez très tôt. Attendez au bord du lac que la brume matinale se lève. Quand elle part, tout en vaut la peine.',
      content: sharedContent.bolu.fr,
      location: 'Yedigöller, Bolu, Turquie',
      tags: ['bolu', 'turquie', 'automne', 'lac', 'brume'],
    },
  },
};
