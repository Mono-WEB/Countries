const SWITCH_THEME = "SWITCH_THEME";
const ADD_FLAGS = "ADD_FLAGS";
const ALL_DETAILS = "ALL_DETAILS";
const SEARCH_COUNTRY ="SEARCH_COUNTRY";

const defaultState = {
  switch: true,
  flags: [],
  allDetails: '',
  searchCountry: []
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_COUNTRY:
      return {
        ...state,
        searchCountry: [...action.payload]
      }
    case ALL_DETAILS:
      return {
        ...state,
        allDetails: action.payload
      };
    case ADD_FLAGS:
      return {
        ...state,
        flags: [...action.payload],
      };
    case SWITCH_THEME:
      return {
        ...state,
        switch: !state.switch,
      };
    default:
      return state;
  }
};

export default rootReducer;
