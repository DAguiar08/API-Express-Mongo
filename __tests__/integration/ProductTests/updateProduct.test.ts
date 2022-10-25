import request from "supertest"
import App from "../../../src/app"

describe("Update", () => {
    it("Should update an Product with full body", async () =>{
        const product = await request(App).put("/product/InsertIDHere").send({
            title: "Oleo de oliva 500ml",
            description: "Oleo de soja contendo 500ml da marca soya lote X",
            departament: "Mercearia",
            brand: "Soya",
            qtd_stock: 100,
            price: 20.00
           })
           expect(product.statusCode).toBe(200)
    })
    it("Should update an Product with partial body", async () =>{
        const product = await request(App).patch("/product/InsertIdHere").send({
            title: "Picanha"
           })
           expect(product.statusCode).toBe(200)
    })
    it("Should not update an Product with price 0", async () =>{
        const product = await request(App).patch("/product/InsertIdHere").send({
            price: 0
        })
           expect(product.statusCode).toBe(400)
    })
})