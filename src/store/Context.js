import {CreateAppContext} from './CreateAppContext'

// Actions
const onUserLogin = (dispatch) => async() =>{
    // we will perform some web request

    const res = {data: {name: "Test", address: "soemwehe", token: "adhjfjwne"}}
    
    dispatch({
        type: "USER_LOGIN",
        payload: res.data
    })
    
}

const onUserLogOut = (dispatch) => async() =>{
    // Maybe we will perform some web request

    const res = {data: {name: "New User", address: "new place", token: "ajsdkhhjfe"}}
    
    dispatch({
        type: "USER_LOGOUT",
        payload: res.data
    })
    
}

// Reducers

const userReducer = (state, action) => {
    switch(action.type) {
        case "USER_LOGIN":
            return {
                ...state,
                payload: action.payload
            }
        case "USER_LOGOUT":
            return {
                ...state,
                payload: action.payload
            }
        default:
            return state;
    }
}

export const {Provider, Context} = CreateAppContext(
    userReducer, 
    {onUserLogin, onUserLogOut}, 
    {user: undefined}
)