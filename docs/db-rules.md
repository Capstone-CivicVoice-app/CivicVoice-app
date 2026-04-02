# Panduan DB Tim (CivicVoice)

## 1. Aturan Akses
- Setiap anggota hanya boleh membuat/ubah tabel untuk fitur yang dia pegang.
- Jangan menghapus tabel orang lain tanpa izin.
- Semua perubahan schema harus dicatat di file `.sql`.

## 2. Penamaan Tabel (wajib konsisten)
- Voting: `voting_*`
- Forum: `forum_*`
- Lapor: `lapor_*`
- Mood: `mood_*`
- Dashboard: `dashboard_*` (opsional)

Contoh:
- `voting_candidates`
- `forum_posts`
- `lapor_reports`
- `mood_entries`

## 3. Format Kolom Umum
- Semua tabel wajib punya `id` (PK).
- Pakai `created_at` timestamp default.
- Jika perlu status, gunakan ENUM sederhana.

## 4. Dokumentasi Schema
Setiap anggota harus simpan perubahan schema di file:
```
docs/db/<fitur>.sql
```
Contoh:
```
docs/db/voting.sql
docs/db/forum.sql
```

## 5. Workflow Perubahan
1. Buat tabel/ubah tabel
2. Simpan SQL-nya
3. Beritahu tim sebelum merge

