const { db } = require('../config/firebase');

async function getNews(req, res) {
  const { category, q, limit = 20, after } = req.query;
  let query = db.collection('news').orderBy('publishedAt', 'desc').limit(Number(limit));

  if (category) query = query.where('category', '==', category);
  if (after) query = query.startAfter(after);

  const snap = await query.get();
  let docs = snap.docs.map((d) => d.data());

  if (q) docs = docs.filter((d) => d.title.toLowerCase().includes(String(q).toLowerCase()));
  res.json({ data: docs, nextCursor: docs.at(-1)?.publishedAt || null });
}

module.exports = { getNews };
