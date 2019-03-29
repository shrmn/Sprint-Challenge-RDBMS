const db = require('../dbConfig.js');
const mappers = require('./mappers.js');

module.exports = {
  find: function find() {
    return db('projects');
  },

  findByID: async function findByID(id) {
    const query = db('projects as p');

    query.where('p.id', id).first();

    const promises = [query, this.getProjectActions(id)];

    return Promise.all(promises)
      .then(function (results) {
        const [project, actions] = results;
        project.actions = actions;

        return mappers.projectToBody(project);
      })
  },

  getProjectActions: function (projectID) {
    return db('actions')
      .where('project_id', projectID)
      .then(actions => actions.map(action => mappers.actionToBody(action)));
  },

  postProject: function postProject(project) {
    return db('projects').insert(project);
  }

};
