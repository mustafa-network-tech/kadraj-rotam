/**
 * Doğrulanmış Unsplash görselleri — her rota yalnızca kendi temasına ait ID'leri kullanır.
 * URL formatı: ?auto=format&fit=crop&w=&q=80
 */
export const U = (id: string, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  // Gökçeada — Ege adası, kıyı, gün batımı (Gökçeada, Çanakkale)
  gokcada:        U('1629797349750-eaae8927ec06'),
  gokcadaG1:      U('1629797349750-eaae8927ec06', 1200),
  gokcadaG2:      U('1692528613663-0e2a9d05d067', 1200),
  gokcadaG3:      U('1501854140801-50d01698950b', 1200),

  // Bozcaada — bağlar, Ege kıyısı, kale silueti
  bozcaada:       U('1533105079780-92b9be482077'),
  bozcaadaG1:     U('1570177491571-318decb146b9', 1200),
  bozcaadaG2:     U('1740557680377-0cd884b462d3', 1200),
  bozcaadaG3:     U('1578662996442-48f60103fc96', 1200),

  // Kapadokya — sıcak hava balonları, peri bacaları
  kapadokya:      U('1541787631551-3f9654ec5307'),
  kapadokyaG1:    U('1621013094723-3b28ed536b7e', 1200),
  kapadokyaG2:    U('1541787631551-3f9654ec5307', 1200),
  kapadokyaG3:    U('1674941104806-e8a533c432f0', 1200),

  // Bolu Gölleri — orman, göl, sis
  bolu:           U('1472791108553-c9405341e398'),
  boluG1:         U('1500534314209-a25ddb2bd429', 1200),
  boluG2:         U('1447752875215-b2761acb3c5d', 1200),
  boluG3:         U('1506905925346-21bda4d32df4', 1200),

  // Kaz Dağları — orman, dağ, sis
  kaz:            U('1511497584788-876760111969'),
  kazG1:          U('1447752875215-b2761acb3c5d', 1200),
  kazG2:          U('1500534314209-a25ddb2bd429', 1200),

  // Himalaya — Everest, karlı zirveler
  himalaya:       U('1574007768454-75b5d20f6454'),
  himalayaG1:     U('1778003586047-69c68f764af5', 1200),

  // Patagonia — Torres del Paine, dramatik dağlar
  patagonia:      U('1732465264924-a1ba1aed26d1'),
  patagoniaG1:    U('1667003703447-753b2c85c483', 1200),

  // İzlanda — kuzey ışıkları
  izlanda:        U('1473711409856-39138e48cb9b'),
  izlandaG1:      U('1520769669658-f07657f5a307', 1200),

  // Norveç — Preikestolen, fiyord
  norvec:         U('1586635937724-990c04ba4056'),
  norvecG1:       U('1662019195281-b3e5aa5c1207', 1200),

  // Amazon — tropikal yağmur ormanı
  amazon:         U('1699575678956-aefa714b67f0'),
  amazonG1:       U('1609428443430-e082b7e657c4', 1200),

  // Mısır Piramitleri — Gize, çöl
  piramit:        U('1503177119275-0aa32b3a9368'),
  piramitG1:      U('1568322445389-f64ac2515020', 1200),

  // Altay — Moğol bozkırı, kartal avcısı
  altay:          U('1742201876722-85a042294575'),
  altayG1:        U('1742201876634-94ac20075dc6', 1200),

  // Çin Seddi — Mutianyu suru
  cinSeddi:       U('1528289504374-36139e80ef6f'),
  cinSeddiG1:     U('1508804185872-d7badad00f7d', 1200),
} as const;
