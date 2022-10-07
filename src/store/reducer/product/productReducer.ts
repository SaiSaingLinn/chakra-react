import { ProductDispatchTypes, ProductType, PRODUCT_FAIL, PRODUCT_LOADING, PRODUCT_SUCCESS } from "../../actions/product/productActionTypes";

interface DefaultStateInitial {
    loading: boolean,
    product?: ProductType
};

const defaultState: DefaultStateInitial = {
    loading: false,
};

const productReducer = (state: DefaultStateInitial = defaultState, action: ProductDispatchTypes) : DefaultStateInitial => {
    switch (action.type) {
        case PRODUCT_LOADING:
            return {
                loading: true,
            }
        case PRODUCT_FAIL:
            return {
                loading: false,
            }
        case PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        default:
            return state
    }
};

export default productReducer