import { updateQueryParams } from "~/utils/history";
import * as feelApi from "~/api/feel";
import * as actions from "./actions";

export const fetchFeel = () => (dispatch, getState) => {
  const state = getState();
  const { symbol, days } = state.feel;

  dispatch(actions.fetchFeel());

  feelApi.fetchFeel({ symbol, days })
    .then(response => {
      dispatch(actions.fetchFeelSuccess(response));
    })
    .catch(error => {
      dispatch(actions.fetchFeelError(error));
    });
};

export const setSymbol = (symbol) => (dispatch, getState) => {
  updateQueryParams({ symbol });

  dispatch(actions.setSymbol(symbol));
  dispatch(fetchFeel());
};

export const setDays = (days) => (dispatch, getState) => {
  updateQueryParams({ days });

  dispatch(actions.setDays(days));
  dispatch(fetchFeel());
};
