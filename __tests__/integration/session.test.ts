import request from "supertest"
import App from "../../src/app"

describe("auth", () => {
    it("description here", async () => {
       const user = await request(App).post("/product").send({
        title: "Oleo de soja 500ml",
        description: "Oleo de soja contendo 500ml da marca soya lote X",
        departament: "Mercearia",
        brand: "Soya",
        qtd_stock: 100,
        price: 20.00,
        bar_codes: "asddfg123rty7"
       })
       expect(user.statusCode).toBe(201)
    })
})
