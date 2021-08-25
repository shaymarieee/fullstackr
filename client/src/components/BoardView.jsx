import React , { useState, useEffect } from 'react';
import Tickets from './Tickets.jsx';

const BoardView = (props) => {
  //console.log(props.currentBoard)
  //also gonna need ticket props or maybe just make the call here
  //const [tickets, setTickets] = useState([]);

  //wait i have to loop thru the ticket statuses and populate each div that way

  // tickets.forEach((ticket) => {
  //   if (ticket.status)
  // })

  return (
    <div>
      <h1>{props.currentBoard.name}</h1>
      <div className="row">
        <div className="col-md-3 backlog">
          <h2>Ticket</h2>
        </div>
        <div className="col-md-3 in progress">
        </div>
        <div className="col-md-3 staging">
        </div>
        <div className="col-md-3 done">
        </div>
      </div>
    </div>
  )
};

export default BoardView;