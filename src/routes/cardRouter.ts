import * as express from 'express';
import {handleFetchCards} from "../controllers/cardController";

const cardRouter = express.Router();

cardRouter.get('/cards', handleFetchCards)

cardRouter.get('/cards/:cardId/:sizeId?', () => {
    // respond with card by id
})


export default cardRouter




