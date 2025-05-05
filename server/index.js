require('dotenv').config();
const express = require("express");
const app = express();
const apartmentRouter = require("./apis/routes/apartmentRoute");
const restaurantRouter = require("./apis/routes/restaurantRoute");
const attractionRouter=require("./apis/routes/attractionRoute")
const yaml = require("js-yaml");
const fs = require("fs");
const connectDB = require("./common/db")

const config = yaml.load(fs.readFileSync('./config/config.yaml', 'utf8'));

const port = config.port;

connectDB();


app.use("/apis", apartmentRouter);
app.use("/apis", restaurantRouter);
app.use("/apis", attractionRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
