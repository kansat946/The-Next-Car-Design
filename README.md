# THE NEXT CAR DESIGN — Updated Game Design Specification

Dokumen ini mencantumkan detail konsep game yang telah diperbarui dan disepakati, menggantikan sistem level linear dengan sistem Rank & Reputasi dinamis, katalog dealer mobil, krisis/tren pasar, pesanan khusus, dan daftar lengkap 7 AI Buyer.

---

## 🏆 1. Sistem Rank & Bintang (Mobile Legends Style)

Sistem progresi pemain diukur melalui tingkatan **Rank**. Setiap tier membutuhkan **10 Bintang** untuk naik ke tier berikutnya.

### Tingkatan Tier Rank:
1.  **Chassis Scrub** (Warrior)
2.  **Street Tuner** (Elite)
3.  **Pro Customizer** (Master)
4.  **Master Designer** (Grandmaster)
5.  **Elite Builder** (Epic)
6.  **Automotive Legend** (Legend/Mythic)
7.  **Mythic Immortal** (Rank Abadi / Tertinggi)

### Mekanisme Bintang:
*   **Transaksi Normal (Sukses/Gagal)**:
    *   **Sukses Deal (Menjual dengan profit > 0)**: +1 Bintang.
    *   **Gagal Deal (Buyer Walkout atau Jual Rugi)**: -1 Bintang.
*   **Streak System**:
    *   **Win Streak**: Berhasil melakukan penjualan sukses beruntun (3 kali berturut-turut) memberikan bonus **+3 Bintang**.
    *   **Lose Streak**: Mengalami kegagalan penjualan beruntun (2 kali berturut-turut) memotong **-2 Bintang**.
*   **Reroll / Lewati Buyer (`/lewati`)**: Bersifat **GRATIS** dan tidak mempengaruhi jumlah bintang atau merusak win streak (karena transaksi ditolak sebelum resmi dimulai).

### 🌌 Tantangan Mythic Placement (Penempatan) menuju Mythic Immortal:
Setelah mencapai **Automotive Legend** dengan 10 Bintang, untuk masuk ke rank abadi **Mythic Immortal**, pemain harus melewati tantangan khusus:
*   Pemain masuk ke fase *Placement*.
*   **Misi**: Harus berhasil menjual mobil kepada **semua 7 jenis AI Buyer secara berturut-turut** tanpa kegagalan sekalipun.
*   Jika salah satu buyer menolak/walkout di tengah jalan, tantangan gagal dan harus diulang dari awal fase penempatan.
*   Jika berhasil, pemain mencapai **Mythic Immortal** yang bersifat abadi (tidak bisa turun rank lagi).

---

## 🚗 2. Katalog Dealer Mobil & Workspace

*   **Katalog Mobil**: Berisi **80 mobil** (20 tipe × 4 varian: *Paling Murah, Paling Laris, Paling Mahal, Klasik*).
*   **Harga Mobil**: Semua sasis dasar di katalog berstatus **100% GRATIS**.
*   **Workspace**:
    *   Tersedia **3 Slot Workspace**. Pemain bisa merakit hingga 3 mobil berbeda secara paralel.
    *   Komponen modifikasi dibeli menggunakan uang pemain ($300 s/d $10,000).
    *   Jika pemain mengganti sasis dasar di tengah jalan pada slot aktif, seluruh komponen yang sudah dibeli pada slot tersebut akan **hangus** (uang hilang).

---

## 👤 3. Karakter 7 AI Buyer (Sistem Roll Dinamis)

Setiap meluncurkan mobil, salah satu dari **7 AI Buyer** ini akan terpilih secara acak dengan tingkat kesulitan (*Patience/Kesabaran*) dan profil ketertarikan (*Likes & Hates*) yang dinamis:

1.  **🤠 Bos Tambang (Hard)**
    *   *Deskripsi*: Keras, pragmatis, hanya peduli dengan ketahanan dan fungsi kerja nyata.
    *   *Likes*: Ban monster/rantai tank, sasis 4x4/pickup, bumper penabrak, ground clearance tinggi.
    *   *Hates*: Cat pink/chrome, sayap malaikat, roket pendorong, aksesoris estetika percuma.
2.  **👔 Eksekutif Korporat (Medium)**
    *   *Deskripsi*: Kaku, elitis, mengedepankan prestise, kenyamanan, dan penampilan profesional.
    *   *Likes*: Sedan mewah, interior premium, warna hitam/putih, teknologi laser/solar panel.
    *   *Hates*: Roda kotak, modifikasi konyol/norak, sirine polisi, cat mencolok.
3.  **🎮 Sultan Millennial (Easy)**
    *   *Deskripsi*: Impulsif, suka viralitas, aktif di media sosial, dan menyukai keunikan ekstrim.
    *   *Likes*: Desain eksentrik, cat neon/chrome, roket pendorong, roda pizza/kotak, sirine polisi.
    *   *Hates*: Warna netral (hitam/abu-abu), desain orisinal membosankan.
