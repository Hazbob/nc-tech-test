import * as fs from  "fs/promises"
import CustomError from "../utils/CustomError";

export async function fetchAllCards(){
    try {

    const filePath = __dirname + '/../data/cards.json'
    const cardData = await fs.readFile(filePath, {encoding: "utf-8"})
    return JSON.parse(cardData)
    }catch (error){
        console.error("Error fetching cards: ", error)//ideally would go to some kind of logging service
        throw new CustomError(500, "Internal Server Error")
    }
}

export async function fetchAllCardTemplates(){
    try{
    const templateData = await fs.readFile(__dirname + '/../data/templates.json', "utf-8")
    return JSON.parse(templateData)

    }catch (error){
        console.error("Error fetching templates: ", error)//ideally would go to some kind of logging service
        throw new CustomError(500, "Internal Server Error")
    }
}