import request from "supertest"
import App from "../../../src/app"

describe("Create", () => {
    it("Should create a new user", async () => {
       const user = await request(App).post("/user").send({
        name: "Davi",
        password: "strongpasswordhere",
        cpf: "050.829.910-19",
        email: "creativeemailhere@gmail.com",
        birthday: "15/10/2022"
       })
       expect(user.statusCode).toBe(201)
    })

    it("Should not create a new user with invalid CPF", async () => {
        const user = await request(App).post("/user").send({
         name: "Davi",
         password: "strongpasswordhere",
         cpf: "111.111.111-11",
         email: "creativeemailhere@gmail.com",
         birthday: "10/10/2022"
        })
        expect(user.statusCode).toBe(400)
     })

     it("Should not create a new user with invalid email", async () => {
        const user = await request(App).post("/user").send({
         name: "Davi",
         password: "strongpasswordhere",
         cpf: "050.829.910-19",
         email: "creativeemailheregmailcom",
         birthday: "15/10/2022"
        })
        expect(user.statusCode).toBe(400)
     })

     it("Should not create a new user with empty fields", async () => {
        const user = await request(App).post("/user").send({
         name: "",
         password: "strongpasswordhere",
         cpf: "050.829.910-19",
         email: "",
         birthday: "15/10/2022"
        })
        expect(user.statusCode).toBe(400)
     })

})
