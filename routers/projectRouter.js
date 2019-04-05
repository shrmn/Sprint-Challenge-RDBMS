const express = require('express');
const pModel = require('../data/helpers/projectModel.js');

const router = express.Router();

// get project by id
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const project = await pModel.findByID(id);
    res
      .status(200)
      .json(project);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error occurred while retrieving project: ${error}` });
  };
});

// post new project
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res
      .status(400)
      .json({ message: `Bad request. Both a name and description are required.` });
  };
  try {
    newProject = await pModel.postProject(req.body);
    res
      .status(201)
      .json({ message: `New project added: `, newProject });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error occurred while adding project`, error });
  };
});

module.exports = router;