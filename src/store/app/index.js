import { HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT } from "../types";

export const appReducer = (state = {}, action) => {
    switch(action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        case HIDE_LOADER:
            return {
                ...state,
                loading: false
            }
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                alert: null
            }

        default: return state
    }
    
}

