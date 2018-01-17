import { percentToEmotion } from "~/utils/emotions";
import { fetchGif } from "~/redux/feelz/actionCreators";
import * as actions from "./actions";

export const fetchCoin = () => (dispatch, getState) => {
  const { coin: { days, symbol } } = getState();

  dispatch(actions.fetchCoin());

  fetch(`http://coincap.io/history/${days}day/${symbol}`)
    .then(res => res.json())
    .then(({ price }) => {
      const start = price[0][1];
      const end = price.slice(-1)[0][1];
      const percentChange = (end / start - 1) * 100;
      const emotion = percentToEmotion(percentChange);

      dispatch(actions.fetchCoinSuccess({ start, end, percentChange }));
      dispatch(fetchGif(emotion));
    })
    .catch(error => {
      dispatch(actions.fetchCoinError(error));
    });
};
