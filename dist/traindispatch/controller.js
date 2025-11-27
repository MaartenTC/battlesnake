import express, {} from "express";
import dotenv from "dotenv";
import {} from "../stationadapter/Train.js";
import { Move } from "../station/Move.js";
import { TrainPicker } from "../stationadapter/TrainPicker.js";
import {} from "../station/TrainData.js";
dotenv.config();
const app = express();
const port = Number(process.env.PORT);
const train = new TrainPicker().getInterCity();
console.log("setup completed");
app.get('/', (req, res) => {
    const metadata = train.getMetaData();
    res.status(200).send(metadata);
});
app.post("/start", (req, res) => {
});
app.post("/move", (req, res) => {
    const move = train.move();
    console.log(`move selected:${move}`);
    res.status(200).send(train.move());
});
app.post("/end", (req, res) => {
});
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
server.on("error", (err) => {
    console.error("Server failed:", err);
});
//# sourceMappingURL=Controller.js.map