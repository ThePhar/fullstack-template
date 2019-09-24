import * as mongoose from 'mongoose';
import app from './app';

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
const port = process.env.PORT || 3000;

(async () => {
  // Connect to the database.
  await mongoose.connect(url, { useNewUrlParser: true });

  // Start listing on our express application.
  app.listen(port, () => console.log('Express listing on port 3000'));
})();
