import { FilterQuery } from "mongoose";
import { IProduct } from "../interfaces/ProductInterface";
import { IUser } from "../interfaces/UserInterface";

class NotFound extends Error {
    errorStatus: number;
    constructor(field: FilterQuery<IUser> | IProduct | string) {
      super();
      this.errorStatus = 404;
      this.name = 'Not Found';
      this.message = `${field} not found`;
    }
  }
  
  export default NotFound;