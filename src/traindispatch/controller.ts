import express, { type Request, type Response } from "express";
import dotenv from "dotenv"
import { Intercity } from "../station/Intercity.js";
import { type Train } from "../station/TrainInterface.js";

dotenv.config() 
const app = express()
const port = process.env.PORT || 3000
const train : Train = new Intercity()

app.get('/', (req : Request, res : Response) => {
  const train1 = {
    "apiversion" : 1,
    "author" : "NsSprinter",
    "color" : "#eeff00",
    "version" : "0.01"
  }
  res.status(200).send(train1)
})

app.post("/start", (req : Request, res : Response)=>{

})
app.post("/move", (req : Request, res : Response)=>{
  res.status(200).send(train.move())
})
app.post("/end", (req : Request, res : Response)=>{

})
app.listen(port, () => {
  console.log(`Server running locally on http://localhost:${port}`);
});