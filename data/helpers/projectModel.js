const db = require('../dbConfig.js');

module.exports = {
  find,
  findByID,
  insert
};

function find() {
  return db('projects');
};

function findByID(id) {
  return db('projects')
    .where({ id })
    .first();
}