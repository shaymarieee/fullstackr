import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const HomePage = (props) => {
  //PASS DOWN BOARDS AVAILABLE TO CURRENT USER AND DISPLAY SOME DEETS ABOUT THEM
  const { width, height } = useWindowSize();

  return (
    <div className="homepage">
      {props.boards.length > 0 ?
        props.boards.map((board) => {
          return ( <section >
            <Confetti width={width} height={height} run={true} recycle={false} tweenDuration={8000}/>
              <h1 onClick={() => {props.setCurrentBoard(board)}}>{board.name}</h1>
                   </section>
        )}) : <section>
          <Confetti width={width} height={height} run={true} recycle={false} tweenDuration={8000}/>
          <h1>WELCOME FRIEND!!!! 🥳</h1>
          {/* <p onClick={() => {props.newBoardForm(true)}}>Create your first board?</p> */}
        </section>}
    </div>
  )
}

export default HomePage;