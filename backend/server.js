const app = require('./app');
const dotenv = require('dotenv');
const connectDb = require('./config/database');

process.on('uncaughtException', (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down server due to uncaught exception');
  process.exit(1);
});

dotenv.config({ path: 'backend/config/config.env' });

connectDb();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

process.on('unhandledRejection', (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down the server due to Unhandled Promise rejection');
  server.close(() => {
    process.exit(1);
  });
});
