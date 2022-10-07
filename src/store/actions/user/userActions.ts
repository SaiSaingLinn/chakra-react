import axios from "axios";
import { Dispatch } from "redux";
import { UserDispatchTypes, USER_FAIL, USER_LOADING, USER_SUCCESS } from "./userActionTypes";

const getUser = (user: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        dispatch({
            type: USER_LOADING
        })

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${user}`);
        
        dispatch({
            type: USER_SUCCESS,
            payload: res.data
        })
    } catch(e) {
        dispatch({
            type: USER_FAIL
        })
    }
}

export const user = {
    getUser
}