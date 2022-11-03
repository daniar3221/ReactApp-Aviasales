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
import {
  initRenderedTicketsAction,
  sortedTicketsAction,
  filteredTicketsAction,
} from '../../redux/actions';
import { getSearchId, getTickets } from '../services/services';

function App() {
  const dispatch = useDispatch();

  const searchId = useSelector((state) => state.searchId);
  const onloadingSelector = useSelector((state) => state.onLoad);
  const onErrorSelector = useSelector((state) => state.onError);
  const allTicketsSelector = useSelector((state) => state.tickets);
  const transferFilterInputsSelector = useSelector((state) => state.transferFilter);
  const sortTypeSelector = useSelector((state) => state.sort);
  const renderedTicketsSelector = useSelector((state) => state.renderedTicket);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (!searchId) return;
    dispatch(getTickets(searchId));
  }, [dispatch, searchId]);

  // юзэффект при изменении фильтра и сортировки и получения первой пачки
  useEffect(() => {
    dispatch(initRenderedTicketsAction(allTicketsSelector)); // обновил рендерТикеты в дефолт
    dispatch(filteredTicketsAction(allTicketsSelector, transferFilterInputsSelector)); // фильтрация тикетов
    dispatch(sortedTicketsAction(renderedTicketsSelector, sortTypeSelector)); // сортировка тикетов
  }, [allTicketsSelector, transferFilterInputsSelector, sortTypeSelector]);

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
