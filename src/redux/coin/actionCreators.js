import { updateQueryParams } from "~/utils/history";
import { percentToEmotion } from "~/utils/emotions";
import { fetchGif } from "~/redux/feelz/actionCreators";
import { fetchCoinHistory, fetchCoinCurrent } from "~/api/coin";
import * as actions from "./actions";

export const fetchCoin = () => (dispatch, getState) => {
  const { coin: { days, symbol, price } } = getState();

  dispatch(actions.fetchCoin());

  const historical = fetchCoinHistory({ days, symbol });
  const current = price.end > 0 ? Promise.resolve(price.end) : fetchCoinCurrent({ symbol });

  Promise.all([historical, current])
    .then(([start, end]) => {
      const percentChange = (end / start - 1) * 100;

      return { start, end, percentChange };
    })
    .then(({ start, end, percentChange }) => {
      const emotion = percentToEmotion(percentChange);

      dispatch(actions.fetchCoinSuccess({ start, end, percentChange }));
      dispatch(fetchGif(emotion));
    })
    .catch(error => {
      dispatch(actions.fetchCoinError(error));
    });
};

export const setSymbol = (symbol) => (dispatch, getState) => {
  updateQueryParams({ symbol });

  dispatch(actions.setSymbol(symbol));
  dispatch(fetchCoin());
};

export const setDays = (days) => (dispatch, getState) => {
  updateQueryParams({ days });

  dispatch(actions.setDays(days));
  dispatch(fetchCoin());
};
