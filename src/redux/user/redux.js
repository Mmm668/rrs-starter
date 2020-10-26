export const Action = {
    Types: {
        UPDATE_STATE: '@USER/UPDATE_STATE',
        CLEAR_STORE: '@USER/CLEAR_STORE',

        GET_USER_TOKEN: '@USER/GET_USER_TOKEN',
        LOG_IN: '@USER/LOG_IN',
        LOG_OUT: '@USER/LOG_OUT',
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        clearStore: () => ({
            type: Action.Types.CLEAR_STORE,
        }),

        getUserToken: () => ({
            type: Action.Types.GET_USER_TOKEN,
        }),
        logIn: (userInfo) => ({
            type: Action.Types.LOG_IN,
            userInfo
        }),
        logOut: () => ({
            type: Action.Types.LOG_OUT
        })
    }
};


const initialState = {
    isLoggedIn: false,
    user: {}
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.Types.UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


