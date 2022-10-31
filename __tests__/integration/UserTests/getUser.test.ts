import request from "supertest"
import App from "../../../src/app"

describe("List", () => {
    it("Should list all users", async () => {
        const listPerson = await request(App).get('/users');
        expect(listPerson.statusCode).toBe(200)
    })

    it("Should list a user by ID", async () => {
        const user = await request(App).post("/user").send({
            name: "Davi",
            password: "strongpasswordhere",
            cpf: "050.829.930-62",
            email: "eativeemailhere@gmail.com",
            birthday: "15/10/2022"
           })
        const listPerson = await request(App).get(`/user/${user.body._id}`).send();
        expect(listPerson.statusCode).toBe(200)
    })
    
    it("Should not list a user by a wrong ID", async () => {
        const listPerson = await request(App).get(`/user/6357f244de7922ce8ef592ce`).send();
        expect(listPerson.statusCode).toBe(404)
    })
})