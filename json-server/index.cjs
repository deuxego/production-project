/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }
  next();
});

server.post('/login', (req, res) => {
  const { username, password } = req.body;

  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
  const { users } = db;

  const userInBd = users.find((user) => user.username === username && user.password === password);

  if (userInBd) {
    return res.status(200).json(userInBd);
  }

  return res.status(400).json({ message: 'USER NOT FOUND' });
});

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1'
  })
);

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});

module.exports = server;
