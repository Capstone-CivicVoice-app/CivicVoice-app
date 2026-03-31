# Handover Core System (Joshua)

## Status
Core system sudah siap untuk dipakai tim.

## Yang Sudah Selesai
- Auth backend:
  - `POST /api/auth/register`
  - `POST /api/auth/login`
  - `GET /api/auth/me`
- Skeleton route + controller + model:
  - `/api/voting`
  - `/api/forum`
  - `/api/lapor`
  - `/api/mood`
  - `/api/dashboard`
- Dokumentasi endpoint: `docs/api.md`

## Aturan Penting
- Semua endpoint non-auth wajib pakai header:
  - `Authorization: Bearer <token>`
- Struktur backend wajib diikuti:
  - `routes → controllers → models`
- Controller sudah terhubung ke model (model masih dummy).

## Pembagian Tanggung Jawab
- Voting:
  - `backend/src/controllers/voting.controller.js`
  - `backend/src/models/voting.model.js`
- Forum:
  - `backend/src/controllers/forum.controller.js`
  - `backend/src/models/forum.model.js`
- Lapor:
  - `backend/src/controllers/lapor.controller.js`
  - `backend/src/models/lapor.model.js`
- Mood & Dashboard:
  - `backend/src/controllers/mood.controller.js`
  - `backend/src/controllers/dashboard.controller.js`
  - `backend/src/models/mood.model.js`
  - `backend/src/models/dashboard.model.js`

## Catatan
- Silakan lanjutkan query DB dan logic sesuai fitur masing-masing.
- Jika butuh schema DB atau endpoint detail, cek `docs/api.md`.

