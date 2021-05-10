import { combineReducers, createStore } from "redux";

import App from "./app/reducer";

const rootReducer = combineReducers({
  app: App,
});

const store = createStore(rootReducer);
export { store };
export type MainState = ReturnType<typeof rootReducer>;
