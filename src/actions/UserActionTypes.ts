export const USER_LOADING = "USER_LOADING";
export const USER_FAIL = "USER_FAIL";
export const USER_SUCCESS = "USER_SUCCESS";

export type UserType = {
    abilities: UserAbility[],
    sprites: UserSprites,
    stats: UserStat[],
}

export type UserAbility = {
    ability: {
        name: string,
        url: string
    }
}

export type UserSprites = {
    front_default: string
}

export type UserStat = {
    base_stat: number,
    stat: {
        name: string
    }
}

export interface UserLoading {
    type: typeof USER_LOADING
}

export interface UserFail {
    type: typeof USER_FAIL
}

export interface UserSuccess {
    type: typeof USER_SUCCESS,
    payload: UserType
}

export type UserDispatchTypes = UserLoading | UserFail | UserSuccess