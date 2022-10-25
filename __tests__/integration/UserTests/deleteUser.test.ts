import request from "supertest"
import App from "../../../src/app"

describe("Delete", () => {
    it('should delete a user through it Id', async () => {
        const deletePerson = await request(App).delete(`/product/InserHereAnID`).send();
        expect(deletePerson.statusCode).toBe(204);
      });
      it('should not delete a user through an unexistent Id', async () => {
        const deletePerson = await request(App).delete(`/product/InserHereaAID`).send();
        expect(deletePerson.statusCode).toBe(404);
      });
})