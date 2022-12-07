const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const Product = require("./models/productModel");
const router = require("./routes/routes");

const connectionString = "mongodb://localhost/react-shopping-cart";

const app = express();
app.use(bodyParser.json());
app.use("/", router);

app.listen(5001, () => {
   console.log("Running on port 5001");
});

mongoose
   .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then((res) => console.log("Connection Done"));
