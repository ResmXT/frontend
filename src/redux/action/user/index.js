import { apiClient } from "../../../services/apiClient"
import { reduxAction } from "../base"
import { USER, USER_REGISTER_PENDING } from "./type"
const url="http://localhost:5000/api/v1/user/register"

export const onUserRegisterAction=(value,cb)=>{
    console.log(value);
    return dispatch=>{
        dispatch(reduxAction(USER_REGISTER_PENDING,true))
        apiClient({method : 'POST',url,data:value})
        .then(({data})=>{
            dispatch(reduxAction(USER,data.user))
            dispatch(reduxAction(USER_REGISTER_PENDING,false))
            if(data){
                if(cb){
                    cb()
                }
            }
        }).catch(()=>{
            dispatch(reduxAction(USER_REGISTER_PENDING,false))
        })
    }
}