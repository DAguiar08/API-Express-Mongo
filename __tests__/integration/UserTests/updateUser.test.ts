import request from "supertest"
import App from "../../../src/app"

describe("Update", () => {
    it("Should update an user with full body", async () =>{
        const user = await request(App).put("/user/6357f2e1e3b4738f09ce5faa").send({
            title: "Oleo de soja 500ml",
            description: "Oleo de soja contendo 500ml da marca soya lote X",
            departament: "Mercearia",
            brand: "Soya",
            qtd_stock: 100,
            price: 20.00,
            bar_codes: "123asd123ajge"
           })
           expect(user.statusCode).toBe(200)
    })
    it("Should update an user with partial body", async () =>{
        const user = await request(App).patch("/user/6357f2e1e3b4738f09ce5faa").send({
            name: "Davi"
           })
           expect(user.statusCode).toBe(200)
    })
    it("Should not update an user with invalid CPF", async () =>{
        const user = await request(App).patch("/user/6357f2e1e3b4738f09ce5faa").send({
            cpf: "111.111.111-11"
        })
           expect(user.statusCode).toBe(400)
    })
    it("Should update an user with invalid email", async () =>{
        const user = await request(App).put("/user/6357f2e1e3b4738f09ce5faa").send({
            email: "emailgmailcom"
           })
           expect(user.statusCode).toBe(400)
    })
})