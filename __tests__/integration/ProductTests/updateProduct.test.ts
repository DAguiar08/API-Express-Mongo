import request from "supertest"
import App from "../../../src/app"

describe("Update", () => {
    it("Should update an Product with full body", async () =>{
        const product = await request(App).post("/product").send({
            title: "Oleo de soja 500ml",
            description: "Oleo de soja contendo 500ml da marca soya lote X",
            departament: "Mercearia",
            brand: "Soya",
            qtd_stock: 100,
            price: 20.00,
            bar_codes: "1239zd123ajge"
           })
        const Update = await request(App).put(`/product/${product.body._id}`).send({
            title: "Arroz",
            description: "Arroz",
            departament: "Mercearia",
            brand: "BlueVille",
            qtd_stock: 100,
            price: 20.00
           })
           expect(Update.statusCode).toBe(200)
    })
    it("Should update an Product with partial body", async () =>{
        const product2 = await request(App).post("/product").send({
            title: "Oleo de soja 500ml",
            description: "Oleo de soja contendo 500ml da marca soya lote X",
            departament: "Mercearia",
            brand: "Soya",
            qtd_stock: 100,
            price: 20.00,
            bar_codes: "1wn9zd123ajge"
           })
           const Update = await request(App).patch(`/product/${product2.body._id}`).send({
            title: "Picanha"
           })
           expect(Update.statusCode).toBe(200)
    })
    it("Should not update an Product with price 0", async () =>{
        const product3 = await request(App).post("/product").send({
            title: "Oleo de soja 500ml",
            description: "Oleo de soja contendo 500ml da marca soya lote X",
            departament: "Mercearia",
            brand: "Soya",
            qtd_stock: 100,
            price: 20.00,
            bar_codes: "1wn9zd123ajge"
           })
           const Update = await request(App).put(`/product/${product3.body._id}`).send({
            price: 0
        })
           expect(Update.statusCode).toBe(400)
    })
})