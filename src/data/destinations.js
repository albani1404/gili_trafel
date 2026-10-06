// TODO: ganti dengan video asli tiap destinasi (file .mp4 atau YouTube).
// Ini hanya video contoh supaya slide video bisa dicoba.
const SAMPLE_VIDEO = 'https://www.w3schools.com/html/mov_bbb.mp4';

export const destinations = [
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    badge: 'Most Popular',
    rating: 4.9,
    duration: '5 Days / 4 Nights',
    accommodation: 'Luxury Villa & Resort',
    activities: ['Snorkeling', 'Temple Tour', 'Surfing', 'Spa'],
    startingPrice: 899,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1600&q=80',
    videos: [
      // type: 'video' (mp4) atau 'youtube' (isi `id` dengan ID video YouTube)
      { type: 'video', src: SAMPLE_VIDEO, title: 'Bali highlights' },
    ],
    location: 'Bali, Indonesia',
    description: 'Bali adalah kartu pos yang hidup, sebuah surga di Indonesia yang terasa seperti mimpi. Nikmati sinar matahari di hamparan pasir putih halus, atau berinteraksi dengan makhluk-makhluk tropis saat Anda menyelam di sepanjang punggung terumbu karang atau bangkai kapal perang Perang Dunia II yang penuh warna.',
    highlights: [
      'Kunjungi Pura Tanah Lot yang ikonik saat matahari terbenam',
      'Jelajahi sawah terasering Tegallalang yang menakjubkan',
      'Berselancar di ombak kelas dunia di Uluwatu',
      'Nikmati perawatan spa tradisional Bali',
      'Jelajahi kehidupan malam Seminyak yang semarak'
    ],
    bestTimeToVisit: 'April hingga Oktober (musim kemarau)',
    travelTips: [
      'Hormati adat istiadat setempat dan berpakaian sopan saat mengunjungi pura',
      'Tawar-menawar di pasar lokal tetapi tetap sopan',
      'Gunakan aplikasi ride-hailing untuk transportasi yang nyaman',
      'Pesan akomodasi di muka selama musim ramai',
      'Coba warung lokal untuk masakan otentik Bali'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80',
      'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&q=80',
      'https://images.unsplash.com/photo-1570789210967-2cac24f43018?w=600&q=80'
    ],
    category: 'Bali'
  },
  {
    id: 'lombok',
    name: 'Lombok',
    country: 'Indonesia',
    badge: 'Hidden Gem',
    rating: 4.8,
    duration: '4 Days / 3 Nights',
    accommodation: 'Beachfront Resort',
    activities: ['Hiking', 'Beach', 'Waterfall', 'Surfing'],
    startingPrice: 749,
    image: 'https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?w=1600&q=80',
    location: 'Lombok, Indonesia',
    description: 'Lombok adalah tetangga Bali yang lebih tenang dan belum banyak dikembangkan. Dengan pantai-pantai yang masih alami, perairan sebening kristal, dan Gunung Rinjani yang megah, Lombok menawarkan pengalaman Indonesia yang otentik jauh dari keramaian.',
    highlights: [
      'Pendakian ke puncak Gunung Rinjani',
      'Bersantai di pantai pink Tangsi',
      'Mengunjungi desa tradisional Sasak',
      'Menjelajahi ombak yang sempurna di Kuta Lombok',
      'Menjelajahi keindahan Air Terjun Tiu Kelep'
    ],
    bestTimeToVisit: 'Mei hingga September (musim kemarau)',
    travelTips: [
      'Sewa skuter untuk menjelajahi pulau sesuai keinginan Anda',
      'Kunjungi pantai Selong Belanak untuk berselancar bagi pemula',
      'Pesan pendakian Gunung Rinjani melalui operator berlisensi',
      'Coba Ayam Taliwang, masakan khas Lombok',
      'Bawa uang tunai karena ATM seringkali jarang ada di daerah terpencil'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?w=600&q=80',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80',
      'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=600&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80'
    ],
    category: 'Lombok'
  },
  {
    id: 'nusa-penida',
    name: 'Nusa Penida',
    country: 'Indonesia',
    badge: 'Trending',
    rating: 4.9,
    duration: '3 Days / 2 Nights',
    accommodation: 'Cliffside Villa',
    activities: ['Snorkeling', 'Photography', 'Cliff Walk', 'Diving'],
    startingPrice: 599,
    image: 'https://images.unsplash.com/photo-1570789210967-2cac24f43018?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1570789210967-2cac24f43018?w=1600&q=80',
    location: 'Nusa Penida, Bali, Indonesia',
    description: 'Nusa Penida adalah pulau terpencil di tenggara Bali yang terkenal dengan garis pantai tebingnya yang dramatis, pantai-pantai yang masih alami, dan snorkeling kelas dunia dengan pari manta. Ini adalah keindahan alam tropis terbaik.',
    highlights: [
      'Berdiri di titik pandang Pantai Kelingking yang ikonik',
      'Berenang bersama pari manta di Manta Point',
      'Mengunjungi kolam infinity alami di Angel\'s Billabong',
      'Jelajahi lengkungan batu yang menakjubkan di Broken Beach',
      'Temukan keindahan bawah laut Crystal Bay'
    ],
    bestTimeToVisit: 'April hingga November',
    travelTips: [
      'Pesan fast boat dari Sanur untuk akses termudah',
      'Sewa sopir lokal karena jalanan bisa menantang',
      'Gunakan tabir surya yang ramah terumbu karang untuk perjalanan snorkeling',
      'Mulai lebih awal untuk menghindari keramaian di titik pandang populer',
      'Kenakan sepatu yang kokoh untuk berjalan di tebing'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1570789210967-2cac24f43018?w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80',
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80',
      'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&q=80'
    ],
    category: 'Bali'
  },
  {
    id: 'gili-trawangan',
    name: 'Gili Trawangan',
    country: 'Indonesia',
    badge: 'Island Paradise',
    rating: 4.7,
    duration: '4 Days / 3 Nights',
    accommodation: 'Beachfront Bungalow',
    activities: ['Diving', 'Snorkeling', 'Cycling', 'Sunset Cruise'],
    startingPrice: 699,
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&q=80',
    location: 'Gili Trawangan, Lombok, Indonesia',
    description: 'Gili Trawangan, pulau terbesar dari tiga Gili, adalah surga tanpa kendaraan bermotor di mana kereta kuda dan sepeda adalah alat transportasi utama. Perairan sebening kristal dan terumbu karang yang semarak menjadikannya impian bagi penyelam.',
    highlights: [
      'Menyelam bersama penyu di Turtle Point',
      'Menyaksikan matahari terbenam dari ayunan Gili T yang terkenal',
      'Bersepeda mengelilingi seluruh pulau dalam 2 jam',
      'Menikmati pesta di bar tepi pantai di sisi timur',
      'Snorkel the underwater statues'
    ],
    bestTimeToVisit: 'Mei hingga September',
    travelTips: [
      'Tidak ada kendaraan bermotor di pulau ini — sewa sepeda',
      'Pesan kursus menyelam di muka selama musim ramai',
      'Bawa uang tunai karena beberapa tempat tidak menerima kartu',
      'Kunjungi Gili Meno dan Gili Air untuk pengalaman yang lebih tenang',
      'Pasar malam menawarkan makanan lokal yang terjangkau'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80',
      'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=600&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80'
    ],
    category: 'Lombok'
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    badge: 'Luxury',
    rating: 5.0,
    duration: '6 Days / 5 Nights',
    accommodation: 'Overwater Villa',
    activities: ['Diving', 'Spa', 'Sunset Cruise', 'Snorkeling'],
    startingPrice: 2499,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80',
    videos: [
      // type: 'video' (mp4) atau 'youtube' (isi `id` dengan ID video YouTube)
      { type: 'video', src: SAMPLE_VIDEO, title: 'Maldives highlights' },
    ],
    location: 'Malé, Maldives',
    description: 'Maldives adalah destinasi tropis mewah utama. Dengan vila di atas air, pantai berpasir putih yang masih alami, dan perairan yang paling jernih di dunia, ini adalah lambang surga.',
    highlights: [
      'Menginap di vila di atas air yang ikonik',
      'Snorkeling dengan hiu paus di South Ari Atoll',
      'Menyaksikan pantai bioluminescent di malam hari',
      'Menikmati perawatan spa kelas dunia di atas laut',
      'Makan di restoran bawah air'
    ],
    bestTimeToVisit: 'November hingga April (musim kemarau)',
    travelTips: [
      'Pesan transfer resort (perahu cepat/seaplane) di muka',
      'Maldives adalah negara Muslim — hormati adat istiadat setempat',
      'Paket all-inclusive menawarkan nilai terbaik',
      'Kunjungi pulau lokal untuk budaya Maladewa yang otentik',
      'Bawa kamera tahan air untuk foto bawah air yang luar biasa'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80',
      'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80',
      'https://images.unsplash.com/photo-1578922746465-1da3dbac5986?w=600&q=80',
      'https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80'
    ],
    category: 'Maldives'
  },
  {
    id: 'raja-ampat',
    name: 'Raja Ampat',
    country: 'Indonesia',
    badge: 'Eco Paradise',
    rating: 4.9,
    duration: '5 Days / 4 Nights',
    accommodation: 'Eco Resort',
    activities: ['Diving', 'Kayaking', 'Bird Watching', 'Snorkeling'],
    startingPrice: 1899,
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=1600&q=80',
    videos: [
      // type: 'video' (mp4) atau 'youtube' (isi `id` dengan ID video YouTube)
      { type: 'video', src: SAMPLE_VIDEO, title: 'Raja Ampat highlights' },
    ],
    location: 'Raja Ampat, West Papua, Indonesia',
    description: 'Raja Ampat adalah permata mahkota keanekaragaman hayati laut. Kepulauan terpencil di Papua Barat ini memiliki ekosistem terumbu karang terkaya di dunia, dengan lebih dari 1.500 spesies ikan dan 600 spesies karang.',
    highlights: [
      'Menyelam di habitat laut paling beragam di dunia',
      'Kayak melalui laguna tersembunyi dan karst batu kapur',
      'Menemukan Wilson\'s bird-of-paradise yang langka',
      'Mendaki ke titik pandang Pianemo untuk pemandangan panorama',
      'Menyelam di atas terumbu karang yang masih asli'
    ],
    bestTimeToVisit: 'Oktober hingga April',
    travelTips: [
      'Pesan tiket pesawat ke Sorong jauh-jauh hari',
      'Beli izin masuk Raja Ampat Marine Park',
      'Bawa perlengkapan mandi yang ramah lingkungan — ini adalah area lindung',
      'Pilih homestay untuk pengalaman otentik',
      'Arus bawah laut bisa kuat — menyelamlah dengan pemandu berpengalaman'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600&q=80',
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80'
    ],
    category: 'Indonesia'
  },
  {
    id: 'komodo',
    name: 'Komodo',
    country: 'Indonesia',
    badge: 'Adventure',
    rating: 4.8,
    duration: '4 Days / 3 Nights',
    accommodation: 'Liveaboard & Resort',
    activities: ['Trekking', 'Diving', 'Snorkeling', 'Island Hopping'],
    startingPrice: 1299,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80',
    location: 'Taman Nasional Komodo, Indonesia',
    description: 'Taman Nasional Komodo adalah Situs Warisan Dunia UNESCO yang menjadi rumah bagi kadal komodo legendaris. Di luar para kadal, taman ini menawarkan pantai-pantai merah muda yang menakjubkan, snorkeling kelas dunia, dan lanskap vulkanik yang dramatis.',
    highlights: [
      'Melihat kadal komodo di habitat aslinya',
      'Bersantai di Pantai Pink yang terkenal',
      'Menyelam di salah satu situs selam terbaik di dunia',
      'Mendaki Pulau Padar untuk pemandangan yang menakjubkan',
      'Menyelam dengan pari manta di Manta Point'
    ],
    bestTimeToVisit: 'April hingga Desember',
    travelTips: [
      'Terbang ke Labuan Bajo sebagai pintu gerbang Anda ke Komodo',
      'Pesan liveaboard untuk pengalaman terbaik',
      'Selalu ikuti panduan ranger di sekitar kadal komodo',
      'Bawa sepatu hiking yang kuat untuk pendakian pulau',
      'Arus bawah laut bisa kuat — hanya penyelam berpengalaman yang boleh mencoba situs tertentu'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80',
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80',
      'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=600&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80'
    ],
    category: 'Indonesia'
  },
  {
    id: 'thailand',
    name: 'Thailand',
    country: 'Thailand',
    badge: 'Best Seller',
    rating: 4.8,
    duration: '5 Days / 4 Nights',
    accommodation: 'Beach Resort',
    activities: ['Island Hopping', 'Thai Cooking', 'Temple Tour', 'Snorkeling'],
    startingPrice: 799,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1600&q=80',
    location: 'Phuket & Krabi, Thailand',
    description: 'Thailand adalah destinasi pantai utama Asia Tenggara. Dari karst batu kapur Krabi hingga kehidupan malam Phuket yang semarak, Thailand menawarkan perpaduan sempurna antara petualangan, budaya, dan relaksasi.',
    highlights: [
      'Island hop melalui Kepulauan Phi Phi',
      'Jelajahi Maya Bay yang menakjubkan',
      'Kunjungi Big Buddha yang ikonik di Phuket',
      'Ikuti kelas memasak Thailand di Krabi',
      'Kayak melalui gua-gua batu kapur di Phang Nga Bay'
    ],
    bestTimeToVisit: 'November hingga Maret (musim kemarau sejuk)',
    travelTips: [
      'Kunjungi kuil dengan pakaian sopan — tutup bahu dan lutut',
      'Gunakan Grab (aplikasi ride-hailing) untuk transportasi yang nyaman',
      'Tawar harga di pasar dan tuk-tuk',
      'Coba makanan jalanan — aman dan enak',
      'Pesan feri dan penerbangan antar pulau di muka'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
      'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=600&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80'
    ],
    category: 'Thailand'
  }
];

