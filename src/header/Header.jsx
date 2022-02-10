import React from 'react'
import logo from '../Images/logo.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <nav className="navbar myNav navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand logoBox"><img src={logo} alt="logo" /></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav my-links mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link active" aria-current="page">Home</p>
              </li>
              <li className="nav-item">
                <p className="nav-link active" aria-current="page">About</p>
              </li>
              <li className="nav-item">
                <p className="nav-link active" aria-current="page">Blog</p>
              </li>
              <li className="nav-item">
                <p className="nav-link active" aria-current="page">Contact</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header