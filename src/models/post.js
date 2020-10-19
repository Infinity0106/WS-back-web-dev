const { v4: uuidv4 } = require("uuid");

let POSTS = {};

const getPosts = () => {
  return POSTS;
};

const getPost = (key) => {
  return POSTS[key];
};

const createPost = (values) => {
  let key = uuidv4();
  POSTS[key] = values;
  values["id"] = key;
  return values;
};

const updatePost = (key, values) => {
  POSTS[key] = values;
  return POSTS[key];
};

const deletePost = (key) => {
  delete POSTS[key];
};

module.exports = { createPost, updatePost, deletePost, getPosts, getPost };
