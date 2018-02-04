import qs from "query-string";

const { REACT_APP_API_ROOT } = process.env;

export const fetchFeel = ({ symbol = "BTC", days = 1 }) => {
  const params = qs.stringify({ symbol, days });

  return fetch(`${REACT_APP_API_ROOT}/feelz?${params}`)
    .then(res => res.json());
};

