const env = require('../config/env');
const { messaging, db, admin } = require('../config/firebase');

async function findTargetUsers(category, title) {
  const users = await db.collection('users').where('notificationSettings.breakingNews', '==', true).get();
  const lowered = title.toLowerCase();
  return users.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((u) => (u.interests || []).includes(category)
      || (u.followedKeywords || []).some((k) => lowered.includes(k.toLowerCase())));
}

async function sendNewsNotifications(article) {
  const targets = await findTargetUsers(article.category, article.title);
  await Promise.all(targets.map(async (user) => {
    if (!user.fcmToken) return;
    await messaging.send({
      token: user.fcmToken,
      notification: {
        title: article.title,
        body: article.description?.slice(0, 120) || 'Breaking story available now',
      },
      data: {
        newsId: article.newsId,
        deepLink: `${env.appDeepLinkPrefix}${article.newsId}`,
        category: article.category,
      },
      android: { notification: { icon: env.fcmDefaultIcon || undefined } },
    });

    await db.collection('users').doc(user.id).collection('notificationLogs').add({
      newsId: article.newsId,
      sentAt: admin.firestore.FieldValue.serverTimestamp(),
      title: article.title,
    });
  }));
}

module.exports = { sendNewsNotifications };
