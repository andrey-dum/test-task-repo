import { FETCH_USERS, SHOW_LOADER, HIDE_LOADER, SET_USER, SHOW_ALERT, HIDE_ALERT, GET_POSITIONS, UNSET_USERS } from "./types";
import { usersAPI, authAPI } from "../api";


export function setUsers(data) {
   return {
        type: FETCH_USERS,
        payload: {
            data
        }
   }
}

export function setPositions(positions) {
   return {
        type: GET_POSITIONS,
        payload:  { positions }
        
   }
}


export const getPositions = () => async (dispatch) => {
  let response = await usersAPI.getPositions();
  if ( response.status === 200 ) {
    const data = await response.json()
   
    dispatch(setPositions(data.positions))
  } 
}


export const getUsers = (page) => async (dispatch) => {
  try {
    dispatch(showLoader())
    let response = await usersAPI.getUsers(page);
    const data = await response.json()
    if(data.success) { 
      dispatch(setUsers(data)) 
    } else { 
      dispatch(showAlert(data.message)) 
    }
  }  catch (e) {
    dispatch(showAlert('Запрос на сервер не выполнен!', e))
    dispatch(hideLoader())
  }
  dispatch(hideLoader())
}

export function unsetUsers () {
  return {
    type: UNSET_USERS
  }
}

export function setUser(user) {
  return {
       type: SET_USER,
       payload: {
           user
       }
  }
}

export const getUser = (userId) => async (dispatch) => {
  let response = await authAPI.getUser(userId);
  const data = await response.json()
  if(data.success) { 
    dispatch(setUser(data.user))
  }
}


export const getToken = () => async (dispatch) => {
  let response = await authAPI.getToken();
    const data = await response.json()
    return data.token
}

export const authUser = (formData) => async (dispatch) => {
  dispatch(showLoader())

  let token = await dispatch(getToken())

  let response = await authAPI.authUser(formData, token);
  const data = await response.json()
  if(data.success) { 
    
    dispatch(getUser(data.user_id)) 
    dispatch(unsetUsers())
  } else { 
    console.log(data.message)
  } 
  dispatch(hideLoader())
}


export function showLoader() {
    return {
      type: SHOW_LOADER
    };
}
  
  export function hideLoader() {
    return {
      type: HIDE_LOADER
    };
  }



export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 4000);
  };
}
export function hideAlert(text) {
  return {
    type: HIDE_ALERT
  };
}

