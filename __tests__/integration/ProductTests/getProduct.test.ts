import request from "supertest"
import App from "../../../src/app"

describe("List", () => {
    it("Should list all Products", async () => {
        const listPerson = await request(App).get('/products');
        expect(listPerson.statusCode).toBe(200)
    })

    it("Should list a user by ID", async () => {
        const listPerson = await request(App).get(`/product/63486504e72eb0187b089b9a`).send();
        expect(listPerson.statusCode).toBe(200)
    })
    
    it("Should not list a user by a wrong ID", async () => {
        const listPerson = await request(App).get(`/product/6352acdf24a0f1e8a62f1863`).send();
        expect(listPerson.statusCode).toBe(404)
    })
    it("Should list lowstock product", async () => {
        const listPerson = await request(App).get(`/products/lowstock`).send();
        expect(listPerson.statusCode).toBe(200)
    })
})