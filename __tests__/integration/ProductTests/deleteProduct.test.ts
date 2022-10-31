import request from "supertest"
import App from "../../../src/app"

describe("Delete", () => {
    it('should delete a Product through it Id', async () => {
      const product = await request(App).post("/product").send({
        title: "Oleo de soja 500ml",
        description: "Oleo de soja contendo 500ml da marca soya lote X",
        departament: "Mercearia",
        brand: "Soya",
        qtd_stock: 100,
        price: 20.00,
        bar_codes: "123asd123ao5e"
       })
        const deletePerson = await request(App).delete(`/product/${product.body._id}`).send();
        expect(deletePerson.statusCode).toBe(204);
      });
      it('should not delete a Product through an unexistent Id', async () => {
        const deletePerson = await request(App).delete(`/product/635be91355221dfb16795cfe`).send();
        expect(deletePerson.statusCode).toBe(404);
      });
})