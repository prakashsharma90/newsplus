# NewsPulse – Smart News Aggregator App

Production-ready full-stack foundation aligned to PRD/TRD/UI requirements.

## What is included
- Flutter mobile app (`mobile/`) with onboarding, home/categories/search/saved/profile tabs, and detail flow.
- Node.js + Express backend (`backend/`) for ingestion, normalization, dedupe, news APIs, and personalized FCM notifications.
- Firestore security rules and Firebase config stubs.
- Implementation, setup, deployment, and scalability guide.

## Quick Start
### 1) Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### 2) Mobile
```bash
cd mobile
flutter pub get
flutter run --dart-define=API_BASE_URL=http://localhost:8080/api
```

## Docs
- PRD: `docs/PRD.md`
- TRD: `docs/TRD.md`
- UX/Roadmap: `docs/UX-and-Roadmap.md`
- Implementation & deployment: `docs/IMPLEMENTATION.md`

## Security + operations
- API keys remain backend-only via env vars.
- HTTPS-first backend deployment.
- Firestore access controlled by `firestore.rules`.
- Rate-limited Express APIs and validated write payloads.
