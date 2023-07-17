import { SEARCH_QUERY } from './types';

export interface SearchQueryAction {
  type: typeof SEARCH_QUERY;
  payload: string;
};

export const searchQuery = (query: string): SearchQueryAction => {
  return {
    type: SEARCH_QUERY,
    payload: query
  };
}