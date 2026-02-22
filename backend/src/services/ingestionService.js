const { fetchLatestNews } = require('./newsService');
const { db, admin } = require('../config/firebase');
const { buildNewsId } = require('../utils/hash');
const { sendNewsNotifications } = require('./notificationService');

async function ingestNews() {
  const incoming = await fetchLatestNews();
  const result = { inserted: 0, duplicates: 0 };

  for (const item of incoming) {
    const newsId = buildNewsId(item);
    const ref = db.collection('news').doc(newsId);
    const existing = await ref.get();
    if (existing.exists) {
      result.duplicates += 1;
      continue;
    }

    const payload = {
      newsId,
      ...item,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await ref.set(payload);
    result.inserted += 1;
    await sendNewsNotifications(payload);
  }

  return result;
}

module.exports = { ingestNews };
