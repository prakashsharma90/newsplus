const categoryKeywords = {
  technology: ['ai', 'software', 'tech', 'startup', 'cloud'],
  business: ['stock', 'market', 'finance', 'economy', 'business'],
  sports: ['cricket', 'football', 'olympics', 'league', 'sports'],
  entertainment: ['movie', 'music', 'celebrity', 'film', 'show'],
  health: ['health', 'hospital', 'wellness', 'medical', 'vaccine'],
  politics: ['election', 'policy', 'government', 'minister', 'politics'],
};

function inferCategory(title = '', description = '') {
  const input = `${title} ${description}`.toLowerCase();
  for (const [category, words] of Object.entries(categoryKeywords)) {
    if (words.some((word) => input.includes(word))) {
      return category;
    }
  }
  return 'top-headlines';
}

module.exports = { inferCategory };
