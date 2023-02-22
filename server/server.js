const express = require('express');
const app = express();
const core = require('cors');

const port = 5000;

app.use(core());
app.use(express.json());

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
