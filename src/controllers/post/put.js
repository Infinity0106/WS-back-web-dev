const { updatePost, getPost } = require("./../../models/post");

let pass_params = ["avatar", "img", "desc", "title"];

function controller(req, res) {
  console.log(req.params.id);
  let post_body = getPost(req.params.id);
  Object.keys(req.body).forEach((key) => {
    if (!pass_params.includes(key)) return;

    post_body[key] = req.body[key];
  });

  updatePost(req.params.id, post_body);
  res.status(204).send();
}

module.exports = controller;
