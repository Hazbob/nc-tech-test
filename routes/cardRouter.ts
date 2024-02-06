import * as express from 'express';

const cardRouter = express.Router();

cardRouter.get('/cards', async () => {
    // respond with a list of cards
})

cardRouter.get('/cards/:cardId/:sizeId?', () => {
    // respond with card by id
})


export default cardRouter




