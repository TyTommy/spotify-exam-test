import { legacy_createStore } from "redux";
import playerReducer from "../reducer/playerReducer";

const store = legacy_createStore(
  playerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
