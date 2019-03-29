const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
  res.send(`
  <h2>RDBMS Sprint Challenge</h2>
  <p>Server is running!</p>
  `)
});

module.exports = server;