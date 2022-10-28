/* eslint-disable no-nested-ternary */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.css';
import Logo from '../../img/Logo.png';
import TransferFilter from '../transfer-filter/transfer-filter';
import TicketSort from '../ticket-sort/ticket-sort';
import TicketList from '../ticket-list/ticket-list';
import Spinner from '../spinner/spiner';
import 'antd/dist/antd.min.css';
import { initRenderedTicketsAction } from '../../redux/actions';
import { getSearchId, getFirstTickets } from '../services/services';

function App() {
  const dispatch = useDispatch();

  const searchId = useSelector((state) => state.searchId);
  const onloadingSelector = useSelector((state) => state.onLoad);
  const onErrorSelector = useSelector((state) => state.onError);

  const ticketsSelector = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (!searchId) return;
    dispatch(getFirstTickets(searchId));
  }, [dispatch, searchId]);

  useEffect(() => {
    dispatch(initRenderedTicketsAction(ticketsSelector));
  }, [dispatch, ticketsSelector]);

  const errorDiv = () => (
    <div className="error-div">
      Something gone wrong, <br /> please reload the page.
    </div>
  );

  return (
    <div className="app">
      <img className="logo" src={Logo} alt="logo" />

      <div className="app-wrapper">
        <TransferFilter />

        <div className="main">
          <TicketSort />
          {onloadingSelector ? <Spinner /> : onErrorSelector ? errorDiv() : <TicketList />}
        </div>
      </div>
    </div>
  );
}

export default App;
