const app = require('./app');
const dotenv = require('dotenv');
const connectDb = require('./config/database');

dotenv.config({ path: 'backend/config/config.env' });

connectDb();

app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
