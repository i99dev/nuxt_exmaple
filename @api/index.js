const express = require("express");
const userRoutes = require("./user");

const app = express();
const port = 3010;
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
