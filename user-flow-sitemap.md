# CivicVoice - User Flow dan Sitemap (Minggu 1 / Hari Selasa)

Tanggal: 2026-03-10  
Tim: CC26-PS074  
Versi: v1.0-draft
## 1) User Flow Utama

### A. Guest Flow
1. Buka `Home/Landing`
2. Pilih `Register` atau `Login`
3. Jika register sukses -> arahkan ke `Login`
4. Login sukses -> masuk ke `Dashboard User`

### B. User Flow (Login)
1. Login -> `Dashboard User`
2. Dari dashboard, user bisa masuk ke:
- `Voting`
- `Forum Isu`
- `Buat Pengaduan`
- `Mood Survey`
- `Profil Saya`
3. User dapat melihat:
- `Hasil Voting Ringkas`
- `Pengaduan Saya` (tracking status)
- `Detail Isu` dan `Komentar`
4. Logout -> kembali ke `Home/Landing`

### C. Admin Flow
1. Login -> `Dashboard Admin`
2. Admin bisa masuk ke:
- `Kelola Kandidat` (CRUD kandidat)
- `Moderasi Isu/Komentar`
- `Kelola Pengaduan` (ubah status)
- `Lihat Insight Dashboard`
3. Logout -> kembali ke `Home/Landing`

## 2) User Flow Per Fitur (Validasi)

### Voting
1. User login masuk halaman `Voting`
2. Pilih kandidat
3. Submit vote
4. Sistem cek anti-double-vote
5. Jika valid -> vote tersimpan, hasil ringkas diperbarui
6. Jika sudah pernah vote -> tampilkan pesan penolakan

### Forum Isu
1. User login masuk `Forum Isu`
2. Buat isu baru atau buka detail isu
3. Tambah komentar
4. Data tampil di daftar forum
5. Admin dapat hide/delete konten jika melanggar

### Pengaduan dan Tracking
1. User login buka `Buat Pengaduan`
2. Isi form dan submit
3. Sistem simpan laporan dengan status awal `baru`
4. Admin ubah status: `diproses/selesai/ditolak`
5. User cek progres di `Pengaduan Saya`

### Mood Survey
1. User login buka `Mood Survey`
2. Pilih mood/penilaian sederhana
3. Submit
4. Data agregat masuk ke dashboard

## 3) Sitemap (Struktur Halaman)

```text
/
|-- home (guest)
|-- login (guest)
|-- register (guest)
|
|-- user
|   |-- dashboard
|   |-- voting
|   |-- forum
|   |   |-- create-issue
|   |   `-- issue/:id
|   |       `-- comments
|   |-- complaints
|   |   |-- create
|   |   `-- my-complaints
|   |-- mood-survey
|   `-- profile
|
`-- admin
    |-- dashboard
    |-- candidates
    |   |-- create
    |   `-- edit/:id
    |-- moderation
    |   |-- issues
    |   `-- comments
    `-- complaints
        `-- update-status/:id
```

## 4) Matriks Akses Halaman

| Halaman | Guest | User | Admin |
|---|---|---|---|
| Home | Ya | Ya | Ya |
| Login/Register | Ya | Tidak (redirect bila sudah login) | Tidak (redirect bila sudah login) |
| Dashboard User | Tidak | Ya | Tidak |
| Voting | Tidak | Ya | Opsional lihat-only |
| Forum Isu | Tidak | Ya | Ya (moderasi) |
| Buat Pengaduan | Tidak | Ya | Tidak |
| Pengaduan Saya | Tidak | Ya | Tidak |
| Dashboard Admin | Tidak | Tidak | Ya |
| Kelola Kandidat | Tidak | Tidak | Ya |
| Moderasi Isu/Komentar | Tidak | Tidak | Ya |
| Kelola Pengaduan | Tidak | Tidak | Ya |

## 5) Dependency Antar Halaman
- `Login` wajib sebelum akses semua halaman user/admin.
- `Dashboard User` butuh data ringkasan dari API voting, forum, pengaduan, mood.
- `Issue Detail` bergantung pada data `Forum Isu`.
- `My Complaints` bergantung pada data pengaduan milik user.
- `Admin Complaints` bergantung pada daftar pengaduan global.

## 6) Checklist Selesai Hari Selasa
- [ ] User flow Guest/User/Admin disetujui tim.
- [ ] User flow per fitur (voting/forum/pengaduan/mood) disepakati.
- [ ] Sitemap final disepakati.
- [ ] Matriks akses role final.
- [ ] Dependency antar halaman jelas untuk acuan API minggu berikutnya.

