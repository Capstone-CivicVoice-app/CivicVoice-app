# CivicVoice - Requirement MVP

Tanggal: 2026-03-09  
Tim: CC26-PS074  
Versi: v1.0-draft

## 1) Tujuan 
Dokumen ini adalah output final untuk mengunci ruang lingkup MVP agar pengerjaan minggu berikutnya tidak melebar.

## 2) Problem Statement
Masyarakat butuh wadah terstruktur untuk menyuarakan aspirasi, berdiskusi isu publik, melakukan voting, mengirim pengaduan, dan melihat insight ringkas secara transparan.

## 3) Target Pengguna
- Warga (user umum): membuat isu, komentar, voting, kirim pengaduan, isi survei mood.
- Admin: mengelola kandidat, moderasi konten, update status pengaduan, melihat ringkasan data.

## 4) Fitur MVP (In Scope)
1. Autentikasi dasar
- Register
- Login
- Logout

2. Voting popularitas calon pemimpin
- Admin dapat CRUD kandidat
- User login dapat vote satu kali per kategori/periode yang ditentukan
- Tersedia ringkasan hasil vote

3. Forum & Isu publik
- User login dapat membuat isu
- User login dapat memberi komentar
- Admin dapat moderasi konten dasar (hide/delete)

4. Pengaduan & tracking status
- User login dapat membuat laporan pengaduan
- User dapat melihat status pengaduan miliknya
- Admin dapat mengubah status (baru, diproses, selesai, ditolak)

5. Survei mood masyarakat (sederhana)
- User login memilih mood/penilaian sederhana
- Data mood direkap untuk dashboard

6. Dashboard insight (ringkas)
- Total user
- Total isu
- Total pengaduan per status
- Hasil voting ringkas
- Ringkasan mood

## 5) Out of Scope (Tidak dikerjakan di MVP)
- Realtime chat
- Notifikasi push/email
- Rekomendasi berbasis AI/ML lanjutan
- Integrasi API eksternal kompleks
- Role/permission kompleks multi-level

## 6) Aturan Teknis Wajib (Checklist Tech Stack)
- Wajib ada networking call dari frontend ke API.
- Wajib pakai module bundler untuk frontend (Vite).
- Wajib bangun RESTful API untuk mendukung frontend.
- URL API mengikuti konvensi REST.
- Aplikasi tidak crash untuk fitur utama.
- Tidak menggunakan web generator untuk frontend/backend.

## 7) Batasan Implementasi Terkait Plagiarisme
- Boleh referensi kode/konsep.
- Tidak boleh copy penuh repo/project orang.
- Jika pakai inspirasi template UI: wajib tulis ulang dan modifikasi sesuai kebutuhan tim.
- Seluruh anggota harus paham kode yang dipakai.

## 8) User Story Prioritas
1. Sebagai user, saya bisa register/login agar bisa mengakses fitur partisipasi.
2. Sebagai user, saya bisa vote kandidat agar aspirasi saya tercatat.
3. Sebagai user, saya bisa membuat isu dan komentar agar diskusi terstruktur.
4. Sebagai user, saya bisa membuat pengaduan dan memantau statusnya.
5. Sebagai admin, saya bisa mengelola kandidat dan status pengaduan.
6. Sebagai user/admin, saya bisa melihat ringkasan dashboard.

## 9) Acceptance Criteria Minimum
1. Auth
- Register dan login berhasil dengan validasi input dasar.

2. Voting
- Satu user tidak bisa vote ganda pada konteks yang sama.
- Hasil vote muncul dalam ringkasan.

3. Forum
- Isu dan komentar tersimpan dan dapat ditampilkan ulang.

4. Pengaduan
- Laporan tersimpan.
- Status berubah sesuai update admin dan bisa dilihat user.

5. Dashboard
- Menampilkan angka ringkasan dari data aktual database.

6. Stabilitas
- Fitur utama berjalan tanpa crash pada skenario normal.

## 10) Risiko Awal + Mitigasi
- Risiko: scope melebar.
  Mitigasi: pegang ketat daftar out of scope.
- Risiko: integrasi FE-BE gagal.
  Mitigasi: kontrak API ditulis sejak awal (Minggu 1).
- Risiko: keterlambatan tim.
  Mitigasi: breakdown task harian daen checkpoint rutin.

## 11) Output Wajib Hari Senin (Checklist Rapat)
- [ ] Dokumen requirement ini disetujui semua anggota.
- [ ] Fitur in scope dan out of scope final.
- [ ] Acceptance criteria dipahami semua anggota.
- [ ] Risiko utama + mitigasi disepakati.
- [ ] Penanggung jawab tiap modul dikonfirmasi.

## 12) Sign-off
- Ketua/Koordinator Tim: ____________________
- Tanggal Persetujuan: ____________________
- Catatan Revisi: ____________________

