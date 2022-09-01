import { USER, USER_REGISTER_PENDING } from "../action/user/type"

const initialState={
    user:null,
    isRegisterPending:false
}
export const userReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case USER:
            return {
                ...state,
                user:payload
            }
        case USER_REGISTER_PENDING:
            return {
                ...state,
                isRegisterPending:payload
            }
        default:
           {
            return state
           }
    
    }
}