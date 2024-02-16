import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/Favourite";
import SongDetailsReducers from "../reducers/Songs";

const globalReducers = combineReducers({
  favourite: favouriteReducer,
  details: SongDetailsReducers,
});

const store = configureStore({
  reducer: globalReducers,
});
export default store;
