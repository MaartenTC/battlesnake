import express, { type Request, type Response } from "express";
import dotenv from "dotenv"
import { type Train } from "../stationadapter/Train.js";
import {Move} from "../station/Move.js"
import { TrainPicker } from "../stationadapter/TrainPicker.js";
import { type TrainData } from "../station/TrainData.js";
import { type Board } from "../station/Board.js"
dotenv.config() 
const app = express()
const port : number = Number(process.env.PORT)
const trainPicker = new TrainPicker();
const train : Train = trainPicker.getInterCity();

console.log("setup completed");

app.get('/', (req : Request, res : Response) => {
  const metadata : TrainData = train.getMetaData();
  res.status(200).send(metadata)
})

app.post("/start", (req : Request, res : Response)=>{

})
app.post("/move", (req : Request, res : Response)=>{
  const move : Move = train.move(req.body.board, req.body.you);
  console.log(`move selected:${move}`)
  res.status(200).send({"move" : move, "shout": train.shout})
})
app.post("/end", (req : Request, res : Response)=>{

})
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
server.on("error", (err) => {
  console.error("Server failed:", err);
});