import * as request from 'supertest'
import { app } from '../server'


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
  //   should specify json in the content type header
})


