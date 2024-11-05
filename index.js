const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js")
const app = express();
require('dotenv').config();

//middleware
app.use(express.json());

//routes
app.use('/api/products', productRoute);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((error) => {
        console.log("Connection failed" + error)
    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listenning on port ${port}`);
});