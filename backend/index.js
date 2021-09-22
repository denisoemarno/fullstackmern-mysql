import express from "express";
import db from "./config/databese.js";
import ProductRouter from "./routes/index.js";
import cors from "cors";


const app = express();

try {
    await db.authenticate();
    console.log('Database Connected');
} catch (error) {
    console.error('Connection Error', error)
}
app.use(cors());
app.use(express.json());
app.use('/products',ProductRouter);


app.listen(5000, () => console.log('Server running at port 5000'));

