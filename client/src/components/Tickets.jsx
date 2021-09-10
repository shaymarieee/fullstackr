import React from 'react';

const Tickets = (props) => {

  return (
    <div className="ticket-container-container">
      {props.tix.map((ticket) => {
        return (
          <div className="ticket-container">
            <div className="t-header">
              <h5>{ticket.title}</h5>
              <p>{ticket.size}</p>
            </div>
            <p>{ticket.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Tickets;