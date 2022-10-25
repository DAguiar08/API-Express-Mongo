import request from "supertest"
import App from "../../../src/app"

describe("Delete", () => {
    it('should delete a Product through it Id', async () => {
        const deletePerson = await request(App).delete(`/user/InserHereAnID`).send();
        expect(deletePerson.statusCode).toBe(204);
      });
      it('should not delete a Product through an unexistent Id', async () => {
        const deletePerson = await request(App).delete(`/user/InserHereaAID`).send();
        expect(deletePerson.statusCode).toBe(404);
      });
})