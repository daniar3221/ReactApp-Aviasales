/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./transfer-filter.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";

function TransferFilter({ getFilteredTickets }) {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const filterInputs = selector.transferFilter;
  let tickets = selector.tickets;

  const allFilter = () => {
    return tickets.filter((ticket) => ticket);
  };

  const noTransfer = () => {
    return tickets.filter((ticket) => ticket.segments[0].stops.length === 0);
  };

  const oneTransfer = () => {
    return tickets.filter((ticket) => ticket.segments[0].stops.length === 1);
  };

  const twoTransfers = () => {
    return tickets.filter((ticket) => ticket.segments[0].stops.length === 2);
  };

  const threeTransfers = () => {
    return tickets.filter((ticket) => ticket.segments[0].stops.length === 3);
  };

  const filters = [
    allFilter,
    noTransfer,
    oneTransfer,
    twoTransfers,
    threeTransfers,
  ];

  useEffect(() => {
    let filteredTickets = [];
    if (filterInputs[0]) {
      filteredTickets = tickets;
      dispatch(actions.setFilteredTicketsAction(filteredTickets));
      return;
    }
    filterInputs.slice(1).forEach((filterInput, idx) => {
      if (filterInput) {
        const filterResult = filters[idx + 1]();
        filteredTickets.push(...filterResult);
        dispatch(actions.setFilteredTicketsAction(filteredTickets));
      }
    });
  }, [filterInputs]);

  return (
    <div className="transfer-filter">
      <h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          className="filter-checkbox"
          id="1"
          checked={selector.transferFilter[0]}
          onChange={() => {
            dispatch(actions.allTickets);
            dispatch(actions.noSortTicketsAction);
          }}
        />
        <label htmlFor="1">Все</label>
      </div>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          id="2"
          className="filter-checkbox"
          checked={selector.transferFilter[1]}
          onChange={() => {
            dispatch(actions.noTransfers);
            dispatch(actions.noSortTicketsAction);
          }}
        />
        <label htmlFor="2">Без пересадок</label>
      </div>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          id="3"
          className="filter-checkbox"
          checked={selector.transferFilter[2]}
          onChange={() => {
            dispatch(actions.oneTransfer);
            dispatch(actions.noSortTicketsAction);
          }}
        />
        <label htmlFor="3">1 пересадка</label>
      </div>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          id="4"
          className="filter-checkbox"
          checked={selector.transferFilter[3]}
          onChange={() => {
            dispatch(actions.twoTransfers);
            dispatch(actions.noSortTicketsAction);
          }}
        />
        <label htmlFor="4">2 пересадки</label>
      </div>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          id="5"
          className="filter-checkbox"
          checked={selector.transferFilter[4]}
          onChange={() => {
            dispatch(actions.threeTransfers);
            dispatch(actions.noSortTicketsAction);
          }}
        />
        <label htmlFor="5">3 пересадки</label>
      </div>
    </div>
  );
}

export default TransferFilter;
