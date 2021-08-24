import React from 'react';


const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex flex-column flex-shrink-0 text-black bg-none" style={{width: "50px", float: "left", marginLeft: "20px"}}>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a href="#" className="nav-link active bg-dark">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link active bg-dark">
              Hi
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link active bg-dark">
              Idk
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar;