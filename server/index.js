import 'dotenv/config';  // Standard practice for importing .env configuration  
import express from 'express';   
import cors from 'cors';   
import studentRoutes from './routes/studentRoutes.js';   

const app = express();   
const PORT = process.env.PORT || 8000;   

// CORS middleware to allow cross-domain communication   
app.use(cors());   

// Middleware to parse incoming JSON requests   
app.use(express.json());   

// Register student routes   
app.use('/students', studentRoutes);  

// Start the server   
app.listen(PORT, () => {   
    console.log(`Server is running on Port ${PORT}`);   
});  