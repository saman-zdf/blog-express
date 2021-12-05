## How to make database and server in sync?

first we need to create a function for mongoose connect, we don't need to invoke it in connect file.
after creating a function for mongoose connect we can export the function and import it in the app.js

```js
const connectDB = (url) => {
  mongoose.connect(url);
};

module.exports = connectDB;
```

in app.js we need to require the connectDB and create another function at the bottom of the file to make the database and server sync. like:

```js
const connectDB = require('./db/connect');

// bottom of app.js
const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
```
