const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');

server.use(middlewares);

// Add custom routes before JSON Server router
server.post('/login', (req, res) => {
  res.jsonp({ loginDate: Date.now() });
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
