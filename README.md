# 🚗 CAR LAB STUDIO: The Next Car Design

**CAR LAB STUDIO: The Next Car Design** adalah game simulasi bisnis otomotif retro-futuristik berbasis web di mana Anda berperan sebagai perancang mobil profesional sekaligus pemilik studio modifikasi. Rancang berbagai jenis kendaraan, pasang komponen realistik, dan lakukan negosiasi harga menggunakan perintah Command Prompt (CMD) retro untuk menjual mahakarya Anda kepada berbagai karakter AI Buyer yang unik.

*   **URL Permainan**: [https://kansat946.github.io/The-Next-Car-Design/](https://kansat946.github.io/The-Next-Car-Design/)
*   **Repository GitHub**: [https://github.com/kansat946/The-Next-Car-Design](https://github.com/kansat946/The-Next-Car-Design)

---

## 🌟 Fitur Utama & Pembaruan Terbaru

### 1. 🌐 Sistem Bahasa & Akun Lokal (Autosave)
*   **Bahasa Ganda**: Pilihan bahasa penuh antara **Bahasa Indonesia (🇮🇩)** dan **Bahasa Inggris (🇬🇧)** saat memulai game.
*   **Profil Studio**: Daftarkan nama pengguna (*Username* default: `kansat946`) dan nama studio Anda untuk memulai petualangan otomotif.
*   **Autosave**: Progres kas, reputasi, slot rancangan, dan data studio secara otomatis tersimpan di `localStorage` agar tidak hilang ketika tab ditutup atau direfresh.

### 2. 🔄 Rotasi Studio Perspektif 720°
*   Rancang mobil secara interaktif di studio visual dengan dukungan **rotasi horizontal & vertikal hingga 720 derajat** menggunakan tombol kontrol arah atau drag mouse langsung pada canvas.
*   Tombol reset sekali-klik untuk mengembalikan rotasi mobil ke tampilan samping standar.

### 3. ℹ️ Tooltip Deskripsi Komponen Dinamis
*   Tahan kursor (*hover*) selama 1.5 detik atau lakukan **klik kanan** pada kartu komponen di menu bawah untuk memunculkan tooltip detail spesifikasi.
*   Menampilkan nama, harga, deskripsi komponen, serta indikator perubahan stat dinamis (warna hijau untuk efek positif, warna merah untuk efek negatif).

### 4. 🛢️ 9 Tipe Mesin Baru (Total 16 Komponen Mesin)
Kini studio mendukung pilihan mesin bervariasi dari dunia nyata:
*   *Mesin Diesel Turbo Inline-6* (untuk torsi truk/SUV tangguh)
*   *Mesin W16 Quad-Turbo* (kekuatan hypercar murni)
*   *Mesin Formula E Electric* (efisiensi dan akselerasi instan)
*   *Mesin Hidrogen Fuel-Cell* (bebas emisi ramah lingkungan)
*   *Mesin V10 Performance*, *V8 Diesel*, *Mesin 2-Tak Ringan*, hingga *Mesin Uap Antik*.

### 5. 🚘 4 Kategori Mobil Baru (+16 Varian Unik)
Katalog dealer kini mencakup total 20 tipe mobil dengan varian (*Cheapest, Best Seller, Most Expensive, Classic*):
*   **EV Niaga / EV Pickup** (mobil listrik niaga logistik)
*   **Pickup Bensin Premium** (tangguh, fleksibel, bermesin bensin konvensional)
*   **Kolektor Langka / Rare Classic** (nilai investasi dan flex yang sangat tinggi)
*   **Supercar EV** (hypercar listrik bertenaga buas)

### 6. ⏸️ Opsi Pause Game (AFK Friendly)
*   Menambahkan tombol **`PAUSE / RESUME`** di status `GAME SPEED` pada HUD header.
*   Saat di-pause, hitungan mundur pesanan khusus (*Special Orders*) dan acakan kondisi pasar (*Market Events*) akan dihentikan secara penuh. Reputasi Anda aman dari pengurangan bintang saat tidak online atau sedang tidak memegang kendali game.

### 7. 📊 Persentase Reputasi di Dashboard
*   Tampilan rank kini dilengkapi indikator **persentase reputasi** yang presisi di samping deretan bintang HUD (misal: `80%`), dihitung secara dinamis berdasarkan tier Anda saat ini atau tantangan *Placement Challenge*.

---

## 🏆 Sistem Rank & Progresi (Mobile Legends Style)

Sistem reputasi studio diukur melalui tingkatan **Rank**. Setiap tier reguler membutuhkan **10 Bintang** untuk naik kelas.

### Tingkatan Tier Rank:
1.  **Chassis Scrub** (Warrior)
2.  **Street Tuner** (Elite)
3.  **Pro Customizer** (Master)
4.  **Master Designer** (Grandmaster)
5.  **Elite Builder** (Epic)
6.  **Automotive Legend** (Legend/Mythic)
7.  **Mythic Immortal** (Rank Abadi / Tertinggi)

### 🌌 Tantangan Mythic Placement:
Setelah mencapai **Automotive Legend** dengan 10 Bintang, Anda harus melewati tantangan penempatan menuju **Mythic Immortal**:
*   Harus berhasil menjual rancangan mobil kepada **semua 7 jenis AI Buyer secara berturut-turut** tanpa kegagalan (tanpa buyer walkout atau jual rugi).
*   Jika gagal di tengah jalan, tantangan direset kembali dari 0/7.

---

## 👤 Profil AI Buyer & Preferensi

Setiap kali Anda menekan tombol "Luncurkan" untuk menjual mobil, sistem akan mengundi satu dari 7 AI Buyer dengan tingkat kesabaran (*Patience*) dan ketertarikan (*Likes & Hates*) yang bervariasi:

1.  **🤠 Bos Tambang (Hard)**: Suka ban besar, 4x4, winch, bumper kokoh. Benci warna pink/chrome, sayap, aksesoris estetika norak.
2.  **👔 Eksekutif Korporat (Medium)**: Suka sedan mewah, interior premium, warna netral (hitam/putih). Benci roda kotak, sirine, modifikasi jalanan konyol.
3.  **🎮 Sultan Millennial (Easy)**: Suka neon underglow, cat chrome, pendorong roket, roda aneh, sirine. Benci desain standar membosankan.
4.  **👴 Kolektor Tua (Hard)**: Suka sasis klasik, part orisinal/retro. Benci komponen futuristik (laser) dan modifikasi perusak bodi klasik.
5.  **🤡 Sirkus Manager (Easy)**: Suka roda kotak/pizza, sayap malaikat, baling-baling, kombinasi warna tabrakan. Benci mobil komuter polos.
6.  **👩 Ibu Komplek (Medium)**: Suka hatchback, MPV, solar panel (eco-friendly), rem/bumper aman. Benci knalpot bising, laser, ceper ekstrem.
7.  **🏁 Pembalap Liar (Medium)**: Suka sports coupe, spoiler serat karbon, nitrous/roket, knalpot bertenaga, sasis ceper. Benci sasis lambat, roda sircus, berat berlebih.

---

## 💻 Panduan Perintah Terminal CMD Negosiasi

Saat berhadapan dengan pembeli di layar negosiasi, Anda dapat mengetikkan perintah di kolom input prompt CMD:

*   `/terima` — Menyetujui harga penawaran saat ini dari Buyer dan menyelesaikan transaksi.
*   `/tawar [jumlah]` — Mengajukan penawaran harga tandingan (contoh: `/tawar 68000`).
*   `/rayu` — Mencoba membujuk pembeli berdasarkan kesesuaian komponen terpasang untuk menaikkan minat mereka.
*   `/lewati` — Membatalkan negosiasi secara damai dan mencari pembeli lain (GRATIS, tidak merusak win streak).

---

## 🛠️ Arsitektur Teknologi

Game ini dibangun secara mandiri tanpa library eksternal berat untuk menjaga keringanan akses:
*   **HTML5 & CSS3**: Menggunakan styling neon glassmorphism modern, animasi glitch, grid layout responsif.
*   **Vanilla JavaScript (ES6)**: Seluruh state logic game (autosave, modal, event listeners, algoritma negosiasi, dan visual positioning sasis) diproses menggunakan pure JavaScript tanpa framework tambahan.
