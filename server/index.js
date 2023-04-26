import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleeRoutes from "./routes/dalle.route.js"
import { Configuration } from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}))

app.use('/api/v1/dalle', dalleeRoutes)



app.get('/', (req, res) => {
    res.status(200).json({message: "Hello from Dalle"})
})


app.listen(8080, () => console.log("Server has started on port 8080"))