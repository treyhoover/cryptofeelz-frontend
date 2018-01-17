import { createSelector } from 'reselect'

export const getState = state => state.coin;

export const getCoin = createSelector(
  getState,
  coin => coin,
);
