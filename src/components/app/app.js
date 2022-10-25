import React from "react";
import "./app.css";
import Logo from "../../img/Logo.png";
import TransferFilter from "../transfer-filter/transfer-filter";
import TicketFilter from "../ticket-filter/ticket-filter";

function App() {
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
