/**
 * MEDIA LOKAL
 * -----------------------------------------------------------------------------
 * Foto diambil otomatis dari folder:
 *
 *   src/assets/conten/<nama-folder>/
 *
 * Nama folder dicocokkan dengan `id` destinasi tanpa membedakan huruf besar/kecil,
 * dan garis bawah / spasi dianggap sama dengan tanda hubung. Contoh:
 *
 *   Gili_nanggu  ->  id: 'gili-nanggu'
 *
 * Aturan isi folder:
 *  - Galeri          : semua foto di folder tersebut, urut sesuai nama file
 *  - Foto kartu      : `coverPhoto` pada data destinasi (nama file tanpa ekstensi,
 *                      mis. '4'). Jika kosong: file `cover.*`, lalu `hero.*`, lalu foto pertama
 *  - Foto hero/detail: `heroPhoto` pada data destinasi. Jika kosong: file `hero.*`,
 *                      lalu foto kartu
 *
 * Format foto: jpg, jpeg, png, webp, avif. Tidak perlu mengedit file ini saat
 * menambah atau mengganti foto, cukup taruh filenya di folder yang benar.
 */
const imageFiles = import.meta.glob(
  '../assets/conten/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, import: 'default' },
);

// "Gili_nanggu" / "Gili Nanggu" / "gili-nanggu"  ->  "gili-nanggu"
const slugify = (text) => text.trim().toLowerCase().replace(/[\s_]+/g, '-');

// Kelompokkan foto per folder destinasi, urut alami (foto2 sebelum foto10)
function groupByDestination(files) {
  const groups = {};
  for (const [path, url] of Object.entries(files)) {
    const match = path.match(/conten\/([^/]+)\/([^/]+)$/);
    if (!match) continue;
    const [, folder, file] = match;
    (groups[slugify(folder)] ??= []).push({ file, url });
  }
  for (const list of Object.values(groups)) {
    list.sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }));
  }
  return groups;
}

const localImages = groupByDestination(imageFiles);

function getLocalMedia({ id, coverPhoto, heroPhoto }) {
  const images = localImages[slugify(id)] ?? [];
  // Cari foto berdasarkan nama file tanpa ekstensi ("4" cocok dengan 4.jpg / 4.JPG)
  const named = (base) =>
    base
      ? images.find((item) => item.file.replace(/\.[^.]+$/, '').toLowerCase() === String(base).toLowerCase())
        ?.url
      : undefined;

  const image = named(coverPhoto) ?? named('cover') ?? named('hero') ?? images[0]?.url;
  const heroImage = named(heroPhoto) ?? named('hero') ?? image;

  return { image, heroImage, gallery: images.map((item) => item.url) };
}

/**
 * DATA DESTINASI
 * -----------------------------------------------------------------------------
 * Data yang sama untuk semua gili ada di `common`; tiap gili hanya perlu `id`,
 * `name`, dan `description`. Isi field per gili jika ingin berbeda (misalnya
 * `duration`, `highlights`, atau `rating` bila sudah ada ulasan nyata).
 *
 * TODO: periksa kembali teks di bawah dan sesuaikan dengan paket tour Anda.
 */
const common = {
  country: 'Indonesia',
  duration: '1 Hari',
  accommodation: 'Island hopping privat',
  activities: ['Snorkeling', 'Island Hopping', 'Pantai'],
  location: 'Sekotong, Lombok Barat',
  highlights: [
    'Island hopping privat dengan kapal',
    'Snorkeling di perairan jernih (alat snorkeling disediakan)',
    'Antar-jemput yang aman dan nyaman',
    'Rute dan jadwal bisa disesuaikan dengan kebutuhan Anda',
  ],
  bestTimeToVisit: 'Hubungi kami untuk jadwal terbaik',
  travelTips: [
    'Gunakan tabir surya yang ramah terumbu karang',
    'Bawa pakaian ganti dan handuk',
    'Hubungi kami untuk menyesuaikan rute dan jadwal',
  ],
  category: 'Lombok Barat',
};

const baseDestinations = [
  {
    ...common,
    id: 'gili-asahan',
    name: 'Gili Asahan',
    description:
      'Gili Asahan adalah salah satu gili eksotis di Lombok Barat yang bisa dijelajahi lewat layanan island hopping privat Nusa Gili Express, lengkap dengan kapal, alat snorkeling, dan antar-jemput.',
  },
  {
    ...common,
    id: 'gili-gede',
    name: 'Gili Gede',
    description:
      'Gili Gede adalah salah satu gili di Lombok Barat yang bisa dikunjungi dalam perjalanan island hopping privat Nusa Gili Express, lengkap dengan kapal, alat snorkeling, dan antar-jemput.',
  },
  {
    ...common,
    id: 'gili-kedis',
    name: 'Gili Kedis',
    description:
      'Gili Kedis adalah pulau kecil eksotis di Lombok Barat yang bisa dikunjungi lewat island hopping privat Nusa Gili Express, lengkap dengan kapal, alat snorkeling, dan antar-jemput.',
  },
  {
    ...common,
    id: 'gili-layar',
    name: 'Gili Layar',
    description:
      'Gili Layar adalah salah satu gili eksotis di Lombok Barat yang bisa dijelajahi lewat island hopping privat Nusa Gili Express, lengkap dengan kapal, alat snorkeling, dan antar-jemput.',
  },
  {
    ...common,
    id: 'gili-nanggu',
    name: 'Gili Nanggu',
    description:
      'Gili Nanggu adalah salah satu gili eksotis di Lombok Barat yang bisa dijelajahi lewat island hopping privat Nusa Gili Express, lengkap dengan kapal, alat snorkeling, dan antar-jemput.',
  },
  {
    ...common,
    id: 'gili-sudak',
    name: 'Gili Sudak',
    description:
      'Gili Sudak adalah salah satu gili eksotis di Lombok Barat yang bisa dijelajahi lewat island hopping privat Nusa Gili Express, lengkap dengan kapal, alat snorkeling, dan antar-jemput.',
  },
  {
    ...common,
    id: 'gili-tangkong',
    name: 'Gili Tangkong',
    coverPhoto: '4',
    description:
      'Gili Tangkong adalah salah satu gili eksotis di Lombok Barat yang bisa dijelajahi lewat island hopping privat Nusa Gili Express, lengkap dengan kapal, alat snorkeling, dan antar-jemput.',
  },
];

// Gabungkan data teks dengan foto dari folder lokal
export const destinations = baseDestinations.map((destination) => ({
  ...destination,
  ...getLocalMedia(destination),
}));

export const getDestinationById = (id) => destinations.find((d) => d.id === id);

export const getDestinationsByCategory = (category) => {
  if (!category || category === 'All') return destinations;
  return destinations.filter((d) => d.category === category);
};

// Dibuat otomatis dari data. Jika hanya ada satu kategori, filter tidak diperlukan.
const categories = [...new Set(destinations.map((d) => d.category))];
export const destinationCategories = categories.length > 1 ? ['All', ...categories] : ['All'];

// Ubah parameter lebar (w=) hanya untuk URL remote (mis. Unsplash).
// File lokal dikembalikan apa adanya.
const sized = (url, width) =>
  url && /^https?:\/\//.test(url) ? url.replace(/w=\d+/, `w=${width}`) : url;
const photoKey = (url) => url.split('?')[0];

/**
 * Daftar slide foto untuk satu destinasi: foto hero lalu galeri.
 * Foto yang sama (hero & galeri) hanya ditampilkan sekali.
 */
export function getDestinationMedia(destination) {
  const seen = new Set();

  return [destination.heroImage, ...(destination.gallery ?? [])]
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
}
