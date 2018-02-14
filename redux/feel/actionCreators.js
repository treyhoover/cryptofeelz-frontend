import { updateQueryParams } from "../../utils/uri";
import * as feelzApi from "../../api/feelz";
import * as actions from "./actions";

export const fetchFeel = (id) => async (dispatch, getState) => {
  const state = getState();
  const { symbol, days } = state.feel;

  dispatch(actions.fetchFeel());

  if (id) {
    const [feel, error] = await feelzApi.fetchFeel(id);

    if (error) return dispatch(actions.fetchFeelError(error));

    dispatch(actions.fetchFeelSuccess(feel));
  } else {
    const [feel, error] = await feelzApi.createFeel({ symbol, days });

    if (error) return dispatch(actions.fetchFeelError(error));

    dispatch(actions.fetchFeelSuccess(feel));
  }
};

export const setSymbol = (symbol) => (dispatch, getState) => {
  const { feel: { days } } = getState();
  updateQueryParams({ symbol, days }, { pathname: "/" });

  dispatch(actions.setSymbol(symbol));
};

export const setDays = (days) => (dispatch, getState) => {
  const { feel: { symbol } } = getState();
  updateQueryParams({ days, symbol }, { pathname: "/" });

  dispatch(actions.setDays(days));
};
