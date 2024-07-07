import express from "express";
import TinyUrlController from "../Controllers/TinyUrlController.js";

const TinyUrlRouter=express.Router();

TinyUrlRouter.get("/:shortTinyUrl",TinyUrlController.redirectTinyUrl)

TinyUrlRouter.post("/",TinyUrlController.addTinyUrl)


export default TinyUrlRouter;
