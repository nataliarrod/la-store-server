require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const productRouter = require("./src/routes/product");

const database = require("./src/database");

const port = process.env.PORT || 8000;
const app = express();

database();
// app.use(cors());
app.use(express.json());

app.use("/products", productRouter);

app.listen(port, () => console.log("App listening localhost:8000"));