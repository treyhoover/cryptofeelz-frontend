import axios from "axios";

const feelzApi = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT,
});

export const fetchFeel = id => feelzApi.get(`/feelz/${id}`)
  .then(res => [res.data, null])
  .catch(e => [null, e]);

export const createFeel = ({ symbol, days }) => feelzApi.get('/feelz', {
  params: {
    symbol,
    days,
  }
})
  .then(res => [res.data, null])
  .catch(e => [null, e]);
