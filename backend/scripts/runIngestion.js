const { ingestNews } = require('../src/services/ingestionService');

ingestNews()
  .then((result) => {
    console.log('Ingestion completed:', result);
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
