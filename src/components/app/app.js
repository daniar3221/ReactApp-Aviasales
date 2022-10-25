import React, { useEffect } from "react";
import "./app.css";
import Logo from "../../img/Logo.png";
import TransferFilter from "../transfer-filter/transfer-filter";
import TicketFilter from "../ticket-filter/ticket-filter";
import { useDispatch, useSelector } from "react-redux";
import { getSearchId, getFirstTickets } from "../services/services";

function App() {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.searchId);

  useEffect(() => {
    dispatch(getSearchId());
  }, []);

  useEffect(() => {
    if (!searchId) return;
    dispatch(getFirstTickets(searchId));
  }, [searchId]);

  return (
    <div className="app">
      <img className="logo" src={Logo} alt="logo" />

      <div className="app-wrapper">
        <TransferFilter />

        <div className="main">
          <TicketFilter />
        </div>
      </div>
    </div>
  );
}

export default App;
