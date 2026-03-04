# NewsPulse Production Implementation

## Repository Structure
- `backend/` Express API, ingestion engine, dedupe + personalization + FCM send.
- `mobile/` Flutter app with onboarding, tab shell, detail screen, and core services.
- `firestore.rules` Security policy for users/news/bookmarks.

## Backend
### Key Production Modules
- `src/services/newsService.js`: fetch from RSS or NewsAPI.
- `src/services/ingestionService.js`: normalize, hash, dedupe, store, trigger notifications.
- `src/services/notificationService.js`: interest/keyword matching and FCM send.
- `src/routes/index.js`: health/news/ingest/interests/bookmarks endpoints.

### API Endpoints
- `GET /api/health`
- `GET /api/news?category=&q=&limit=&after=`
- `POST /api/ingest`
- `PUT /api/users/:userId/interests`
- `GET /api/users/:userId/bookmarks`
- `POST /api/users/:userId/bookmarks/:newsId`
- `DELETE /api/users/:userId/bookmarks/:newsId`

### Scheduled Fetch (every 5 min)
Use Cloud Scheduler hitting `POST /api/ingest` every 5 minutes over HTTPS.

## Mobile App (Flutter)
### Implemented UX
- Onboarding with multi-select interests.
- Home with breaking slider + card layout.
- Category listing and search tab.
- Saved tab and profile settings placeholders.
- News detail screen with share/bookmark/read button actions.
- Material 3 + light/dark mode.

### Offline + failure readiness
- Design supports bookmark persistence in Firestore and can be mirrored to local storage.
- Empty states are present for search/saved.
- Connectivity package included for failure-aware UX extension.

## Environment Setup
### Backend
1. Copy `backend/.env.example` to `backend/.env`.
2. Add Firebase service account and provider keys.
3. Run:
   - `cd backend`
   - `npm install`
   - `npm run dev`

### Mobile
1. Configure Firebase app (`google-services.json` / `GoogleService-Info.plist`).
2. Run:
   - `cd mobile`
   - `flutter pub get`
   - `flutter run --dart-define=API_BASE_URL=https://<backend-host>/api`

## Deployment Guide
- Backend: Cloud Run container for Express app.
- Database/Auth/FCM: Firebase project.
- Scheduling: Cloud Scheduler -> HTTPS POST `/api/ingest` every 5 minutes.
- SSL: Google-managed HTTPS endpoint.

## Scalability Notes (100k+ users)
- Add queue (Pub/Sub) between ingest and notifications.
- Partition notifications by category shard.
- Cache frequent queries via CDN/edge cache.
- Add trending + summarization worker microservices.
- Use feature flags for premium/ads/modules.
