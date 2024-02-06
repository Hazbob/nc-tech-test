import {fetchAllCards, fetchAllCardTemplates} from "../models/cardModel";
import * as fs from "fs/promises"


describe('cards data fetching', () => {
    test("should return all cards from datasource", async ()=>{
        const dataFilePath = __dirname +'/../data/cards.json'
        const dataFromSource = await fs.readFile(dataFilePath, {encoding: "utf-8"})
        const data = await fetchAllCards()
        expect(typeof data).not.toBe("string")
        expect(data).toEqual(JSON.parse(dataFromSource))

    })
    test("should return all cards from datasource", async ()=>{
        const dataFilePath = __dirname +'/../data/templates.json'
        const dataFromSource = await fs.readFile(dataFilePath, {encoding: "utf-8"})
        const data = await fetchAllCardTemplates()
        expect(typeof data).not.toBe("string")
        expect(data).toEqual(JSON.parse(dataFromSource))
    })
});