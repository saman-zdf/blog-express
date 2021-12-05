const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// import router
const blogRouter = require('./router/blogRouter');

app.use('/api/v1/blogs', blogRouter);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
