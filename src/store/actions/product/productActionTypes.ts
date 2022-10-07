export const PRODUCT_LOADING = "PRODUCT_LOADING";
export const PRODUCT_FAIL = "PRODUCT_FAIL";
export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";

export type ProductType = {
    items: ProductItems[],
    page_size: number,
    current_page: number,
    total_page: number,
    total_count: number,
}

export type ProductItems = {
    id: number,
    name: string,
    sku: string,
    image_url: string,
}

export interface ProductLoading {
    type: typeof PRODUCT_LOADING
}

export interface ProductFail {
    type: typeof PRODUCT_FAIL
}

export interface ProductSuccess {
    type: typeof PRODUCT_SUCCESS,
    payload: ProductType
}

export type ProductDispatchTypes = ProductLoading | ProductFail | ProductSuccess