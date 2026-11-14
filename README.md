# 🚗 CAR LAB STUDIO: The Next Car Design

**CAR LAB STUDIO: The Next Car Design** adalah game simulasi bisnis otomotif retro-futuristik berbasis web di mana Anda berperan sebagai perancang mobil profesional sekaligus pemilik studio modifikasi. Rancang berbagai jenis kendaraan 3D, pasang komponen realistik, kembangkan karakter & gaya pribadi Anda, dan lakukan negosiasi harga menggunakan perintah Command Prompt (CMD) retro untuk menjual mahakarya Anda kepada 7 karakter AI Buyer yang unik.

*   **URL Permainan**: [https://kansat946.github.io/The-Next-Car-Design/](https://kansat946.github.io/The-Next-Car-Design/)
*   **Repository GitHub**: [https://github.com/kansat946/The-Next-Car-Design](https://github.com/kansat946/The-Next-Car-Design)

---

## 🌟 Fitur Utama & Pembaruan Terbaru

### 1. 🧊 Foto Profil Avatar 3D (Three.js) & Unggah Foto Kustom
Klik avatar di pojok kiri atas HUD untuk mengatur identitas visual Anda dengan dua mode:
*   **Generator Avatar 3D (Three.js Stylized Box/Blocky Geometry)**:
    *   Dirender secara prosedural menggunakan **BoxGeometry** dengan *flat shading* dan pencahayaan studio 3D yang berputar halus (*turntable*).
    *   **Pilihan Gender**: **Cowok** dan **Cewek** (otomatis memfilter gaya karakter yang sesuai).
    *   **6 Gaya / Style Karakter** (dengan aksesoris 3D kotak khas):
        1. 👗 **Cewek Modis** (*Cewek*): Rambut bob berlapis, kacamata trendi bingkai emas, dan anting emas.
        2. 🚬 **Gaya Bos** (*Cowok*): Topi fedora lebar berpita emas dan cerutu menyala khas bos tambang.
        3. 🏁 **Pembalap Liar** (*Cowok*): Helm balap penuh aerodinamis warna merah dengan visor kaca gelap dan strip balap putih.
        4. 👴 **Orang Tua** (*Cowok*): Rambut perak belah samping, kacamata baca kawat perak, dan kumis klasik.
        5. 🎓 **Anak Magang** (*Semua Gender*): Kacamata baca tebal hitam dan tali lanyard biru lengkap dengan kartu ID.
        6. 🛍️ **Ibu Komplek** (*Cewek*): Rol rambut warna-warni di atas kepala dan kacamata retro cat-eye.
*   **Unggah Foto dari Perangkat**:
    *   Mendukung klik maupun *drag-and-drop* gambar berformat **JPG, PNG, atau WebP** (maksimal 5MB).
*   **Sinkronisasi HUD Otomatis**:
    *   Avatar 3D maupun foto unggahan langsung tampil di ikon profil pojok kiri atas HUD.

### 2. 📈 Sistem Kemiripan Style & Perilaku Negosiasi Buyer
Setiap gaya karakter memiliki tabel kecocokan (*affinity*) tersendiri terhadap 7 tipe AI Buyer dan memengaruhi jalannya negosiasi secara langsung:
*   **Progresi Kemahiran Gaya (0% → 100%)**:
    *   Saat Anda baru memilih atau mengganti gaya karakter, tingkat kemiripan (*style mastery*) dimulai dari **0%**.
    *   Setiap transaksi penjualan mobil yang sukses ke buyer akan melatih dan meningkatkan kemahiran gaya aktif sebesar **+20%** hingga mencapai maksimal **100%**.
*   **Efek di Terminal Negosiasi**:
    *   Menampilkan status `[GAYA PENJUAL] | KEMIRIPAN BUYER: XX%` saat sesi dimulai.
    *   **Bonus Rayuan (`/rayu`)**: Jika kemiripan $\ge 80\%$, peluang bujukan berhasil bertambah **+15%** dan memberikan tambahan kenaikan tawaran **+5%**. (Sebaliknya, jika kemiripan $\le 50\%$, peluang berkurang $-10\%$).
    *   **Toleransi Tawar Balik (`/tawar`)**: Batas maksimum harga tawar balik yang diterima buyer ikut menyesuaikan secara dinamis berdasarkan persentase kemiripan.

### 3. 👤 Menu Pengaturan Profil Interaktif (HUD Avatar)
Popup Pengaturan Profil tersusun berurutan dan dapat diakses kapan saja dari HUD:
1.  **Rubah Username**: Ubah nama panggilan pengguna secara instan.
2.  **Rubah Nama Bengkel**: Ubah nama brand studio modifikasi Anda.
3.  **Rubah Foto Profil**: Kustomisasi Avatar 3D, gender, gaya karakter, atau unggah foto perangkat.
4.  **Ganti Bahasa (IDN / ENG)**: Berpindah langsung antara Bahasa Indonesia (🇮🇩) dan English (🇬🇧).
5.  **Pause / Resume Game**: Menghentikan atau melanjutkan waktu dan aktivitas pasar secara aman.
6.  **Misi Khusus**: Mengatur frekuensi munculnya pesanan khusus klien:
    *   **Tidak**: Menonaktifkan misi khusus.
    *   **Standar**: Misi khusus muncul dengan interval reguler sistem.
    *   **Sering**: Frekuensi misi khusus muncul lebih sering.

### 4. 💵 Sistem Mata Uang Dinamis (IDR / USD)
*   **Bahasa Indonesia (🇮🇩)**: Menggunakan mata uang **Rupiah (Rp)** dengan modal awal **Rp 20.000.000.000.000 (20 Triliun Rupiah)**.
*   **English (🇬🇧)**: Menggunakan mata uang **Dollar ($ USD)** dengan modal awal **$1,000,000,000 (1 Miliar Dollar)**.
*   Seluruh harga sasis, suku cadang, penawaran buyer, dan laporan transaksi terkonversi otomatis sesuai bahasa dan mata uang aktif.

### 5. 📊 Persentase Telemetri Mobil Real-Time
Di Studio Editor maupun Preview Modal Katalog, performa kendaraan kini menampilkan nilai **persentase (%)** secara jelas berdampingan dengan label status:
*   🌿 **Keramahan Lingkungan (Eco)**
*   ✨ **Flex / Gaya**
*   🛡️ **Kekuatan Tabrakan (Crash Resistance)**

### 6. 🎨 Cat Gradasi Bodi Mobil 3D
*   Perbaikan bug rendering `MeshPhysicalMaterial` pada Three.js r128 sehingga warna gradasi tampil solid dan mengkilap tanpa membuat bodi mobil transparan atau hilang.
*   Mendukung palet gradasi preset (*Sunset, Chameleon, Cyberpunk, Forest, Aurora, Midnight*) serta **Pembuat Gradasi Custom (Dual Color Hex Picker)**.

### 7. 📸 Visual Slot Workspace Realistis & 128 Sasis Mobil
*   **Foto Mobil Asli di Hub**: Slot mobil pada dashboard menampilkan foto mobil asli sesuai model yang dibeli dari katalog dealer.
*   **128 Sasis Mobil**: Katalog dealer mencakup **128 model sasis mobil** dalam **32 kategori** (24 kategori tipe bodi + 8 merek terpilih: Mercedes, BMW, Subaru, Toyota, Honda, Lamborghini, Ferrari, Porsche), masing-masing dengan 4 varian (*Cheapest, Best Seller, Most Expensive, Classic*).

### 8. 🤖 AI Car Advisor & 7 AI Buyer Unik
*   **AI Car Advisor**: Memberikan saran komponen cerdas beserta pro/kontra dan sorotan neon pada part yang direkomendasikan di studio.
*   **7 AI Buyer**: *🤠 Bos Tambang, 👔 Eksekutif Korporat, 🎮 Sultan Millennial, 👴 Kolektor Tua, 🤡 Sirkus Manager, 👩 Ibu Komplek,* dan *🏁 Pembalap Liar*—masing-masing dengan selera, pantangan, tingkat kesabaran, dan dialog khas.

---

## 🏆 Sistem Rank & Progresi

Reputasi studio diukur melalui tingkatan **Rank**. Setiap tier reguler membutuhkan **10 Bintang** untuk naik kelas, lalu diikuti fase **Mythic Placement** (7 penjualan sukses berturut-turut) untuk mencapai rank tertinggi:

1.  **Chassis Scrub** (Warrior)
2.  **Street Tuner** (Elite)
3.  **Pro Customizer** (Master)
4.  **Master Designer** (Grandmaster)
5.  **Elite Builder** (Epic)
6.  **Automotive Legend** (Legend)
7.  **Mythic Immortal** (Rank Tertinggi)

---

## 💻 Panduan Perintah Terminal CMD Negosiasi

Saat berhadapan dengan pembeli di layar negosiasi, ketikkan perintah pada kolom input terminal:

*   `/terima` — Menyetujui harga penawaran saat ini dari Buyer dan menyelesaikan transaksi.
*   `/tawar [harga]` — Mengajukan penawaran harga tandingan (contoh: `/tawar 68000` atau `/tawar 1360000000`).
*   `/rayu [alasan]` — Membujuk pembeli dengan menyebutkan keunggulan/komponen mobil (contoh: `/rayu mobil ini punya ban monster`).
*   `/lewati` — Membatalkan negosiasi saat ini dan mencari buyer lain secara gratis.

---

## 🛠️ Struktur Proyek & Arsitektur Teknologi

*   [`index.html`](index.html) — Struktur antarmuka aplikasi, modal katalog, studio 3D, terminal negosiasi, dan modal pengaturan profil/avatar.
*   [`style.css`](style.css) — Styling neon glassmorphism, layout responsif, komponen avatar customizer, dan telemetry bars.
*   [`data.js`](data.js) — Database 128 sasis mobil, katalog suku cadang, palet warna, dan data statistik kendaraan.
*   [`car_photos.js`](car_photos.js) — Pemetaan URL foto mobil asli untuk katalog dan slot workspace.
*   [`app.js`](app.js) — Logika inti game (state & autosave `localStorage`, Three.js 3D studio & avatar generator, sistem negosiasi CMD, AI Advisor, dan sistem bahasa/mata uang).

Teknologi utama:
*   **Three.js (r128 WebGL + OrbitControls)**: Rendering 3D mobil realistik dan generator avatar 3D prosedural.
*   **HTML5, CSS3 & Vanilla JavaScript (ES6)**: Tanpa framework berat, ringan dan cepat dijalankan langsung di browser.
