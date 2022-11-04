import request from "supertest"
import App from "../../../src/app";

it("Should login an user", async () => {
    await request(App).post("/user").send({
        name: "Davi",
        password: "strongpasswordhere",
        cpf: "050.829.910-19",
        email: "creativeemailhere@gmail.com",
        birthday: "15/10/2022"
       })
    const login = await request(App).post("/login").send(
        {
            email: "creativeemailhere@gmail.com",
            password: "strongpasswordhere"
        }
    )
    expect(login.statusCode).toBe(200)
})

it("Should return an Auth token", async () => {
    const login2 = await request(App).post("/login").send({
            email: "creativeemailhere@gmail.com",
            password: "strongpasswordhere"
    })
    expect(login2.body).toHaveProperty("token")
})