export const getDestinationById = (id) => destinations.find(d => d.id === id);

export const getDestinationsByCategory = (category) => {
  if (!category || category === 'All') return destinations;
  return destinations.filter(d => d.category === category);
};

export const destinationCategories = ['All', 'Bali', 'Lombok', 'Indonesia', 'Maldives', 'Thailand'];

// Ubah parameter lebar (w=) pada URL Unsplash
const sized = (url, width) => url.replace(/w=\d+/, `w=${width}`);
const photoKey = (url) => url.split('?')[0];

/**
 * Daftar slide untuk satu destinasi: foto hero, video (jika ada), lalu galeri.
 * Foto yang sama (hero & galeri) hanya ditampilkan sekali.
 */
export function getDestinationMedia(destination) {
  const seen = new Set();
  const images = [destination.heroImage, ...(destination.gallery ?? [])]
    .filter(Boolean)
    .filter((url) => {
      const key = photoKey(url);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((url, i) => ({
      type: 'image',
      src: sized(url, 1400),
      thumb: sized(url, 240),
      alt: `${destination.name}, photo ${i + 1}`,
    }));

  const videos = (destination.videos ?? []).map((video) => {
    const poster = video.poster ?? sized(destination.heroImage, 1400);
    return {
      ...video,
      type: video.type ?? 'video',
      poster,
      thumb: sized(poster, 240),
      alt: video.title ?? `${destination.name} video`,
    };
  });

  return [...images.slice(0, 1), ...videos, ...images.slice(1)];
}
