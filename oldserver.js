const fetch = require('isomorphic-fetch');

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

const validSlug = async slug => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3&content_type=guide&fields.slug=${slug}`
  );
  const json = await res.json();
  return json.items.length > 0;
};

app
  .prepare()
  .then(() => {
    const server = express();
    server.get('/:slug', (req, res) => {
      validSlug(req.params.slug).then(response => {
        if (response) {
          const actualPage = '/post';
          const queryParams = { slug: req.params.slug };
          app.render(req, res, actualPage, queryParams);
        } else {
          res.redirect('/introduction');
        }
      });
    });

    server.get('/', (req, res) => {
      res.redirect('/introduction');
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) throw err;
      console.log('> Ready');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
