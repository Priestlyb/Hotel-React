import React from 'react'
import "./services.css"
import Hotel2 from "./Hotel-lobby-2.jpg"

function services() {
  return (
    <div class='container-fluid'>
    <div class="row services-row">

        <p id='services'>SERVICES</p>

        <div class="card col-lg-3 col-md-6" >
        <img src={Hotel2} class="card-img-top" alt="..." />
        <div class="card-header">
        <h4 class="card-text-header">Swimming Pool</h4>
        </div>
        <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        
        <div class="card col-lg-3 col-md-6" >
        <img src={Hotel2} class="card-img-top" alt="..." />
        <div class="card-header">
        <h4 class="card-text-header">Resturants</h4>
        </div>
        <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        
        <div class="card col-lg-3 col-md-6" >
        <img src={Hotel2} class="card-img-top" alt="..." />
        <div class="card-header">
        <h4 class="card-text-header">Clubs</h4>
        </div>
        <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        
        <div class="card col-lg-3 col-md-6" >
        <img src={Hotel2} class="card-img-top" alt="..." />
        <div class="card-header">
        <h4 class="card-text-header">Gym</h4>
        </div>
        <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
    
    </div>

    
    <div class="row extra-row">

        <h5 class='etc'> Et Cetera</h5>

        <div class="card col-lg-3 col-md-6" >
        <i class=" icon fa-brands fa-accessible-icon"></i>
        <div class="card-body">
        <p>Accessible</p>
        </div>
        </div>

        <div class="card col-lg-3 col-md-6" >
        <i class=" icon fa-solid fa-wifi"></i>
        <div class="card-body">
        <p>Wi-fi</p>
        </div>
        </div>

        <div class="card col-lg-3 col-md-6" >
        <i class=" icon fa-solid fa-people-group"></i>
        <div class="card-body">
        <p>Meeting Hall</p>
        </div>
        </div>

        <div class="card col-lg-3 col-md-6" >
        <i class=" icon fa-solid fa-children"></i>
        <div class="card-body">
        <p>Mini Club</p>
        </div>
        </div>
    
    </div>

    </div>
  )
}

export default services