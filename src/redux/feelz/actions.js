import * as types from "./actionTypes";

/* fetch */
export const fetchGif = () => ({
  type: types.FETCH_GIF,
});

export const fetchGifSuccess = (url) => ({
  type: types.FETCH_GIF_SUCCESS,
  payload: { url },
});

export const fetchGifError = (error) => ({
  type: types.FETCH_GIF_ERROR,
  payload: { error },
});

