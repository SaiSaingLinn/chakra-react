import { UserDispatchTypes, UserType, USER_FAIL, USER_LOADING, USER_SUCCESS } from "../actions/UserActionTypes";

interface DefaultStateInitial {
    loading: boolean,
    user?: UserType
};

const defaultState: DefaultStateInitial = {
    loading: false,
};

const userReducer = (state: DefaultStateInitial = defaultState, action: UserDispatchTypes) : DefaultStateInitial => {
    switch (action.type) {
        case USER_FAIL:
            return {
                loading: false,
            }
        case USER_LOADING:
            return {
                loading: true,
            }
        case USER_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        default:
            return state
    }
};

export default userReducer