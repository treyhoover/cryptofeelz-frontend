import * as types from "./actionTypes";

/* fetch */
export const fetchGif = () => ({
  type: types.FETCH_GIF,
});

export const fetchGifSuccess = (query, urls) => ({
  type: types.FETCH_GIF_SUCCESS,
  payload: { query, urls },
});

export const fetchGifError = (error) => ({
  type: types.FETCH_GIF_ERROR,
  payload: { error },
});
