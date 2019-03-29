const db = require('../dbConfig.js');

module.exports = {
  find: function find() {
    return db('projects');
  },

  findById: function findByID(id) {
    return db('projects')
      .where({ id })
      .first();
  },

  postProject: function postProject(project) {
    return db('projects').insert(project);
  }

};
