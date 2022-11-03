/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './transfer-filter.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

function TransferFilter() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

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
