import { IProduct } from "../interfaces/ProductInterface";
import { IUser } from "../interfaces/UserInterface";

class BadRequest extends Error {
    errorStatus: number;
    constructor(field: IUser | IProduct) {
      super();
      this.errorStatus = 400;
      this.name = 'Bad Request';
      this.message = `${field}`;
    }
  }
  
  export default BadRequest;