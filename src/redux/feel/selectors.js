import { createSelector } from 'reselect'

export const getState = state => state.feel;

export const getFeel = createSelector(
  getState,
  feel => feel,
);
