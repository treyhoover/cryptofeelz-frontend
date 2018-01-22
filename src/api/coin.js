const API_ROOT = "https://min-api.cryptocompare.com/data/pricehistorical";

export const fetchCoinHistory = ({ days = 1, symbol = "BTC" }) => {
  const date = new Date();
  date.setDate(date.getDate()-days);
  const ts = Date.parse(date.toDateString()) / 1000;

  const currentPrice = fetch(`${API_ROOT}?fsym=${symbol}&tsyms=USD`).then(res => res.json());
  const startPrice = fetch(`${API_ROOT}?fsym=${symbol}&tsyms=USD&ts=${ts}`).then(res => res.json());

  return Promise.all([startPrice, currentPrice])
    .then(([ startObj, endObj ]) => {
      const start = Object.values(startObj)[0]["USD"];
      const end = Object.values(endObj)[0]["USD"];
      const percentChange = (end / start - 1) * 100;

      return { start, end, percentChange };
    })

};
