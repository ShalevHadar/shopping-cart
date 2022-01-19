// imports
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const db = require("./mysql/client");
const port = process.env.PORT;
const app = express();
const userRoutes = require("./user/routes");
const productRoutes = require("./product/routes");

// middleware
app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(productRoutes);

// connection to DB:

db.connect((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Starting server on port: ${port}`);
    });
  } else {
    throw new Error("Can't connect to the db");
  }
});
