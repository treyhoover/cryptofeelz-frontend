const API_ROOT = "https://min-api.cryptocompare.com/data/pricehistorical";

export const fetchCoinCurrent = ({ symbol = "BTC" }) => {
  return fetch(`${API_ROOT}?fsym=${symbol}&tsyms=USD`)
    .then(res => res.json())
    .then(startObj => Object.values(startObj)[0]["USD"]);
};

export const fetchCoinHistory = ({ days = 1, symbol = "BTC" }) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  const ts = Date.parse(date.toDateString()) / 1000;

  // const currentPrice = fetch(`${API_ROOT}?fsym=${symbol}&tsyms=USD`).then(res => res.json());
  // const startPrice = fetch(`${API_ROOT}?fsym=${symbol}&tsyms=USD&ts=${ts}`).then(res => res.json());

  return fetch(`${API_ROOT}?fsym=${symbol}&tsyms=USD&ts=${ts}`)
    .then(res => res.json())
    .then(endObj => Object.values(endObj)[0]["USD"]);
};
