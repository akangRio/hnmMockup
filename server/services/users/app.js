require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routers");
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`ms-Users listening to port ${port}`);
});

module.exports = app;
