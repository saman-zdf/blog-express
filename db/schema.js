const mongoose = require('mongoose');
// const { Schema } = require('mongoose');

const blogPost = new mongoose.Schema({
  title: String,
  content: String,
});

const Blog = mongoose.model('blog', blogPost);

module.exports = { Blog };
