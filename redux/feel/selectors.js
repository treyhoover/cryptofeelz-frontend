import { createSelector } from 'reselect'

export const getState = state => state.feel;

export const getFeel = createSelector(
  getState,
  feel => {
    const { caption, percent } = feel;
    const color = percent >= 0 ? "green" : "red";
    const formattedCaption = caption.split(" ")
      .map(word => word.endsWith("%") ? `<span class="ui small header ${color}"> ${word} </span>` : word)
      .join(" ");

    return {
      ...feel,
      formattedCaption,
    };
  },
);
