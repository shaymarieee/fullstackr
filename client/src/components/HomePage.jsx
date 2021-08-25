import React from 'react';

const HomePage = (props) => {
  //PASS DOWN BOARDS AVAILABLE TO CURRENT USER AND DISPLAY SOME DEETS ABOUT THEM
  console.log('NDJAFK', props.boards);

  return (
    <div className="homepage">
      {props.boards.map((board) => {
        return ( <section >
            <h1 onClick={() => {props.setCurrentBoard(board)}}>{board.name}</h1>
          </section>
         )
      })}
    </div>
  )
}

export default HomePage;

/*
      <section className="one">
        <h1>Hi</h1>
      </section>
      <section className="two">
        <h1>Hello</h1>
      </section>
      <section className="three">
        <h1>Hi Again</h1>
      </section>
*/