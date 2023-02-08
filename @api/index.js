const express = require("express");
const userRoutes = require("./user");
const githubRoutes = require("./github");

const app = express();
const port = 3010;
app.use("/user", userRoutes);
app.use("/github", githubRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
