import express from "express"
import {PORT} from "./config/env.js"
import { connectDb } from "./config/db.js";
import contactRoute from "./routes/contact.route.js";
import uploadRouter from "./routes/upload.route.js"

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json())

//ENDPOINTS
app.use('/api/contact', contactRoute);
app.use("/api/upload", uploadRouter);


app.listen(PORT, () => {
    connectDb();
    console.log(`server run at port ${PORT}` );
});