const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: Number(process.env.PORT || 8080),
  googleNewsRssUrl: process.env.GOOGLE_NEWS_RSS_URL,
  newsApiKey: process.env.NEWS_API_KEY,
  newsProvider: process.env.NEWS_PROVIDER || 'rss',
  firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
  firebaseClientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  firebasePrivateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  appDeepLinkPrefix: process.env.APP_DEEP_LINK_PREFIX || 'newspulse://article/',
  fcmDefaultIcon: process.env.FCM_DEFAULT_ICON || '',
};
