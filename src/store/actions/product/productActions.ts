import { Dispatch } from "redux";
import { ProductDispatchTypes, PRODUCT_FAIL, PRODUCT_LOADING, PRODUCT_SUCCESS } from "./productActionTypes";
import serviceController, { routes } from "../../../controller"

const getProduct = (cate_id: string) => async (dispatch: Dispatch<ProductDispatchTypes>) => {
    dispatch({type: PRODUCT_LOADING})
    return await serviceController(`${routes.getProduct}/${cate_id}?pageSize=20&currentPage=1`)
        .then(res => {
            dispatch({
                type: PRODUCT_SUCCESS,
                payload: res.data
            })
        })
        .catch(error => dispatch({type: PRODUCT_FAIL}))
}

export const product = {
    getProduct
}