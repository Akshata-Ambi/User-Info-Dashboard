import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_USER } from "./action";


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    isLoggedIn: false,
    loginToken: 'none'
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loginToken: action.payload,
                isLoggedIn: true
            }
        }

        case LOGIN_FAIL: {
            return {
                ...state,
                loginToken: action.payload
            }
        }

        case LOGOUT_USER : {
            return {
                ...state,
                isLoggedIn: false,
                loginToken: 'none'
            }
        }

        default:
            return state;
    }
}

export default loginReducer;