# CivicVoice API (MVP)

Base URL (dev): http://localhost:3000  
Auth: Semua endpoint selain `/api/auth/*` memerlukan header `Authorization: Bearer <token>`.

## Auth
POST `/api/auth/register`
- Body:
```json
{ "name": "string", "email": "string", "password": "string" }
```
- Response (201):
```json
{ "message": "User registered successfully.", "userId": 1 }
```

POST `/api/auth/login`
- Body:
```json
{ "email": "string", "password": "string" }
```
- Response (200):
```json
{ "message": "Login successful.", "token": "jwt-token" }
```

GET `/api/auth/me`
- Header: `Authorization: Bearer <token>`
- Response (200):
```json
{
  "user": {
    "id": 1,
    "name": "string",
    "email": "string",
    "role": "user|admin",
    "created_at": "timestamp"
  }
}
```

## Voting
GET `/api/voting`
- Header: `Authorization: Bearer <token>`
- Response (200):
```json
{ "message": "Voting API OK (dummy)" }
```

POST `/api/voting`
- Header: `Authorization: Bearer <token>`
- Body:
```json
{ "candidateId": 1 }
```
- Response (200):
```json
{ "message": "Vote submitted (dummy)" }
```

## Forum
GET `/api/forum`
- Header: `Authorization: Bearer <token>`
- Response (200):
```json
{ "message": "Forum list (dummy)" }
```

POST `/api/forum`
- Header: `Authorization: Bearer <token>`
- Body:
```json
{ "title": "string", "content": "string" }
```
- Response (200):
```json
{ "message": "Forum post created (dummy)" }
```

GET `/api/forum/:id`
- Header: `Authorization: Bearer <token>`
- Response (200):
```json
{ "message": "Forum detail (dummy)" }
```

POST `/api/forum/:id/comments`
- Header: `Authorization: Bearer <token>`
- Body:
```json
{ "content": "string" }
```
- Response (200):
```json
{ "message": "Comment created (dummy)" }
```

## Lapor (Complaints)
GET `/api/lapor`
- Header: `Authorization: Bearer <token>`
- Response (200):
```json
{ "message": "Complaints list (dummy)" }
```

POST `/api/lapor`
- Header: `Authorization: Bearer <token>`
- Body:
```json
{ "title": "string", "description": "string" }
```
- Response (200):
```json
{ "message": "Complaint created (dummy)" }
```

GET `/api/lapor/:id`
- Header: `Authorization: Bearer <token>`
- Response (200):
```json
{ "message": "Complaint detail (dummy)" }
```

PUT `/api/lapor/:id/status`
- Header: `Authorization: Bearer <token>`
- Body:
```json
{ "status": "baru|diproses|selesai|ditolak" }
```
- Response (200):
```json
{ "message": "Complaint status updated (dummy)" }
```

## Mood
GET `/api/mood`
- Header: `Authorization: Bearer <token>`
- Response (200):
```json
{ "message": "Mood summary (dummy)" }
```

POST `/api/mood`
- Header: `Authorization: Bearer <token>`
- Body:
```json
{ "mood": "senang|netral|sedih" }
```
- Response (200):
```json
{ "message": "Mood submitted (dummy)" }
```

## Dashboard
GET `/api/dashboard`
- Header: `Authorization: Bearer <token>`
- Response (200):
```json
{ "message": "Dashboard data (dummy)" }
```

