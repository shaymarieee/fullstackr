import React from 'react';

const Tickets = (props) => {

  return (
    <div className="ticket-container-container">
      {props.tix.map((ticket) => {
        return (
          <div className="ticket-container">
            <h5>{ticket.title}</h5>
            <p>{ticket.size}</p>
            <p>{ticket.description}</p>
          </div>
        )
  })}
    </div>
  )
}

export default Tickets;