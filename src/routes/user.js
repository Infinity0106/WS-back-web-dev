const express = require("express");
const router = express.Router();

const post_delete = require("./../controllers/post/delete");
const post_get = require("./../controllers/post/get");
const post_list = require("./../controllers/post/list");
const post_post = require("./../controllers/post/post");
const post_put = require("./../controllers/post/put");

router.get("/posts", post_list);
router.get("/posts/:id", post_get);
router.post("/posts", post_post);
router.put("/posts/:id", post_put);
router.delete("/posts/:id", post_delete);

module.exports = router;
