import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  sortCheapTicketsAction,
  sortFastTicketsAction,
  sortOptimalTicketsAction,
  backToFiveAction,
  // setSortedTicketsAction,
} from '../../redux/actions';
import './ticket-sort.css';

function TicketFilter() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  useEffect(() => {
    const sortButtons = document.querySelectorAll('.btn-sort');
    const buttons = [...sortButtons];
    buttons.map((btn) => btn.classList.remove('sort-active'));
    switch (selector.sort) {
      case 'CHEAP':
        buttons[0].classList.add('sort-active');
        break;
      case 'FAST':
        buttons[1].classList.add('sort-active');
        break;
      case 'OPTIMAL':
        buttons[2].classList.add('sort-active');
        break;
      default:
    }
  }, [selector.sort]);

  return (
    <div className="ticket-filter">
      <button
        type="button"
        className="btn-sort cheapest"
        onClick={() => {
          dispatch(backToFiveAction);
          dispatch(sortCheapTicketsAction);
          // cheapSort();
        }}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type="button"
        className="btn-sort fastest"
        onClick={() => {
          dispatch(backToFiveAction);
          dispatch(sortFastTicketsAction);
          // fastSort();
        }}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        type="button"
        className="btn-sort optional"
        onClick={() => {
          dispatch(backToFiveAction);
          dispatch(sortOptimalTicketsAction);
          // optimalSort();
        }}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}

export default TicketFilter;
