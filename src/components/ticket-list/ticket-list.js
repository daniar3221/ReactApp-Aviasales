import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TicketItem from "../ticket-item/ticket-item";
import { v4 as uuidv4 } from "uuid";
import { showMoreAction } from "../../redux/actions";
import "./ticket-list.css";

function TicketList({ renderedTickets }) {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const tickets = selector.renderedTicket
    .slice(0, selector.quantityTickets)
    .map((ticket) => {
      return <TicketItem key={uuidv4()} {...ticket} />;
    });

  return (
    <div className="ticket-list">
      {tickets}
      <button
        className="show-more-btn"
        onClick={() => dispatch(showMoreAction)}
      >
        Показать еще 5 билетов
      </button>
    </div>
  );
}

export default TicketList;
