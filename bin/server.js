const mongoose = require('mongoose');

const app = require('../app');

const { DB_HOST, PORT = 3000, DB_NAME } = process.env;

mongoose.connect(DB_HOST)
  .then(() => app.listen(PORT, () => {
    console.log(`Successful connection to '${DB_NAME}' database`);
    console.log(`Server's running. Use our API on port: ${PORT}`);
  }))
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  })

