import { ADD_TO_PLAYER } from "../actions";

const initialState = {
  det: [],
};

const SongDetailsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return {
        ...state,

        det: [...state.det, action.payload],
      };
    default:
      return state;
  }
};
export default SongDetailsReducers;
