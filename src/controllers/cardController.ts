import {Request, Response, NextFunction} from "express";
import {fetchAllCards, fetchAllCardTemplates, fetchCardById} from "../models/cardModel";
import {Cards, Template} from "../types/cardTypes";


export async function handleFetchCards  (req: Request, res: Response, next: NextFunction) {
    try {

    const cardsData = await fetchAllCards()
        if(cardsData.length === 0){
            res.status(200).json({cards: []})
        }

    const templateData = await fetchAllCardTemplates()
        const templatesById = templateData.reduce((obj: { [x: string]: Template; }, template: Template)=>{
            obj[template.id] = template
            return obj
        }, {})
    const formattedCards = cardsData.map((card: Cards)=>{
        return {
            title: card.title,
            imageUrl: templatesById[card.pages[0].templateId].imageUrl,
            card_id: card.id
        }
    })


    res.status(200).json({cards: formattedCards})
    }catch (error){
        next(error)
    }
}

export async function handleFetchCardById (req: Request, res: Response, next: NextFunction){
    try{

    const {id} = req.params

    const card = await fetchCardById(id)
    res.status(200).json({card: card})
    }catch (error){
        next(error)
    }
}