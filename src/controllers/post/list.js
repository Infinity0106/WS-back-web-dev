const { getPosts } = require("./../../models/post");

function controller(req, res) {
  let all_posts = getPosts();
  //convert object to array of id
  let posts_send = Object.keys(all_posts).map((key) => {
    let post = all_posts[key];
    post["id"] = key;
    return post;
  });

  res.send(posts_send);
}

module.exports = controller;
