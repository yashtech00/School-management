const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8000

//cors Middleware used ensuring cross domain communication
app.use(cors());

//express.json is also a middleware used to parse the incoming request
app.use(express.json());


app.use("/api/students",StudentRoutes);


app.listen("PORT", () => {
    console.log(`Server is running on Port ${PORT}`) 
})