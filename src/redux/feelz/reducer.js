import * as types from "./actionTypes";

const defaultState = {
  isFetching: false,
  error: null,
  loading: true,
  url: "",
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_GIF: {
      return {
        ...state,
        isFetching: true,
      }
    }

    case types.FETCH_GIF_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        loading: false,
        url: action.payload.url,
        error: null,
      }
    }

    case types.FETCH_GIF_ERROR: {
      return {
        ...state,
        isFetching: false,
        loading: false,
        error: action.payload.error,
      }
    }

    default: {
      return state;
    }
  }
}
