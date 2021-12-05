const getBlogs = (req, res) => {
  res.status(200).json({ success: true, msg: 'All blogs' });
};
const createBlogs = (req, res) => {
  res.status(200).json({ success: true, msg: 'create blogs', data: req.body });
};

const getSigleBlogs = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ success: true, msg: `Single blog with id: ${id}` });
};
const updateBlogs = (req, res) => {
  const { id } = req.params;
  res
    .status(200)
    .json({ success: true, msg: `Update blog with id: ${id}`, data: req.body });
};
const deleteBlogs = (req, res) => {
  const { id } = req.params;
  res
    .status(200)
    .json({ success: true, msg: `Single blog with id: ${id}`, data: req.body });
};

module.exports = {
  getBlogs,
  createBlogs,
  getSigleBlogs,
  updateBlogs,
  deleteBlogs,
};
