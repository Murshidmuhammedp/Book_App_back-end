import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import bookRouter from './Routes/bookRoutes.js'

dotenv.config()
const app = express()

app.use(express.json());

app.use(cors({
    // origin: "http://localhost:5173",
    origin: "https://bookverse-app.vercel.app",
    credentials: true
}));

app.use('/api/v1', bookRouter);

mongoose.connect(process.env.DB)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

const PORT = process.env.PORT || 5286

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});