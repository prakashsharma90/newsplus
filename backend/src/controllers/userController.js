const { db, admin } = require('../config/firebase');

async function upsertInterests(req, res) {
  const userId = req.params.userId;
  await db.collection('users').doc(userId).set({
    ...req.validated,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });
  res.json({ ok: true });
}

async function saveBookmark(req, res) {
  const { userId, newsId } = req.params;
  await db.collection('users').doc(userId).collection('bookmarks').doc(newsId).set({
    newsId,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
  res.status(201).json({ ok: true });
}

async function removeBookmark(req, res) {
  const { userId, newsId } = req.params;
  await db.collection('users').doc(userId).collection('bookmarks').doc(newsId).delete();
  res.json({ ok: true });
}

async function getBookmarks(req, res) {
  const { userId } = req.params;
  const snap = await db.collection('users').doc(userId).collection('bookmarks').get();
  res.json({ data: snap.docs.map((d) => d.data()) });
}

module.exports = { upsertInterests, saveBookmark, removeBookmark, getBookmarks };
