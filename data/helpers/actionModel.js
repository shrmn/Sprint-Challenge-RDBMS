const db = require('../dbConfig.js');

module.exports = {
  find: function find() {
    return db('actions');
  },

  findByID: function findByID(id) {
    return db('actions')
      .where({ id })
      .first();
  },

  postAction: function postAction(action) {
    return db('actions')
      .insert(action);
  }

};