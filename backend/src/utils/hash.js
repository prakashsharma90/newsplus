const crypto = require('crypto');

function buildNewsId({ title, source, publishedAt, url }) {
  return crypto.createHash('sha256').update(`${title}|${source}|${publishedAt}|${url}`).digest('hex');
}

module.exports = { buildNewsId };
