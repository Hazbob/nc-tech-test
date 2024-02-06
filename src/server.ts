import * as express from "express";
import cardRouter from "./routes/cardRouter";
import errorHandler from "./controllers/errorController";
export const app = express()

app.set('json spaces', 2);
app.use(cardRouter)

app.use(errorHandler)

