const express = require("express")

const router = express.Router()

const {  getBlogs, 
  createBlogs, 
  getSigleBlogs,
  updateBlogs, 
  deleteBlogs} = require('../controller/blogController')


router.route("/").get(getBlogs).post(createBlogs)
router.route('/:id').get(getSigleBlogs).put(updateBlogs).delete(deleteBlogs)

module.exports = router