4.  **👴 Kolektor Tua (Hard)**
    *   *Deskripsi*: Sangat teliti, menghargai orisinalitas, sejarah otomotif, dan pengerjaan vintage.
    *   *Likes*: Mobil klasik, komponen retro (cerobong asap klasik, setir eksternal), orisinalitas tinggi.
    *   *Hates*: Komponen futuristik (laser), modifikasi berlebihan yang merusak sasis asli.
5.  **🤡 Sirkus Manager (Easy)**
    *   *Deskripsi*: Penuh kejutan, tidak logis, semakin aneh rancangan mobilnya, semakin dia menyukainya.
    *   *Likes*: Roda kotak, roda pizza, baling-baling helikopter, sayap malaikat, kombinasi warna tabrakan.
    *   *Hates*: Mobil keluarga standar yang membosankan.
6.  **👩 Ibu Komplek / Sosialita (Medium)**
    *   *Deskripsi*: Peduli keselamatan keluarga, kepraktisan harian, keramahan lingkungan, dan ruang bagasi.
    *   *Likes*: Hatchback/MPV, solar panel (ramah lingkungan), rem/bumper aman, warna putih/silver.
    *   *Hates*: Knalpot roket berisik, meriam laser, sasis ceper, modifikasi tidak aman untuk anak.
7.  **🏁 Pembalap Liar / Anak Senja (Medium)**
    *   *Deskripsi*: Terobsesi dengan kecepatan murni, performa drift, gaya jalanan, dan estetika balap liar.
    *   *Likes*: Coupe/Sports car, spoiler serat karbon, roket pendorong, knalpot bertenaga, sasis ceper.
    *   *Hates*: Armor berat, roda sirkus (kotak/pizza), mobil lambat (MPV/Kei car).

---

## ✉️ 4. Pesanan Khusus (Special Order)

Sesekali, order khusus akan masuk ke terminal pemain sebagai misi sampingan:
*   **Kriteria Order**: Pembeli meminta spesifikasi khusus (contoh: *"Butuh SUV dengan Kekuatan Tabrakan > 80 dan warna hijau"*).
*   **Batasan Waktu**: Ada timer hitung mundur (misal 5 menit) untuk menyelesaikan dan mengirim desain.
*   **Konsekuensi**:
    *   **Sukses**: Hadiah uang tunai melimpah dan bonus reputasi.
    *   **Gagal / Waktu Habis**: **TIDAK akan menurunkan rank** (aman dari pengurangan bintang).

---

## 📈 5. Sistem Event Pasar (Dinamis)

Event pasar akan muncul secara acak melalui pengumuman berita di layar/terminal:
1.  **Tren Pasar (Market Trend)**:
    *   Jenis mobil tertentu (misal: *EV* atau *Drift*) mengalami lonjakan minat.
    *   Harga jual akhir otomatis naik **+20%**.
2.  **Krisis Pasar (Market Crash)**:
    *   Jenis mobil tertentu mengalami penurunan minat.
    *   Harga jual akhir turun secara acak.

---

## 💸 6. Aturan Kebangkrutan & Autosave

*   **Kebangkrutan (Bankruptcy)**:
    *   Jika uang pemain berkurang hingga di bawah **$5,000** dan tidak ada mobil yang bernilai jual di workspace, pemain dinyatakan bangkrut.
    *   Pemain mendapat bantuan dana talangan darurat sebesar **$50,000** tetapi dikenakan sanksi **kehilangan 2 bintang**.
*   **Penyimpanan Otomatis (Autosave)**:
    *   Setiap kali transaksi sukses, kegagalan, upgrade rank, atau pembelian komponen, game akan otomatis menyimpan status pemain (Uang, Rank, Bintang, Win Streak, isi Workspace) ke `localStorage` agar tidak hilang ketika browser direfresh.

---

## 💻 7. Tampilan Negosiasi CMD Terminal (Bahasa Indonesia)

Layar negosiasi berupa antarmuka teks ala command prompt retro hitam-hijau dengan log berbahasa Indonesia.

### Contoh Alur Terminal:
```bash
> MENGHUBUNGKAN KE DATABASE BUYER... BERHASIL!
> MENCARI BUYER COCOK... BERHASIL MEMILIH BUYER!

============================================================
[INFO BUYER]
Nama        : Bos Tambang (Atribut: Keras Kepala)
Kesabaran   : [■■■□□] (Sedang)
Suka        : [Ban Besar, 4x4, Bumper Duri]
Benci       : [Cat Pink, Sayap Malaikat]
============================================================
PENAWARAN AWAL BUYER: $55,000
============================================================

Ketik perintah Anda atau pilih tombol di bawah:
> /terima            (Menyetujui harga $55,000)
> /tawar [harga]     (Melakukan counter-offer, misal: /tawar 70000)
> /rayu              (Membujuk buyer menggunakan argumen komponen)
> /lewati            (Menolak buyer saat ini dan cari buyer lain - GRATIS)

Input Command: > 
```

