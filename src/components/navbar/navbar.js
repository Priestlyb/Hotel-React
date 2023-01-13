import React from 'react';
import "./navbar.css"
import {Link} from "react-router-dom"
import logo from './logo-email.png'

function navbar() {
  return (
    <div class ='container'>

    <nav class="navbar navbar-expand-md">
        <Link class="navbar-brand" href="#">
          <img src={logo} alt="" width="125px" />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav" Style="margin-left: auto;">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">Rooms</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">Contact us</Link>
              </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                  </Link>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" href="#">Dashboard</Link></li>
                    <li><Link class="dropdown-item" href="#">Setting</Link></li>
                    <li><Link class="dropdown-item" href="#">Sign out</Link></li>
                  </ul>
                </li>
              <li class="nav-item">
                <Link class="nav-link disabled">Best Hotel & Suite in Africa</Link>
              </li>
            </ul>
            </div>
      </nav>
    </div>
  )
}

export default navbar