import request from "supertest"
import App from "../../../src/app"

describe("Delete", () => {
    it('should delete a user through it Id', async () => {
      const user = await request(App).post("/user").send({
        name: "Davi",
        password: "strongpasswordhere",
        cpf: "665.111.430-15",
        email: "creatiemailhere@gmail.com",
        birthday: "15/10/2022"
       })
        const deletePerson = await request(App).delete(`/user/${user.body._id}`).send();
        expect(deletePerson.statusCode).toBe(204);
      });
      it('should not delete a user through an unexistent Id', async () => {
        const deletePerson = await request(App).delete(`/user/635aa05585f7a6850d21c2ce`).send();
        expect(deletePerson.statusCode).toBe(404);
      });
})