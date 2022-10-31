import request from "supertest"
import App from "../../../src/app"

describe("Update", () => {
    it("Should update an user with full body", async () =>{
        const user = await request(App).post("/user").send({
            name: "Davi",
            password: "strongpasswordhere",
            cpf: "972.513.890-29",
            email: "creativeemailhere@gmail.com",
            birthday: "15/10/2022"
           })
        const Update = await request(App).put(`/user/${user.body._id}`).send({
            name: "Aguiar",
            password: "strongpasswordhere",
            cpf: "330.145.010-50",
            email: "reativeemailhere@gmail.com",
            birthday: "15/10/2022"
           })
           expect(Update.statusCode).toBe(200)
    })
    it("Should not update an user with invalid CPF", async () =>{
        const user3 = await request(App).post("/user").send({
            name: "Davi",
            password: "strongpasswordhere",
            cpf: "838.465.026-85",
            email: "creaere@gmail.com",
            birthday: "15/10/2022"
           })
        const Update3 = await request(App).patch(`/user/${user3.body._id}`).send({
            cpf: "111.111.111-11"
        })
           expect(Update3.statusCode).toBe(400) 
    })
    it("Should update an user with invalid email", async () =>{
        const user4 = await request(App).post("/user").send({
            name: "Davi",
            password: "strongpasswordhere",
            cpf: "236.433.218-48",
            email: "crlhere@gmail.com",
            birthday: "15/10/2022"
           })
        const Update4 = await request(App).patch(`/user/${user4.body._id}`).send({
            email: "emailgmailcom"
           })
           expect(Update4.statusCode).toBe(400)
    })
    it("Should update with partial body", async () => {
        const user2 = await request(App).post("/user").send({
            name: "Davi",
            password: "strongpasswordhere",
            cpf: "046.761.170-00",
            email: "cere@gmail.com",
            birthday: "15/10/2022"
        })
        const Update2 = await request(App).patch(`/user/${user2.body._id}`).send({
            name: "DaviA"
        })
        expect(Update2.statusCode).toBe(200)
    })
})