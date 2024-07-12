import React from 'react'
import { Link } from 'react-router-dom';
import sicon from './sicon.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">News Daily</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search News" aria-label="Search" />
            <button onClick={(e) => {
              e.preventDefault();
            }} className="btn btn-outline-light" type="submit">
              <img src={sicon} alt="Search" className="search-icon" />
            </button>
          </form>
          <Link  to="/login" className="btn btn-outline-light ms-2 login-btn">
            Log-in / Sign-up
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar