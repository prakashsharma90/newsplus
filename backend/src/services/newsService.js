const Parser = require('rss-parser');
const axios = require('axios');
const env = require('../config/env');
const { inferCategory } = require('../utils/categorizer');

const parser = new Parser();

function normalizeArticle(item) {
  return {
    title: item.title || 'Untitled',
    description: item.contentSnippet || item.description || '',
    imageUrl: item.enclosure?.url || '',
    source: item.creator || item.source?.title || 'Google News',
    publishedAt: item.isoDate || item.pubDate || new Date().toISOString(),
    url: item.link || '',
    category: inferCategory(item.title, item.contentSnippet || item.description),
  };
}

async function fetchFromRss() {
  const feed = await parser.parseURL(env.googleNewsRssUrl);
  return feed.items.map(normalizeArticle);
}

async function fetchFromNewsApi() {
  const { data } = await axios.get('https://newsapi.org/v2/top-headlines', {
    params: { language: 'en', pageSize: 100, apiKey: env.newsApiKey },
    timeout: 8000,
  });
  return data.articles.map((item) => ({
    title: item.title,
    description: item.description || '',
    imageUrl: item.urlToImage || '',
    source: item.source?.name || 'NewsAPI',
    publishedAt: item.publishedAt,
    url: item.url,
    category: inferCategory(item.title, item.description),
  }));
}

async function fetchLatestNews() {
  if (env.newsProvider === 'newsapi') return fetchFromNewsApi();
  return fetchFromRss();
}

module.exports = { fetchLatestNews };
