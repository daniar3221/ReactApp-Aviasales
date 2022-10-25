import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./components/app/app";
import reducer from "./redux/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log("Middleware", store.getState());
  return result;
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
