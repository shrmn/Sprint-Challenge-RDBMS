const express = require('express');
const aModel = require('../data/helpers/actionModel.js');

const router = express.Router();

// post new action
router.post('/', async (req, res) => {
  const { project_id, description, notes } = req.body;
  if (!project_id || !description || !notes) {
    res
      .status(400)
      .json({ message: `Bad request. Project ID, description, and notes are required.` });
  };
  try {
    newAction = await aModel.postAction(req.body);
    res
      .status(201)
      .json({ message: `New action added: `, newAction });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error occurred while adding action`, error });
  };
});

module.exports = router;