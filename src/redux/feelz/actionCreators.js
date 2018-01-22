import giphy from "~/api/giphy";
import * as actions from "./actions";

export const fetchGif = (q) => (dispatch, getState) => {
  const { feelz } = getState();

  dispatch(actions.fetchGif());

  if (q in feelz.emotions) {
    dispatch(actions.fetchGifSuccess(q, feelz.emotions[q]));
  } else {
    giphy.search('gifs', { q })
      .then(response => {
        const gifs = response.data.map(gif => gif.images.downsized_medium.gif_url);

        dispatch(actions.fetchGifSuccess(q, gifs));
      })
      .catch(error => {
        dispatch(actions.fetchGifError(error));
      });
  }
};
