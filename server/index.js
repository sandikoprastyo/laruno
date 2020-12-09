const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./router/index.js');

require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* app.use('/', (req, res) => {
  res.json({ message: 'ok' });
}); */

app.use('/', apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`server listening http://localhost:${process.env.PORT}/provinsi`);
});
