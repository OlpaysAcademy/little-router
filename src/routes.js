// @flow
export type Router = {
  action: string,
  key: string,
  params: Object,
  pathname: string,
  query: Object,
  result: Object,
  search: string,
}

export default {
  '/auth': {
    title: 'Auth'
  },
  '/app': {
    title: 'App'
  },
};
