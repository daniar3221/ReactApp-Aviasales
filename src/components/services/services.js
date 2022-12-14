import {
  initSearchIdAction,
  getTicketsAction,
  finishLoadingAction,
  stopLoadTicketsAction,
} from '../../redux/actions';

let countFetch = 10;

export const getSearchId = () => (dispatch) => {
  fetch('https://front-test.dev.aviasales.ru/search')
    .then((response) => response.json())
    .then((search) => dispatch(initSearchIdAction(search.searchId)));
};

export const getTickets = (searchId) => (dispatch) => {
  fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`)
    .then((response) => {
      if (response.status !== 200) throw new Error('Ошибка');
      else return response.json();
    })
    .then((tickets) => {
      if (!tickets.stop) {
        dispatch(getTicketsAction(tickets.tickets));
        dispatch(finishLoadingAction);
        dispatch(getTickets(searchId));
      } else {
        dispatch(stopLoadTicketsAction());
      }
    })
    .catch(() => {
      countFetch -= 1;
      if (countFetch > 0) {
        dispatch(getTickets(searchId));
      }
    });
};
