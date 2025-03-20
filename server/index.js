const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

app.use("/api/students");

app.listen("PORT", () => {
    console.log(`Server is running on Port ${PORT}`) 
})