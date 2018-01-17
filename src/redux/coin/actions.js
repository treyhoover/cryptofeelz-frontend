import * as types from "./actionTypes";

/* update */
export const setSymbol = (symbol) => ({
  type: types.SET_SYMBOL,
  payload: { symbol },
});

export const setDays = (days) => ({
  type: types.SET_DAYS,
  payload: { days },
});

/* fetch */
export const fetchCoin = () => ({
  type: types.FETCH_COIN,
});

export const fetchCoinSuccess = (price) => ({
  type: types.FETCH_COIN_SUCCESS,
  payload: { price },
});

export const fetchCoinError = (error) => ({
  type: types.FETCH_COIN_ERROR,
  payload: { error },
});

