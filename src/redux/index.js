import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { loggerMiddleware } from "../index";
import reduxThunk from "redux-thunk";
import searchIdReducer from "./searchIdReducer";
import ticketsReducer from "./ticketsReducer";
import transferFilterReducer from "./transfersFilterReducer";

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  transferFilter: transferFilterReducer,
  searchId: searchIdReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log("Middleware", store.getState());
  return result;
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware, reduxThunk))
);
