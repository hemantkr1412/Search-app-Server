import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/displayAdds";
import cors from "cors";


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/search",router); 
app.get("/", (req, res) => {
    res.send("Welcome to the Search App");
});

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error.message);
});
