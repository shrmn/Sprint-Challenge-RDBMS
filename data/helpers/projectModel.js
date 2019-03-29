const db = require('../dbConfig.js');

module.exports = {
  find: function find() {
    return db('projects');
  },

  findByID: function findByID(id) {
    return db('projects')
      .where({ id })
      .first();
  },

  postProject: function postProject(project) {
    return db('projects').insert(project);
  }

};
