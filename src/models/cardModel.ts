import * as fs from  "fs/promises"
import CustomError from "../utils/CustomError";
import {Cards} from "../types/cardTypes";





const cardCache = {};


export async function fetchAllCards(){
    try {
    const filePath = __dirname + '/../data/cards.json'
    const cardData = await fs.readFile(filePath, {encoding: "utf-8"})
    return JSON.parse(cardData)
    }catch (error){
        // console.error("Error fetching cards: ", error)//TODO implement proper logging along with business policies
        throw new CustomError(500, "Internal Server Error")
    }
}

export async function fetchAllCardTemplates(){
    try{
    const templateData = await fs.readFile(__dirname + '/../data/templates.json', "utf-8")
    return JSON.parse(templateData)

    }catch (error){
        // console.error("Error fetching templates: ", error)//TODO implement proper logging along with business policies
        throw new CustomError(500, "Internal Server Error")
    }
}


export async function fetchCardById(id: string){
    if (cardCache[id]) {
        return cardCache[id];
    }

    try {
        const cardData = await fs.readFile(__dirname + "/../data/cards.json", { encoding: "utf-8" });
        const parsedCardData = JSON.parse(cardData);

        const card = parsedCardData.find((card: Cards) => card.id === id);

        if (!card) {
            throw new CustomError(404, "Card ID does not exist");
        }
        cardCache[id] = card;

        return card;
    } catch (error) {
        // console.error("Error fetching card by ID: ", error); - //TODO implement proper logging along with business policies
        if (!(error instanceof CustomError)) {
            throw new CustomError(500, "Internal Server Error");
        }
        throw error; // Re-throw the original CustomError
    }
}