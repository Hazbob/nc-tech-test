import * as express from 'express';
import {handleFetchCardById, handleFetchCards} from "../controllers/cardController";
import {cardIdParam, handleGetCardVal} from "../utils/inputValidators";

const cardRouter = express.Router();

cardRouter.get('/cards', handleFetchCards)

cardRouter.get('/cards/:id', cardIdParam, handleGetCardVal, handleFetchCardById)


export default cardRouter




