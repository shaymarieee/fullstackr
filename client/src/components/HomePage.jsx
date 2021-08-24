import React from 'react';

const HomePage = (props) => {
  //

  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 twxt-white bg-dark" style={{width: "200px", float: "left"}}>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link active">
              Hi
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link active">
              Idk
            </a>
          </li>
        </ul>
      </div>
      <section className="one">
        <h1>Hi</h1>
      </section>
      <section className="two">
        <h1>Hello</h1>
      </section>
      <section className="three">
        <h1>Hi Again</h1>
      </section>
    </div>
  )
}

export default HomePage;