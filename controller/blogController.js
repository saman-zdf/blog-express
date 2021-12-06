const { Blog } = require('../db/schema');
// query all the blogs
const getBlogs = async (req, res) => {
  let allBlogs = await Blog.find();
  res.status(200).json(allBlogs);
};

// creating a blog
const createBlogs = async (req, res) => {
  let newBlog = new Blog({
    title: req.body.title,
    content: req.body.content,
  });
  let result = await newBlog.save();
  res.status(201).json(result);
};

// query a single blog
const SigleBlog = async (req, res) => {
  const { id: blogID } = req.params;
  try {
    let singleBlog = await Blog.findOne({ _id: blogID });
    if (!singleBlog) {
      res.status(404).json({ errorMsg: `Blog not found with id: ${id}.` });
    }
    res.status(200).json(singleBlog);
  } catch (err) {
    res.status(500).json({ err, msg: `something went wrong please try again` });
  }
};

// updating a blog
const updateBlogs = async (req, res) => {
  const { id: blogID } = req.params;
  let updateSingleBlog = await Blog.findOneAndUpdate(
    { _id: blogID },
    req.body,
    { new: true, overwrite: true }
  );
  res.status(200).json(updateSingleBlog);
};
const deleteBlogs = async (req, res) => {
  const { id: blogID } = req.params;

  try {
    let deleteBlog = await Blog.findOneAndDelete({ _id: blogID });
    res.status(200).json({ msg: 'item has been deleted', data: deleteBlog });
  } catch (err) {
    res.status(404).json({ err, msg: `Blog not found with id: ${id}.` });
  }
};

module.exports = {
  getBlogs,
  createBlogs,
  SigleBlog,
  updateBlogs,
  deleteBlogs,
};
