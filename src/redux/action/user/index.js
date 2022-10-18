import { apiClient } from '../../../services/apiClient';
import { reduxAction } from '../base';
import {
  GET_USER_PENDING,
  POST_ACHIEVEMENT_PENDING,
  POST_BASIC_INFO,
  POST_BASIC_INFO_PENDING,
  POST_EDUCATION,
  POST_EDUCATION_PENDING,
  POST_PROJECT_PENDING,
  POST_SKILLS_PENDING,
  POST_SOCIAL_PENDIN,
  POST_WORK,
  POST_WORK_PENDING,
  USER,
  USER_LOGIN_PENDING,
  USER_LOGOUT,
  USER_REGISTER_PENDING,
} from './type';
const url = process.env.BACKEND_URL||'http://localhost:5000/api/v1/user';

export const onUserRegisterAction = (value, cb) => {
  return dispatch => {
    dispatch(reduxAction(USER_REGISTER_PENDING, true));
    apiClient({ method: 'POST', url: `${url}/register`, data: value })
      .then(({ data }) => {
        dispatch(reduxAction(USER, data.user));
        dispatch(reduxAction(USER_REGISTER_PENDING, false));
        if (data) {
          localStorage.setItem('jwt', data.user.token);
          if (cb) {
            cb();
          }
        }
      })
      .catch(() => {
        dispatch(reduxAction(USER_REGISTER_PENDING, false));
      });
  };
};
export const onUserLogin = (value, cb) => {
  return dispatch => {
    dispatch(reduxAction(USER_LOGIN_PENDING, true));
    apiClient({ method: 'POST', url: `${url}/login`, data: value })
      .then(({ data }) => {
        dispatch(reduxAction(USER_LOGIN_PENDING, false));
        if (data) {
          localStorage.setItem('jwt', data.user.token);
          if (cb) {
            cb();
          }
        }
      })
      .catch(() => {
        dispatch(reduxAction(USER_LOGIN_PENDING, false));
      });
  };
};
export const onGetUser = () => {
  return dispatch => {
    dispatch(reduxAction(GET_USER_PENDING, true));
    apiClient({ method: 'GET', url })
      .then(({ data }) => {
        dispatch(reduxAction(USER, data.user));
        dispatch(reduxAction(GET_USER_PENDING, false));
      })
      .catch(() => {
        dispatch(reduxAction(GET_USER_PENDING, false));
      });
  };
};
export const userLogout = cb => {
  return dispatch => {
    localStorage.clear();
    dispatch(reduxAction(USER_LOGOUT));
    if (cb) {
      cb();
    }
  };
};
export const onPostBasicInfo = (value, cb) => {
  return dispatch => {
    dispatch(reduxAction(POST_BASIC_INFO_PENDING, true));
    apiClient({ method: 'POST', url: `${url}/basic-info`, data: value })
      .then(({ data }) => {
        dispatch(reduxAction(POST_BASIC_INFO, data.user));
        if (data) {
          if (cb) {
            cb();
          }
          dispatch(reduxAction(POST_BASIC_INFO_PENDING, false));
        }
      })
      .catch(() => {
        dispatch(reduxAction(POST_BASIC_INFO_PENDING, false));
      });
  };
};

export const onPostEducationInfo = (value, cb) => {
  return dispatch => {
    dispatch(reduxAction(POST_EDUCATION_PENDING, true));
    apiClient({ method: 'POST', url: `${url}/education`, data: value })
      .then(({ data }) => {
        dispatch(reduxAction(POST_EDUCATION, data.user));
        if (data) {
          if (cb) {
            cb();
          }
          dispatch(reduxAction(POST_EDUCATION_PENDING, false));
        }
      })
      .catch(() => {
        dispatch(reduxAction(POST_EDUCATION_PENDING, false));
      });
  };
};

export const onPostWorkInfo = (value, cb) => {
  return dispatch => {
    dispatch(reduxAction(POST_WORK_PENDING, true));
    apiClient({ method: 'POST', url: `${url}/work-experience`, data: value })
      .then(({ data }) => {
        dispatch(reduxAction(POST_WORK, data.user));
        if (data) {
          if (cb) {
            cb();
          }
          dispatch(reduxAction(POST_WORK_PENDING, false));
        }
      })
      .catch(() => {
        dispatch(reduxAction(POST_WORK_PENDING, false));
      });
  };
};

export const postSkills = (value, cb) => {
  return dispatch => {
    dispatch(reduxAction(POST_SKILLS_PENDING, true));
    apiClient({ method: 'POST', url: `${url}/skills`, data: value })
      .then(({ data }) => {
        dispatch(reduxAction(USER, data.user));
        if (data) {
          if (cb) {
            cb();
          }
          dispatch(reduxAction(POST_SKILLS_PENDING, false));
        }
      })
      .catch(() => {
        dispatch(reduxAction(POST_SKILLS_PENDING, false));
      });
  };
};

export const postProjects = (value, cb) => {
  return dispatch => {
    dispatch(reduxAction(POST_PROJECT_PENDING, true));
    apiClient({ method: 'POST', url: `${url}/projects`, data: value })
      .then(({ data }) => {
        dispatch(reduxAction(USER, data.user));
        if (data) {
          if (cb) {
            cb();
          }
          dispatch(reduxAction(POST_PROJECT_PENDING, false));
        }
      })
      .catch(() => {
        dispatch(reduxAction(POST_PROJECT_PENDING, false));
      });
  };
};
export const postAchievements = (value, cb) => {
  return dispatch => {
    dispatch(reduxAction(POST_ACHIEVEMENT_PENDING, true));
    apiClient({ method: 'POST', url: `${url}/achievements`, data: value })
      .then(({ data }) => {
        dispatch(reduxAction(USER, data.user));
        if (data) {
          if (cb) {
            cb();
          }
          dispatch(reduxAction(POST_ACHIEVEMENT_PENDING, false));
        }
      })
      .catch(() => {
        dispatch(reduxAction(POST_ACHIEVEMENT_PENDING, false));
      });
  };
};

export const postSocial = (value, cb) => {
  return dispatch => {
    dispatch(reduxAction(POST_SOCIAL_PENDIN, true));
    apiClient({ method: 'POST', url: `${url}/achievements`, data: value })
      .then(({ data }) => {
        dispatch(reduxAction(USER, data.user));
        if (data) {
          if (cb) {
            cb();
          }
          dispatch(reduxAction(POST_SOCIAL_PENDIN, false));
        }
      })
      .catch(() => {
        dispatch(reduxAction(POST_SOCIAL_PENDIN, false));
      });
  };
};

