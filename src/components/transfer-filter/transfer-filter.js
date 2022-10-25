import React from "react";
import "./transfer-filter.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";

function TransferFilter() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  return (
    <div className="transfer-filter">
      <h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          checked={selector[0]}
          onChange={() => {
            dispatch(actions.allTickets);
          }}
        />{" "}
        <span>Все</span>
      </div>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          checked={selector[1]}
          onChange={() => {
            dispatch(actions.noTransfers);
          }}
        />
        <span>Без пересадок</span>
      </div>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          checked={selector[2]}
          onChange={() => {
            dispatch(actions.oneTransfer);
          }}
        />{" "}
        <span>1 пересадка</span>
      </div>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          checked={selector[3]}
          onChange={() => {
            dispatch(actions.twoTransfers);
          }}
        />{" "}
        <span>2 пересадки</span>
      </div>
      <div className="transfer-filter-item">
        <input
          type="checkbox"
          checked={selector[4]}
          onChange={() => {
            dispatch(actions.threeTransfers);
          }}
        />{" "}
        <span>3 пересадки</span>
      </div>
    </div>
  );
}

export default TransferFilter;