# 🚗 CAR LAB STUDIO: The Next Car Design

**CAR LAB STUDIO: The Next Car Design** adalah game simulasi bisnis otomotif retro-futuristik berbasis web di mana Anda berperan sebagai perancang mobil profesional sekaligus pemilik studio modifikasi. Rancang berbagai jenis kendaraan, pasang komponen realistik, dan lakukan negosiasi harga menggunakan perintah Command Prompt (CMD) retro untuk menjual mahakarya Anda kepada berbagai karakter AI Buyer yang unik.

*   **URL Permainan**: [https://kansat946.github.io/The-Next-Car-Design/](https://kansat946.github.io/The-Next-Car-Design/)
*   **Repository GitHub**: [https://github.com/kansat946/The-Next-Car-Design](https://github.com/kansat946/The-Next-Car-Design)

---

## 🌟 Fitur Utama & Pembaruan Terbaru

### 1. 👤 Menu Pengaturan Profil Interaktif (HUD Avatar)
Cukup klik foto profil lingkaran (inisial username) di pojok kiri atas HUD untuk membuka popup Pengaturan Profil dengan fitur lengkap:
1.  **Rubah Username**: Ubah nama panggilan pengguna kapan saja secara instan.
2.  **Rubah Nama Bengkel**: Ubah nama brand studio modifikasi Anda.
3.  **Rubah Foto Profil**: Status persiapan untuk pemilihan avatar gambar kustom di masa mendatang.
4.  **Ganti Bahasa (IDN / ENG)**: Berpindah langsung antara Bahasa Indonesia (🇮🇩) dan English (🇬🇧).
5.  **Pause / Resume Game**: Menghentikan sementara waktu dan aktivitas pasar secara aman langsung dari profil.
6.  **Pengaturan Frekuensi Misi Khusus**: Pilihan fleksibel apakah ingin menerima order khusus klien:
    *   **Tidak**: Menonaktifkan misi khusus klien.
    *   **Standar**: Misi khusus muncul dengan interval teratur sistem (tiap 60 detik).
    *   **Sering**: Frekuensi misi khusus dinaikkan 2x lebih sering (tiap 30 detik, probabilitas 75%).

### 2. 💵 Sistem Mata Uang Dinamis (IDR / USD)
*   **Bahasa Indonesia (🇮🇩)**: Menggunakan mata uang **Rupiah (Rp)** dengan modal awal fantastis sebesar **Rp 20.000.000.000.000 (20 Triliun Rupiah)**.
*   **English (🇬🇧)**: Menggunakan mata uang **Dollar ($ USD)** dengan modal awal sebesar **$1,000,000,000 (1 Miliar Dollar)**.
*   Seluruh harga sasis, suku cadang, penawaran tawar-menawar buyer, hingga dialog negosiasi terkonversi secara otomatis dan rapi sesuai mata uang aktif.

### 3. 🎨 Perbaikan Cat Gradasi Bodi Mobil 3D
*   Memperbaiki bug rendering material di mana warna gradasi sebelumnya dapat membuat bodi mobil transparan atau menghilang.
*   Dukungan penuh palet gradasi preset (*Sunset, Chameleon, Cyberpunk, Forest, Aurora, Midnight*) serta **Pembuat Gradasi Custom (Dual Color Hex Picker)** yang teraplikasikan secara mulus pada model 3D WebGL MeshPhysicalMaterial.

### 4. 📸 Visual Slot Workspace Realistis (Foto Mobil Asli)
*   Saat Anda kembali ke dashboard/hub dari studio desain, slot mobil aktif kini menampilkan **foto mobil asli bersolusi tinggi** sesuai model yang Anda pilih saat pembelian di dealer katalog (bukan lagi sekadar gambar 2D sederhana).

### 5. 🏎️ 128 Sasis Mobil (32 Jenis Kendaraan × 4 Varian)
Katalog dealer kini mencakup **128 model sasis mobil lengkap** yang terbagi dalam 32 kategori (24 kategori tipe bodi + 8 merek legendaris dunia: Mercedes, BMW, Subaru, Toyota, Honda, Lamborghini, Ferrari, Porsche) dengan 4 varian lengkap (*Cheapest, Best Seller, Most Expensive, Classic*).

### 6. 🤖 AI Car Advisor & Buyer Negotiation Engine
*   **AI Advisor**: Konsultan perancang mobil pintar dengan rekomendasi komponen berpendar neon di studio editor.
*   **AI Buyer Realistis**: 7 karakter unik dengan tingkat kesabaran, gaya bicara santai layaknya orang asli, dan parameter negosiasi CMD yang dinamis.

---

## 🏆 Sistem Rank & Progresi

Sistem reputasi studio diukur melalui tingkatan **Rank**. Setiap tier reguler membutuhkan **10 Bintang** untuk naik kelas.

### Tingkatan Tier Rank:
1.  **Chassis Scrub** (Warrior)
2.  **Street Tuner** (Elite)
3.  **Pro Customizer** (Master)
4.  **Master Designer** (Grandmaster)
5.  **Elite Builder** (Epic)
6.  **Automotive Legend** (Legend)
7.  **Mythic Immortal** (Rank Abadi / Tertinggi)

---

## 💻 Panduan Perintah Terminal CMD Negosiasi

Saat berhadapan dengan pembeli di layar negosiasi, Anda dapat mengetikkan perintah di kolom input prompt CMD:

*   `/terima` — Menyetujui harga penawaran saat ini dari Buyer dan menyelesaikan transaksi.
*   `/tawar [jumlah]` — Mengajukan penawaran harga tandingan (contoh: `/tawar 68000` atau `/tawar 1360000000`).
*   `/rayu` — Mencoba membujuk pembeli berdasarkan kesesuaian komponen terpasang untuk menaikkan minat mereka.
*   `/lewati` — Membatalkan negosiasi secara damai dan mencari pembeli lain (GRATIS, tidak merusak win streak).

---

## 🛠️ Arsitektur Teknologi

Game ini dibangun secara mandiri tanpa library eksternal berat untuk menjaga keringanan akses:
*   **Three.js (WebGL)**: Rendering 3D realistik sasis, pencahayaan, material bodi physical, dan rotasi interaktif.
*   **HTML5 & CSS3**: Menggunakan styling neon glassmorphism modern, animasi grid responsif, modal terpadu.
*   **Vanilla JavaScript (ES6)**: Seluruh state logic game (autosave, modal, event listeners, algoritma negosiasi, dan visual positioning) diproses menggunakan pure JavaScript tanpa framework tambahan.
