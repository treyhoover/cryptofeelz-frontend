import qs from "query-string";
import { defaults } from "lodash";
import Router from 'next/router';

export const getQueryParams = () => qs.parse(window.location.search);

export const updateQueryParams = (newParams, options = {}) => {
  const oldParams = getQueryParams();
  const routerOptions = defaults(options, {
    pathname: window.location.pathname,
    query: {},
  });

  Router.push({
    ...routerOptions,
    query: { ...oldParams, ...routerOptions.query, ...newParams }
  })
};
