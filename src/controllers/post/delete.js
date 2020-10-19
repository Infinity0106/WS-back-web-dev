const { deletePost } = require("./../../models/post");

function controller(req, res) {
  deletePost(req.params.id);

  res.status(204).send();
}

module.exports = controller;
