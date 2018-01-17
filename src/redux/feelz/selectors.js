import { createSelector } from 'reselect'

export const getState = state => state.feelz;

export const getFeelz = createSelector(
  getState,
  feelz => feelz,
);
