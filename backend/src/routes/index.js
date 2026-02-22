const express = require('express');
const { getNews } = require('../controllers/newsController');
const { upsertInterests, saveBookmark, removeBookmark, getBookmarks } = require('../controllers/userController');
const { validate, registerInterestSchema } = require('../middleware/validation');
const { ingestNews } = require('../services/ingestionService');

const router = express.Router();

router.get('/health', (_, res) => res.json({ ok: true }));
router.get('/news', getNews);
router.post('/ingest', async (_, res) => res.json(await ingestNews()));
router.put('/users/:userId/interests', validate(registerInterestSchema), upsertInterests);
router.get('/users/:userId/bookmarks', getBookmarks);
router.post('/users/:userId/bookmarks/:newsId', saveBookmark);
router.delete('/users/:userId/bookmarks/:newsId', removeBookmark);

module.exports = router;
