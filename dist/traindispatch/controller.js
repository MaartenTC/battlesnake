import express, {} from "express";
import dotenv from "dotenv";
import { Intercity } from "../station/Intercity.js";
import {} from "../station/TrainInterface.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const train = new Intercity();
app.get('/', (req, res) => {
    const train1 = {
        "apiversion": 1,
        "author": "NsSprinter",
        "color": "#eeff00",
        "version": "0.01"
    };
    res.status(200).send(train1);
});
app.post("/start", (req, res) => {
});
app.post("/move", (req, res) => {
    res.status(200).send(train.move());
});
app.post("/end", (req, res) => {
});
app.listen(port, () => {
    console.log(`Server running locally on http://localhost:${port}`);
});
//# sourceMappingURL=controller.js.map