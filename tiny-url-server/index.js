import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import crypto from "crypto"
import dotenv from "dotenv"

import TinyUrlRouter from './Routers/TinyUrlRouter.js'
import connectDB from './ConnectToDB.js'

connectDB()
const app = express()
const port = 3001
dotenv.config();



app.use(bodyParser.json())

app.use(bodyParser.text())

app.use(cors());

const logMiddleware = (req, res, next) => {
    req.UUID = crypto.randomUUID();
    console.log(`request ${req.UUID} started`)
    next()
}

app.use("/", (req, res, next) => {
    req.UUID = crypto.randomUUID();
    console.log(`request ${req.UUID} started`)
    next()
})
app.use('/tinyUrl', TinyUrlRouter)

app.get('/isAlive',logMiddleware, (req, res) => {
    const alive = "OK"
    res.json({ alive });
  });

app.listen(port, () => {
    console.log(`this app listing on http://localhost:${port}`)
})
