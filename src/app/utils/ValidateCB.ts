import ProductModel from "../database/ProductModel";
import { IProduct } from "../interfaces/ProductInterface";


async function ValidateCB(payload: IProduct) {
    const error = await ProductModel.findOne({
        bar_codes: payload.bar_codes,
    })
    if(error) {
        throw("This bar codes already exists");
    }
}

export default ValidateCB