import { sample } from 'lodash';
import * as types from "./actionTypes";

const defaultState = {
  isFetching: false,
  error: null,
  loading: true,
  currentEmotion: "",
  url: "",
  emotions: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_GIF: {
      return {
        ...state,
        isFetching: true,
      }
    }

    case types.REFRESH_GIF: {
      return {
        ...state,
        url: sample(state.emotions[state.currentEmotion]),
      }
    }

    case types.FETCH_GIF_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        loading: false,
        currentEmotion: action.payload.query,
        url: sample(action.payload.urls),
        emotions: {
          ...state.emotions,
          [action.payload.query]: action.payload.urls,
        },
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
