import { FETCH_USERS, UNSET_USERS, GET_POSITIONS, SET_USER, } from "../types";
// import { FETCH_USERS, LOAD_USERS, HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT } from "../types";


// const initialState = {
//     users: [],
// }

export const usersReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_USERS:
            return {
                ...state,
                list: [...state.list, ...action.payload.data.users],
                pages: action.payload.data.total_pages
            }
        case UNSET_USERS:
            return {
                ...state,
                list: []
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload.user
            }
        case GET_POSITIONS:
            return {
                ...state,
                positions: action.payload.positions
            }
        default: return state
    }
    
}

