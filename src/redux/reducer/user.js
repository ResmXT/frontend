import {
  GET_USER_PENDING,
  POST_BASIC_INFO,
  POST_BASIC_INFO_PENDING,
  POST_EDUCATION,
  POST_EDUCATION_PENDING,
  POST_WORK,
  POST_WORK_PENDING,
  USER,
  USER_LOGIN_PENDING,
  USER_REGISTER_PENDING,
} from '../action/user/type';

const initialState = {
  user: null,
  isRegisterPending: false,
  isLoginPending: false,
  getUserPending: false,
};
export const userReducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case USER:
      return {
        ...state,
        user: payload,
      };
    case USER_REGISTER_PENDING:
      return {
        ...state,
        isRegisterPending: payload,
      };
    case USER_LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: payload,
      };
    case GET_USER_PENDING:
      return {
        ...state,
        getUserPending: payload,
      };
    case POST_BASIC_INFO:
      return {
        ...state,
        user: payload,
      };
    case POST_BASIC_INFO_PENDING:
      return {
        ...state,
        postBasicInfoPendin: payload,
      };

    case POST_EDUCATION:
      return {
        ...state,
        user: payload,
      };
    case POST_EDUCATION_PENDING:
      return {
        ...state,
        postBasicInfoPendin: payload,
      };
    case POST_WORK:
      return {
        ...state,
        user: payload,
      };
    case POST_WORK_PENDING:
      return {
        ...state,
        postBasicInfoPendin: payload,
      };
    default: {
      return state;
    }
  }
};
