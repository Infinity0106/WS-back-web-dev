const { getPost } = require("./../../models/post");

function controller(req, res) {
  let post = getPost(req.params.id);
  post["id"] = req.params.id;

  res.send(post);
}

module.exports = controller;
