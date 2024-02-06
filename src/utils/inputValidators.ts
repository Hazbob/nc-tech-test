
import {validationResult, param} from "express-validator";

// Custom validation function for 'id' parameter format

export const cardIdParam = [
    param('id')
        .notEmpty()
        .withMessage('ID parameter cannot be empty')
        .matches(/^card\d{3}$/)
        .withMessage('ID must be in the format of "card" followed by 3 digits, e.g., "card001"'),
];

export function handleGetCardVal(req, res, next){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({error: "Card ID is invalid"})
        return
    }else{
        next()
    }
}


