const express = require('express');

const router = express.Router();

const {
  getBlogs,
  createBlogs,
  SigleBlog,
  updateBlogs,
  deleteBlogs,
} = require('../controller/blogController');

router.route('/').get(getBlogs).post(createBlogs);
router.route('/:id').get(SigleBlog).put(updateBlogs).delete(deleteBlogs);

module.exports = router;
