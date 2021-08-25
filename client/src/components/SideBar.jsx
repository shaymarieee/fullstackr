import React from 'react';


const SideBar = (props) => {

  return (
    <div className="sidebar" >
      <div className="d-flex flex-column flex-shrink-0 text-black bg-dark" style={{width: "200px", height: "700px", float: "left", borderRadius: "0px"}}>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a href="#" className="nav-link active bg-dark">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link active bg-dark">
              New Board
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link active bg-dark">
              Engineering Buddies
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar;