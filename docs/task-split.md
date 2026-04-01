# Pembagian Tugas Teknis per Fitur

## Aturan Umum
- Frontend berada di `src/components/`
- Backend berada di `backend/src/`
- Struktur backend wajib: `routes → controllers → models`
- Semua endpoint non-auth wajib pakai token
- Urutan pengerjaan per fitur:
  1) `routes` (endpoint jelas)
  2) `controllers` (response dummy dulu)
  3) `models` (stub query)
  4) `frontend` (JSX + fetch ke endpoint)

## 1. Voting (Adib)
Frontend:
- `src/components/Voting.jsx`

Backend:
- `backend/src/routes/voting.routes.js`
- `backend/src/controllers/voting.controller.js`
- `backend/src/models/voting.model.js`

Urutan kerja:
1) `voting.routes.js`
2) `voting.controller.js`
3) `voting.model.js`
4) `Voting.jsx`

## 2. Forum & Isu Publik (Bowo)
Frontend:
- `src/components/Forum.jsx`

Backend:
- `backend/src/routes/forum.routes.js`
- `backend/src/controllers/forum.controller.js`
- `backend/src/models/forum.model.js`

Urutan kerja:
1) `forum.routes.js`
2) `forum.controller.js`
3) `forum.model.js`
4) `Forum.jsx`

## 3. Pengaduan / Lapor (Khinan)
Frontend:
- `src/components/Lapor.jsx`

Backend:
- `backend/src/routes/lapor.routes.js`
- `backend/src/controllers/lapor.controller.js`
- `backend/src/models/lapor.model.js`

Urutan kerja:
1) `lapor.routes.js`
2) `lapor.controller.js`
3) `lapor.model.js`
4) `Lapor.jsx`

## 4. Mood & Dashboard (Abiyan)
Frontend:
- `src/components/Dashboard.jsx`

Backend:
- `backend/src/routes/mood.routes.js`
- `backend/src/controllers/mood.controller.js`
- `backend/src/models/mood.model.js`

Optional Dashboard API:
- `backend/src/routes/dashboard.routes.js`
- `backend/src/controllers/dashboard.controller.js`
- `backend/src/models/dashboard.model.js`

Urutan kerja:
1) `mood.routes.js`
2) `mood.controller.js`
3) `mood.model.js`
4) `Dashboard.jsx`
5) (Opsional) `dashboard.routes.js` → `dashboard.controller.js` → `dashboard.model.js`

## 5. Core System & Auth (Joshua)
Backend:
- `backend/src/routes/auth.routes.js`
- `backend/src/controllers/auth.controller.js`
- `backend/src/models/user.model.js`

Frontend:
- `src/components/Login.jsx`
- `src/components/Register.jsx`
- `src/components/Profile.jsx`

Dokumentasi:
- `docs/api.md`
- `docs/team-handover.md`
