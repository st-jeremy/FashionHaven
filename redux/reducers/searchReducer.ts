import { SEARCH_QUERY } from "../actions/types";
import { SearchQueryAction } from '../actions/searchActions';

interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: ''
};

const searchReducer = ( state= initialState, action: SearchQueryAction): SearchState => {
  switch (action.type) {
    case SEARCH_QUERY:
      return {
        ...state,
        query: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;