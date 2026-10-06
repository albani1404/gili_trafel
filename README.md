# Nusa Gili Express

Website company profile untuk **Nusa Gili Express**, layanan travel spesialis *island hopping* privat yang mengajak wisatawan menjelajahi gili eksotis di Lombok Barat seperti Gili Nanggu, Sudak, dan Kedis, lengkap dengan kapal, alat snorkeling, dan antar-jemput yang aman dan nyaman.

Dibangun dengan **React**, **Vite**, dan **Tailwind CSS v4**.

---

## Fitur

- **Halaman Home** dengan hero slider otomatis (tombol sebelumnya/berikutnya, indikator, dan jeda/putar).
- **Daftar destinasi** dengan kartu berisi foto, rating, durasi, aktivitas, dan harga mulai dari.
- **Filter destinasi** berdasarkan wilayah, lengkap dengan jumlah hasil.
- **Halaman detail destinasi** untuk informasi lebih lengkap tiap destinasi.
- **Form kontak** dengan tombol *Enquire* pada kartu destinasi yang memilih destinasi secara otomatis di form.
- **Navigasi** dengan penanda menu aktif sesuai bagian yang sedang dilihat, serta menu mobile.
- **Responsif**: nyaman dibuka di ponsel, tablet, maupun desktop.
- **Aksesibel**: tautan *skip to content*, label ARIA, fokus keyboard yang jelas, dan menghormati pengaturan `prefers-reduced-motion`.

## Tampilan

**Daftar destinasi**: kartu dengan foto, rating, durasi, aktivitas, dan harga, lengkap dengan filter wilayah.


![Home](src/assets/screnshot/home.png)

![Destinasi](src/assets/screnshot/destinasi.png)

![Kontak](src/assets/screnshot/kontak.png)

---

## Teknologi

| Kebutuhan | Teknologi |
| --- | --- |
| Framework UI | React 19 |
| Build tool | Vite |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | React Router |
| Ikon | Lucide React |
| Linter | Oxlint |
| Font | Plus Jakarta Sans |

## Memulai

### Prasyarat

- [Node.js](https://nodejs.org/) versi **20.19 atau lebih baru** (disarankan LTS terbaru)
- npm (sudah termasuk saat menginstal Node.js)

### Instalasi

```bash
# masuk ke folder proyek
cd frontend

# pasang dependency
npm install

# jalankan server pengembangan
npm run dev
```

Buka alamat yang tampil di terminal (biasanya `http://localhost:5173`).

### Perintah yang tersedia

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan dengan hot reload |
| `npm run build` | Membuat build produksi di folder `dist/` |
| `npm run preview` | Menjalankan hasil build secara lokal untuk dicek |
| `npm run lint` | Memeriksa kode dengan Oxlint |