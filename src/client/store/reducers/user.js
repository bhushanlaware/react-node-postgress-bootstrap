const UserReducer = (state = {}, action) => {
    switch (action.type) {
      case 'USER_DETAILS_SUCCESS':
        console.log(' action action ', action.data.user);
        return {
          ...state,
          userDetails: action.data.user,
          error: null,
          isLoading: false,
        };
      case 'USER_DETAILS_FAILURE':
        return {
          ...state,
          error: action.error,
          isLoading: false,
          hasError: action.hasError,
        };
      case 'SERVICE_ERROR':
        return {
          ...state,
          userDetails: action.data,
          error: action.error,
          isLoading: false,
        };
      default:
        return state;
    }
  };
  export default UserReducer;