import { apiClient } from "../../../services/apiClient"
import { reduxAction } from "../base"
import { GET_USER_PENDING, USER, USER_LOGIN_PENDING, USER_LOGOUT, USER_REGISTER_PENDING } from "./type"
const url="http://localhost:5000/api/v1/user"

export const onUserRegisterAction=(value,cb)=>{
    return dispatch=>{
        dispatch(reduxAction(USER_REGISTER_PENDING,true))
        apiClient({method : 'POST',url:`${url}/register`,data:value})
        .then(({data})=>{
            dispatch(reduxAction(USER,data.user))
            dispatch(reduxAction(USER_REGISTER_PENDING,false))
            if(data){
                localStorage.setItem('jwt', data.user.token);
                if(cb){
                    cb()
                }
            }
        }).catch(()=>{
            dispatch(reduxAction(USER_REGISTER_PENDING,false))
        })
    }
}
export const onUserLogin=(value,cb)=>{
    return dispatch=>{
        dispatch(reduxAction(USER_LOGIN_PENDING,true));
        apiClient({method:"POST",url:`${url}/login`,data:value})
        .then(({data})=>{
            dispatch(reduxAction(USER_LOGIN_PENDING,false));
            if(data){
                localStorage.setItem('jwt', data.user.token);
                if(cb){
                    cb();
                }
            }
        }).catch(()=>{
            dispatch(reduxAction(USER_LOGIN_PENDING,false))
        })
    }
}
export const onGetUser=()=>{
    return dispatch=>{
        dispatch(reduxAction(GET_USER_PENDING,true));
        apiClient({method:"GET",url})
        .then(({data})=>{
            dispatch(reduxAction(USER,data.user))
            dispatch(reduxAction(GET_USER_PENDING,false));
        }).catch(()=>{
            dispatch(reduxAction(GET_USER_PENDING,false))
        })
    }
}
export const userLogout = cb => {
    return dispatch => {
      localStorage.clear();
      dispatch(reduxAction(USER_LOGOUT));
      if (cb) {
        cb();
      }
    };
  };