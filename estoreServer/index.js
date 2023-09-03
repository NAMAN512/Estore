const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const product = require('./Routes/product');
app.use("/product/api/", product);

app.use("/",express.static("Uploads"));

const PORT = 9000;
const server = app.listen(PORT, () => {
    console.log("App is running on port - " + PORT);
})