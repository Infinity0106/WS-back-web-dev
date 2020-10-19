const { createPost } = require("./../../models/post");

let pass_params = ["avatar", "img", "desc", "title"];

function controller(req, res) {
  let post_body = {};
  Object.keys(req.body).forEach((key) => {
    if (!pass_params.includes(key)) return;

    post_body[key] = req.body[key];
  });

  let post_created = createPost(post_body);
  res.send(post_created);
}

module.exports = controller;
