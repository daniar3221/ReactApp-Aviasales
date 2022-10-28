/* eslint-disable comma-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { loggerMiddleware } from "../index";
import reduxThunk from 'redux-thunk';
import searchIdReducer from './searchIdReducer';
import ticketsReducer from './ticketsReducer';
import transferFilterReducer from './transfersFilterReducer';
import loadingReducer from './onLoadingReducer';
import onErrorReducer from './onErrorReducer';
import sortTicketsReducer from './sortTicketsReducer';
import quantityTickets from './quantityTicketsReducer';
import renderedTicketsReducer from './renderedTicketsReducer';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  transferFilter: transferFilterReducer,
  searchId: searchIdReducer,
  onLoad: loadingReducer,
  onError: onErrorReducer,
  sort: sortTicketsReducer,
  quantityTickets,
  renderedTicket: renderedTicketsReducer,
});

// const loggerMiddleware = (store) => (next) => (action) => {
//   const result = next(action);
//   // console.log("Middleware", store.getState());
//   return result;
// };

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
