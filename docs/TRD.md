# NewsPulse – Technical Requirement Document (TRD)

## 1. Recommended Tech Stack

### Frontend
- Flutter (cross-platform)
  - **Alternative:** React Native

### Backend
- Node.js (Express.js)
  - **Alternative:** Firebase Backend

### Database
- Firebase Firestore
  - **Alternative:** MongoDB

### Push Notifications
- Firebase Cloud Messaging (FCM)

### Hosting
- Google Cloud or AWS

## 2. News Fetching Architecture

### Option 1: Google News RSS
- Endpoint: `https://news.google.com/rss`

### Option 2: Third-Party APIs
- NewsAPI
- GNews API

## 3. System Architecture
```text
Google News API / RSS
        ↓
Backend Server (Node.js)
        ↓
News Processing & Categorization
        ↓
Database (Firestore)
        ↓
Push Notification Engine (FCM)
        ↓
Mobile App
```

## 4. Notification Engine Logic

### Breaking News Flow
1. Fetch news every 5 minutes
2. Compare with existing database
3. If new item found:
   - Categorize
   - Check user interests
   - Send targeted notification

### Personalization Logic
```js
if (news.category === user.preference) {
  sendNotification(user, news);
} else {
  skip();
}
```

## 5. Database Schema

### Users Collection
```json
{
  "userId": "string",
  "name": "string",
  "email": "string",
  "interests": ["technology", "business"],
  "followedKeywords": ["bitcoin", "AI"],
  "notificationSettings": {
    "breakingNews": true,
    "frequency": "high"
  }
}
```

### News Collection
```json
{
  "newsId": "string",
  "title": "string",
  "description": "string",
  "imageUrl": "string",
  "category": "string",
  "source": "string",
  "publishedAt": "timestamp",
  "url": "string"
}
```

## 6. Security Requirements
- API key hidden on backend
- HTTPS encryption
- Rate limiting
- JWT authentication
