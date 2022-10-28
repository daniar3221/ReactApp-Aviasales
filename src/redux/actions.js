export const allTickets = { type: 'ALL' };

export const noTransfers = { type: 'NO' };

export const oneTransfer = { type: 'ONE-TRANSFER' };

export const twoTransfers = { type: 'TWO-TRANSFERS' };

export const threeTransfers = { type: 'THREE-TRANSFERS' };

export const onloadingAction = { type: 'LOADING' };

export const finishLoadingAction = { type: 'FINISH-LOADING' };

export const onErrorAction = { type: 'ERROR' };

export const sortCheapTicketsAction = { type: 'CHEAP' };

export const sortFastTicketsAction = { type: 'FAST' };

export const sortOptimalTicketsAction = { type: 'OPTIMAL' };

export const noSortTicketsAction = { type: 'NO-SORT' };

export const showMoreAction = { type: 'SHOW-MORE' };

export const backToFiveAction = { type: 'BACK-TO-5' };

export const initRenderedTicketsAction = (payload) => ({
  type: 'INIT',
  payload,
});

export const setFilteredTicketsAction = (payload) => ({
  type: 'FILTER',
  payload,
});

export const setSortedTicketsAction = (payload) => ({
  type: 'SORT',
  payload,
});

export const initSearchIdAction = (payload) => ({
  type: 'INIT-SEARCH-ID',
  payload,
});

export const getFirstTicketsAction = (payload) => ({
  type: 'GET-FIRST-TICKETS',
  payload,
});
