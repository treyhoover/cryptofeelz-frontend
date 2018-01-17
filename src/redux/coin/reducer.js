import * as types from "./actionTypes";

const defaultState = {
  isFetching: false,
  error: null,
  loading: true,

  symbol: "BTC",
  days: 1,
  price: {
    start: 0,
    end: 0,
    percentChange: 0,
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_DAYS: {
      return {
        ...state,
        days: action.payload.days,
        loading: true,
      }
    }

    case types.SET_SYMBOL: {
      return {
        ...state,
        symbol: action.payload.symbol,
        loading: true,
      }
    }

    case types.FETCH_COIN: {
      return {
        ...state,
        isFetching: true,
      }
    }

    case types.FETCH_COIN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        loading: false,
        price: action.payload.price,
        error: null,
      }
    }

    case types.FETCH_COIN_ERROR: {
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
