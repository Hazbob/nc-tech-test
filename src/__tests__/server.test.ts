import * as request from 'supertest'
import { app } from '../server'
describe("Invalid Path test", ()=>{
  test("should return with status code 404 and a message 'Path does not exist'", async ()=>{
    const response = await request(app).get("/paththatdoesnotandwillneverexist").expect('Content-Type', /json/).expect(404)
    const {body} = response
    expect(body.error).toBe("Path does not exist")
  })
})

describe("GET /cards", ()=>{
  // should return an array of card objects and 200 response code
  test("should return a json object, with array of card objects and 200 status code", async()=>{
    const response = await request(app).get("/cards").expect('Content-Type', /json/).expect(200)
    const {body} = response
    //body here should be an object with an array of cards

    expect(Array.isArray(body.cards)).toBe(true);
  })
  //   those card objects should be of the correct schema as specified
  test("cards should have properties of title, image_url, card_id", async ()=>{
    const response = await request(app).get("/cards").expect('Content-Type', /json/).expect(200)
    const {body} = response
    //asserting each card matches the format specified in spec
    body.cards.forEach(card=>{
      expect(card).toMatchObject({
        title: expect.any(String),
        imageUrl: expect.any(String),
        card_id: expect.any(String)
      })
    })
  })
})


describe("GET /cards/:id", ()=>{
  test("should return a json object, with a card object schema and 200 status code", async ()=>{
    const response = await request(app).get("/cards/card001").expect('Content-Type', /json/).expect(200)
    const {body} = response
    const expectedCardSchema = {
      id: expect.any(String),
      title: expect.any(String),
      sizes: expect.arrayContaining(['sm', 'md', 'gt']),
      basePrice: expect.any(Number),
      pages: expect.arrayContaining([
      {
        title: expect.any(String),
        templateId: expect.any(String),
      },
    ]),
  };
    expect(body.card).toMatchObject(expectedCardSchema)

  })

  test("should return the correct data, from the datasource", async ()=>{
    const response = await request(app).get("/cards/card001").expect('Content-Type', /json/).expect(200)
    const {body} = response
    const expectedOutputCard = {
      "id": "card001",
      "title": "card 1 title",
      "sizes": [
        "sm",
        "md",
        "gt"
      ],
      "basePrice": 200,
      "pages": [
        {
          "title": "Front Cover",
          "templateId": "template001"
        },
        {
          "title": "Inside Left",
          "templateId": "template002"
        },
        {
          "title": "Inside Right",
          "templateId": "template003"
        },
        {
          "title": "Back Cover",
          "templateId": "template004"
        }
      ]
    }
    expect(body.card).toEqual(expectedOutputCard)

  })

  test("should return an error with 'Card Not Found if a non existent card_id is passed'", async ()=>{
    const response = await request(app).get("/cards/card999").expect('Content-Type', /json/).expect(404)
    const {body} = response
    expect(body.error).toBe("Card ID does not exist")
  })
  test("should return an error with 'Card Not Found if an ID passed of the wrong format", async ()=>{
    const response = await request(app).get("/cards/thisisnttherightformat").expect('Content-Type', /json/).expect(400)
    const {body} = response
    expect(body.error).toBe("Card ID is invalid")
  })
})