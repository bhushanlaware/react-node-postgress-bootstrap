import axios from 'axios';

export function getUserDetails() {
  return dispatch => {
    return axios
      .get('/api/users/me', {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => {
        if (response) {
          console.log('user profile data ->', response);
          dispatch({
            type: 'USER_DETAILS_SUCCESS',
            data: response.data,
          });
          return response;
        } else {
          dispatch({
            type: 'USER_DETAILS_FAILURE',
            data: response.data,
          });
        }
      })
      .catch(err =>
        dispatch({
          type: 'SERVICE_ERROR',
        })
      );
  };
}
