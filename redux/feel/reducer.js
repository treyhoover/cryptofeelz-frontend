// import qs from "query-string";
import * as types from "./actionTypes";

// const params = qs.parse(window.location.search);

const defaultState = {
  id: null,
  caption: "",
  permalink: "",
  symbol: "BTC",
  days: 1,
  percent: null,
  gif: null,
  emotion: null,
  createdAt: null,
  updatedAt: null,

  isFetching: false,
  error: null,
  loading: true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_SYMBOL: {
      return {
        ...state,
        symbol: action.payload.symbol,
      };
    }

    case types.SET_DAYS: {
      return {
        ...state,
        days: action.payload.days,
      };
    }

    case types.FETCH_FEEL: {
      return {
        ...state,
        isFetching: true,
      }
    }

    case types.FETCH_FEEL_SUCCESS: {
      const { feel } = action.payload;

      return {
        ...state,
        ...feel,
        isFetching: false,
        loading: false,
        error: null,
      }
    }

    case types.FETCH_FEEL_ERROR: {
      return {
        ...state,
        isFetching: false,
        loading: false,
        error: action.payload.error.message,
      }
    }

    default: {
      return state;
    }
  }
}
