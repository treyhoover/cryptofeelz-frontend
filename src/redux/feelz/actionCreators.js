import { sample } from "lodash";
import giphy from "~/api/giphy";
import * as actions from "./actions";

export const fetchGif = (q) => (dispatch, getState) => {
  dispatch(actions.fetchGif());

  giphy.search('gifs', { q })
    .then(response => {
      const random = sample(response.data);

      dispatch(actions.fetchGifSuccess(random.images.looping.mp4_url));
    })
    .catch(error => {
      dispatch(actions.fetchGifError(error));
    });
};
