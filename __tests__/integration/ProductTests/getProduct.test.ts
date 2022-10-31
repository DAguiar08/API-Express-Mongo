import request from "supertest"
import App from "../../../src/app"

describe("List", () => {
    it("Should list all Products", async () => {
        const listPerson = await request(App).get('/products');
        expect(listPerson.statusCode).toBe(200)
    })

    it("Should list a Product by ID", async () => {
        const product = await request(App).post("/product").send({
            title: "Oleo de soja 500ml",
            description: "Oleo de soja contendo 500ml da marca soya lote X",
            departament: "Mercearia",
            brand: "Soya",
            qtd_stock: 100,
            price: 20.00,
            bar_codes: "qwe123erttyu7"
           })
        const listPerson = await request(App).get(`/product/${product.body._id}`).send();
        expect(listPerson.statusCode).toBe(200)
    })
    
    it("Should not list a Product by a wrong ID", async () => {
        const listPerson = await request(App).get(`/product/6352acdf24a0f1e8a62f1863`).send();
        expect(listPerson.statusCode).toBe(404)
    })
    it("Should list lowstock product", async () => {
        const listPerson = await request(App).get(`/products/lowstock`).send();
        expect(listPerson.statusCode).toBe(200)
    })
})