import Product from "../database/ProductModel";
import DuplicateKey from "../errors/DuplicateKey";
import { IProduct } from "../interfaces/ProductInterface";

export default async function ValidateDKProduct(payload: IProduct) {
    const verifyCB = await Product.findOne({bar_codes: payload.bar_codes})
    if(verifyCB) {
        throw new DuplicateKey(payload.bar_codes)
    }
}
