const express = require("express");
const userRoutes = require("./user");
const githubRoutes = require("./github");
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
const port = 3010;
app.use("/user", userRoutes);
app.use("/github", githubRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
