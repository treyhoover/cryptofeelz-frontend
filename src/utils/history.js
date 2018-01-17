import qs from "query-string";

export const updateQueryParams = (newParams = {}) => {
  const params = qs.stringify({
    ...qs.parse(window.location.search),
    ...newParams,
  });

  window.history.pushState({}, '', `${window.location.pathname}?${params}`);
};
