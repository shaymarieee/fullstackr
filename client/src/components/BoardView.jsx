import React , { useState, useEffect } from 'react';
import Tickets from './Tickets.jsx';

const BoardView = (props) => {
  let backlog = [];
  let inProgress = [];
  let review = [];
  let done = [];

  props.tickets.forEach((ticket) => {if (ticket.status === 'backlog') {
    backlog.push(ticket)
  } else if (ticket.status === 'in progress') {
    inProgress.push(ticket)
  } else if (ticket.status === 'review') {
    review.push(ticket)
  } else if (ticket.status === 'done') {
    done.push(ticket)
  }
  });


  return (
    <div>
      <h1 className="board-title">{props.currentBoard.name}</h1>
      <div className="row">
        <div className="col-sm-2 backlog">
          <h4>Backlog</h4>
          <Tickets tix={backlog}/>
        </div>
        <div className="col-sm-2 inprogress">
          <h4>In Progress</h4>
          <Tickets tix={inProgress}/>
        </div>
        <div className="col-sm-2 staging">
          <h4>Under Review</h4>
          <Tickets tix={review}/>
        </div>
        <div className="col-sm-2 done">
          <h4>Done</h4>
          <Tickets tix={done}/>
          </div>
        </div>
    </div>
  )
};

export default BoardView;