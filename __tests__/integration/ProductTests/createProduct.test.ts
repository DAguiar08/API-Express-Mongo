import request from "supertest"
import App from "../../../src/app"

describe("Create", () => {
    it("Should create a new Product", async () => {
       const user = await request(App).post("/product").send({
        title: "Oleo de soja 500ml",
        description: "Oleo de soja contendo 500ml da marca soya lote X",
        departament: "Mercearia",
        brand: "Soya",
        qtd_stock: 100,
        price: 20.00,
        bar_codes: "123asd123ajge"
       })
       expect(user.statusCode).toBe(201)
    })

    it("Should not create a Product with price 0", async () => {
        const user = await request(App).post("/product").send({
            title: "Oleo de soja 500ml",
            description: "Oleo de soja contendo 500ml da marca soya lote X",
            departament: "Mercearia",
            brand: "Soya",
            qtd_stock: 100,
            price: 0,
            bar_codes: "123asd123qwty"
        })
        expect(user.statusCode).toBe(400)
     })

     it("Should not create a new Product with duplicate bar_codes", async () => {
        const user = await request(App).post("/product").send({
            title: "Oleo de soja 500ml",
            description: "Oleo de soja contendo 500ml da marca soya lote X",
            departament: "Mercearia",
            brand: "Soya",
            qtd_stock: 100,
            price: 20.00,
            bar_codes: "123asd123ajge"
        })
        expect(user.statusCode).toBe(400)
     })

     it("Should not create a new Product with empty fields", async () => {
        const user = await request(App).post("/product").send({
            title: "",
            description: "Oleo de soja contendo 500ml da marca soya lote X",
            departament: "Mercearia",
            brand: "",
            qtd_stock: 100,
            price: 20.00,
            bar_codes: "123asd123ajge"
        })
        expect(user.statusCode).toBe(400)
     })

})