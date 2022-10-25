import { initSearchIdAction, getFirstTicketsAction } from "../../redux/actions";

export const getSearchId = () => {
  return (dispatch) => {
    fetch("https://front-test.dev.aviasales.ru/search")
      .then((response) => response.json())
      .then((search) => dispatch(initSearchIdAction(search.searchId)));
  };
};

export const getFirstTickets = (searchId) => {
  return (dispatch) => {
    fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`)
      .then((response) => response.json())
      .then((tickets) => dispatch(getFirstTicketsAction(tickets.tickets)));
  };
};
