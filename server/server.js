const express = require('express');
const app = express();
const core = require('cors');

require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5000;

//use middleware
app.use(core());
app.use(express.json());

//using routes
app.use(require('./routes/route'));

app.listen(port, () => {
  console.log(`server is running on port: http://localhost:${port}`);
});
