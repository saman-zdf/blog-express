require('dotenv').config();
const express = require('express');
const app = express();
const blogRouter = require('./router/blogRouter');
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// import router

app.use('/api/v1/blogs', blogRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
