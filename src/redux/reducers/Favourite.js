import { ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES } from "../actions";

const initialState = {
  content: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,

        content: [...state.content, action.payload],
      };
    case DELETE_FROM_FAVOURITES:
      return {
        ...state,

        content: state.content.filter((name, i) => i !== action.payload),
      };
    default:
      return state;
  }
};
export default favouriteReducer;
