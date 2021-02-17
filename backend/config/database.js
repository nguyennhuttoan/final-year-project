const mongoose = require('mongoose');

const connectDb = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((con) => {
      console.log(`MongoDB Db connected with host: ${con.connection.host}`);
    });
};

module.exports = connectDb;
