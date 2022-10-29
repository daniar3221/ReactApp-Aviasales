/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import TicketItem from '../ticket-item/ticket-item';
import { showMoreAction } from '../../redux/actions';
import './ticket-list.css';

function TicketList() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const tickets = selector.renderedTicket
    .slice(0, selector.quantityTickets)
    .map((ticket) => <TicketItem key={uuidv4()} {...ticket} />);
  const noTicketsAvailable = () => (
    <div className="error-div">
      No flights matching <br /> the specified filters were found
    </div>
  );

  const ticketList = () => (
    <div>
      {tickets}
      <button type="button" className="show-more-btn" onClick={() => dispatch(showMoreAction)}>
        Показать еще 5 билетов
      </button>
    </div>
  );

  return (
    <div className="ticket-wrapper">
      {selector.renderedTicket.length === 0 ? noTicketsAvailable() : ticketList()}
    </div>
  );
}

export default TicketList;
