# Panduan Menambahkan Foto Asli iPhone Per Model

Web diagnostik ini mendukung foto asli beresolusi tinggi untuk setiap model iPhone secara dinamis.

## Struktur Penamaan File Foto
Untuk menggantikan diagram dengan foto fisik asli dari perangkat nyata, cukup simpan foto ke dalam folder `images/inspection/` atau `images/models/` dengan format nama berikut:

### 1. Modul Kamera & Flash Belakang:
- `c_lensa_array_{modelId}.jpg` (contoh: `c_lensa_array_ip16pm.jpg` untuk iPhone 16 Pro Max)
- `c_flash_{modelId}.jpg` (contoh: `c_flash_ip16pm.jpg`)
- `c_lidar_{modelId}.jpg` (contoh: `c_lidar_ip16pm.jpg`)

### 2. Sasis Bodi & Tombol Fisik:
- `b_back_glass_{modelId}.jpg` (foto kaca belakang dan logo Apple)
- `b_camera_ctrl_{modelId}.jpg` (foto tombol Camera Control pada iPhone 16/17)
- `b_action_btn_{modelId}.jpg` (foto Action Button pada iPhone 15 Pro, 16, 17)
- `b_pentalobe_{modelId}.jpg` (foto baut pentalobe dan port)

---

## Rekomendasi Sumber Foto Asli Berkualitas Tinggi (Resmi & Bebas Gangguan):

1. **Apple Official Support (Identifikasi Model)**:
   - Kunjungi: [support.apple.com/id-id/108044](https://support.apple.com/id-id/108044)
   - Apple menyediakan foto studio resmi tampak belakang dan depan beresolusi tinggi untuk seluruh model iPhone (dari iPhone SE, 11, 12, 13, 14, 15, 16 hingga 17).
   - Cara: Klik kanan pada foto produk -> *Simpan Gambar Sebagai...*

2. **Apple Newsroom Media Kit (Press Releases)**:
   - Kunjungi: [apple.com/newsroom](https://www.apple.com/newsroom/)
   - Cari: `"iPhone 16 Pro"` atau `"iPhone 15 Pro"` -> Buka rilis pers peluncuran -> Gulir ke bagian bawah pada tautan *Download Media Kit (Images)*.
   - Anda akan mendapatkan foto resolusi asli (hingga 4K) modul kamera close-up dan sasis bodi.

3. **iFixit Teardown Library**:
   - Kunjungi: [ifixit.com/Device/iPhone](https://www.ifixit.com/Device/iPhone)
   - Buka teardown model iPhone yang diinginkan. iFixit menyediakan foto mikroskopis beresolusi sangat tinggi untuk baut pentalobe, port charging, kaca kamera, dan sensor LiDAR.

4. **Tangkapan Layar Langsung (Screenshot Asli)**:
   - Khusus menu iOS seperti *Nomor Model*, *Riwayat Servis Layar*, dan *Kesehatan Baterai*, cara terbaik dan paling otentik adalah mengambil tangkapan layar langsung dari iPhone asli dan menyimpannya sebagai referensi inspeksi.
