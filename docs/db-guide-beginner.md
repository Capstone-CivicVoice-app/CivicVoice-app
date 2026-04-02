# Panduan Membuat Tabel (Versi Pemula)

## 1. Tentukan data apa yang dibutuhkan fitur kamu
Contoh fitur Lapor:
- Judul laporan
- Deskripsi
- Lokasi
- Status
- Tanggal dibuat

## 2. Ikuti template ini
Buat file di `docs/db/fiturmu.sql`.
Contoh `docs/db/lapor.sql`:

```sql
CREATE TABLE lapor_reports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  location VARCHAR(100) NOT NULL,
  status ENUM('baru','diproses','selesai','ditolak') DEFAULT 'baru',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 3. Format standar kolom
- `id` selalu ada, auto increment
- `created_at` timestamp default
- `user_id` untuk relasi ke user
- `VARCHAR` untuk teks pendek
- `TEXT` untuk teks panjang

## 4. Setelah selesai
Kirim file `.sql` ke Joshua untuk direview.
Joshua akan eksekusi di DB final supaya konsisten.

