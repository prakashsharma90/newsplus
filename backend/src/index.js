const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const env = require('./config/env');
const routes = require('./routes');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('tiny'));
app.use(rateLimit({ windowMs: 60_000, max: 120 }));
app.use('/api', routes);

app.listen(env.port, () => {
  console.log(`NewsPulse backend listening on ${env.port}`);
});
