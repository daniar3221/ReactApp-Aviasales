export const allTickets = { type: "ALL" };

export const noTransfers = { type: "NO" };

export const oneTransfer = { type: "ONE-TRANSFER" };

export const twoTransfers = { type: "TWO-TRANSFERS" };

export const threeTransfers = { type: "THREE-TRANSFERS" };

export const initSearchIdAction = (payload) => {
  return {
    type: "INIT-SEARCH-ID",
    payload,
  };
};

export const getFirstTicketsAction = (payload) => {
  return {
    type: "GET-FIRST-TICKETS",
    payload,
  };
};
