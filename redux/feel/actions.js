import * as types from "./actionTypes";

/* fetch */
export const fetchFeel = () => ({
  type: types.FETCH_FEEL,
});

export const fetchFeelSuccess = (feel) => ({
  type: types.FETCH_FEEL_SUCCESS,
  payload: { feel },
});

export const fetchFeelError = (error) => ({
  type: types.FETCH_FEEL_ERROR,
  payload: { error },
});

/* set */
export const setSymbol = (symbol) => ({
  type: types.SET_SYMBOL,
  payload: { symbol },
});

export const setDays = (days) => ({
  type: types.SET_DAYS,
  payload: { days },
});
