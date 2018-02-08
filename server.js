require('dotenv').config();
const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/', (req, res) => {
      const query = Object.assign({}, req.query, req.params);

      return app.render(req, res, '/', query);
    });

    server.get('/feelz/:feelzId/:slug?', (req, res) => {
      const query = Object.assign({}, req.query, req.params);

      return app.render(req, res, '/feelz/show', query);
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`)
    })
  });
