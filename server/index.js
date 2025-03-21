import express, { json } from "express";
const app = express();
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js"

const PORT = process.env.PORT || 8000

//cors Middleware used ensuring cross domain communication
app.use(cors());

//express.json is also a middleware used to parse the incoming request
app.use(express.json());


app.use("/students",studentRoutes);


app.listen("PORT", () => {
    console.log(`Server is running on Port ${PORT}`) 
})