# 🧠 Quiz Master - React Challenge

Aplikasi kuis interaktif berbasis React.js yang terintegrasi dengan **Open Trivia Database (OpenTDB)**. Proyek ini dibangun untuk mendemonstrasikan manajemen state tingkat lanjut, integrasi API, dan fitur persistensi data (Resume Kuis).

---

## ✨ Fitur Utama (Kriteria Tugas)

Aplikasi ini telah memenuhi seluruh kriteria penilaian sebagai berikut:

-   **[A] Fitur Login**: Sistem masuk menggunakan Username dan Password.
-   **[B & C] Integrasi API**: Pengambilan data soal secara dinamis dari OpenTDB (10 soal, tipe Pilihan Ganda).
-   **[D] Indikator Progres**: Menampilkan nomor soal yang sedang dikerjakan dari total soal (contoh: 1 / 10).
-   **[E] Sistem Timer**: Penghitung waktu mundur yang interaktif dengan peringatan visual saat waktu hampir habis.
-   **[F] Navigasi Cepat**: Satu halaman hanya menampilkan satu soal. Aplikasi otomatis berpindah ke soal berikutnya setelah jawaban dipilih.
-   **[G] Ringkasan Hasil**: Menampilkan statistik lengkap (Benar, Salah, dan Jumlah Dijawab) setelah kuis selesai atau waktu habis.
-   **[H] Mekanisme Resume (Nilai Plus)**: Menggunakan `localStorage` untuk menyimpan progres kuis. Jika browser tertutup atau di-refresh, kuis akan berlanjut dari posisi terakhir (soal, jawaban, dan timer tetap tersimpan).

---

## 🛠️ Teknologi yang Digunakan

-   **Library Utama**: React.js (Hooks: `useState`, `useEffect`, `useMemo`, `useCallback`)
-   **Styling**: Clean CSS3 dengan Variabel CSS & Animasi Shimmer.
-   **Data Management**: Custom Hooks untuk persistensi `localStorage`.
-   **API**: [Open Trivia Database API](https://opentdb.com/).

---

## 📂 Struktur Folder

```text
src/
├── components/          # Komponen UI (Login, Quiz, Result, StartMenu, Skeleton)
├── hooks/               # Custom Logic (useQuizPersistence untuk LocalStorage)
├── utils/               # Helper functions (HTML Entity Decoder)
├── styles/              # Global CSS & Clean Code Styling
└── App.js               # Root Component & State Management Utama

# 🧠 Quiz Master - React Challenge

Aplikasi kuis interaktif berbasis React.js yang terintegrasi dengan **Open Trivia Database (OpenTDB)**. Proyek ini dibangun untuk mendemonstrasikan manajemen state tingkat lanjut, integrasi API, dan fitur persistensi data (Resume Kuis).

---

## ✨ Fitur Utama (Kriteria Tugas)

Aplikasi ini telah memenuhi seluruh kriteria penilaian sebagai berikut:

-   **[A] Fitur Login**: Sistem masuk menggunakan Username dan Password.
-   **[B & C] Integrasi API**: Pengambilan data soal secara dinamis dari OpenTDB (10 soal, tipe Pilihan Ganda).
-   **[D] Indikator Progres**: Menampilkan nomor soal yang sedang dikerjakan dari total soal (contoh: 1 / 10).
-   **[E] Sistem Timer**: Penghitung waktu mundur yang interaktif dengan peringatan visual saat waktu hampir habis.
-   **[F] Navigasi Cepat**: Satu halaman hanya menampilkan satu soal. Aplikasi otomatis berpindah ke soal berikutnya setelah jawaban dipilih.
-   **[G] Ringkasan Hasil**: Menampilkan statistik lengkap (Benar, Salah, dan Jumlah Dijawab) setelah kuis selesai atau waktu habis.
-   **[H] Mekanisme Resume (Nilai Plus)**: Menggunakan `localStorage` untuk menyimpan progres kuis. Jika browser tertutup atau di-refresh, kuis akan berlanjut dari posisi terakhir (soal, jawaban, dan timer tetap tersimpan).

---

## 🛠️ Teknologi yang Digunakan

-   **Library Utama**: React.js (Hooks: `useState`, `useEffect`, `useMemo`, `useCallback`)
-   **Styling**: Clean CSS3 dengan Variabel CSS & Animasi Shimmer.
-   **Data Management**: Custom Hooks untuk persistensi `localStorage`.
-   **API**: [Open Trivia Database API](https://opentdb.com/).

---

## 📂 Struktur Folder

```text
src/
├── components/          # Komponen UI (Login, Quiz, Result, StartMenu, Skeleton)
├── hooks/               # Custom Logic (useQuizPersistence untuk LocalStorage)
├── utils/               # Helper functions (HTML Entity Decoder)
├── styles/              # Global CSS & Clean Code Styling
└── App.js               # Root Component & State Management Utama
🚀 Cara Menjalankan Proyek
Clone Repositori

Bash
git clone [https://github.com/username-kamu/nama-repo.git](https://github.com/username-kamu/nama-repo.git)
Instal Dependensi

Bash
npm install
Jalankan Aplikasi

Bash
npm start
Aplikasi akan berjalan di http://localhost:3000.
