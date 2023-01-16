import React from 'react';
import "./navbar.css"
import {Link} from "react-router-dom"
import logo from './logo-email.png'

function navbar() {
  return (
    <div class ='container' id='navbar'>

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
                <a class="nav-link active" href="./">Home</a>
              </li>
              <li class="nav-item">
              <a class="nav-link active" href="./rooms">Rooms</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="./about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="./contact">Contact</a>
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