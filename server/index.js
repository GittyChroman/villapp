require('dotenv').config();
const express = require("express");
const app = express();
const apartmentRouter = require("./apis/routes/apartmentRoute");
const restaurantRouter = require("./apis/routes/restaurantRoute");
const attractionRouter=require("./apis/routes/attractionRoute")
const yaml = require("js-yaml");
const fs = require("fs");
const connectDB = require("./common/db");
const cors = require('cors');

const config = yaml.load(fs.readFileSync('./config/config.yaml', 'utf8'));

const port = config.port;

connectDB();


app.use(express.json());
app.use(cors());

app.use("/api/apartments", apartmentRouter);
app.use("/api/restaurants", restaurantRouter);
app.use("/api/attractions", attractionRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
