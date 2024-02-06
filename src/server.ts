import * as express from "express";
import cardRouter from "../routes/cardRouter";
export const app = express()

app.set('json spaces', 2);
app.use(cardRouter)

