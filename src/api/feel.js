const { REACT_APP_API_ROOT } = process.env;

export const fetchFeel = ({ symbol = "BTC", days = 1 }) => {
  return fetch(`${REACT_APP_API_ROOT}/feelz?symbol=${symbol}&days=${days}`)
    .then(res => res.json());
};

