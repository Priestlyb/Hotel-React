import React from 'react'
import "./features.css"
import Hotel3 from "./Hotel-lobby-3.jpg"
import Hotel2 from "./Hotel-lobby-2.jpg"
import Hotel1 from "./Hotel-lobby-1.jpg"

function features() {
  return (
    <div>
        <section id="features">

      <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="features-img" src={Hotel3} alt="NotGoodlooking" width="100%" height="500px" />
          </div>
          <div class="carousel-item">
            <img class="features-img" src={Hotel1} alt="NotGoodlooking" width="100%" height="500px" />
          </div>
          <div class="carousel-item">
            <img class="features-img" src={Hotel2} alt="NotGoodlooking" width="100%" height="500px" />
          </div>

        </div>
      </div>


    <div class="row col-check">

        <div class="pricing-column col-lg-6 col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Check In Date</h3>
            <input className='check-input' type="datetime-local" id="check-out" name="check-out" min="2000-01-01T00:00" max="2500-06-14T00:00" />
          </div>
        </div>
      </div>

      <div class="pricing-column col-lg-6 col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Check Out Date</h3>
            <input className='check-input' type="datetime-local" id="check-out" name="check-out" min="2000-01-01T00:00" max="2500-06-14T00:00" />
          </div>
        </div>
      </div>

      <div class="pricing-column col-lg-4 col-md-6"> 
      <div class="card">
          <div class="card-header">
            <h3>Adult</h3>
            <input className='check-input' type="Number" id="check-out" value="1" name="adult-number" />
          </div>
        </div>
      </div>

      <div class="pricing-column col-lg-4 col-md-6"> 
      <div class="card">
          <div class="card-header">
            <h3>Childern</h3>
            <input className='check-input' type="Number" id="check-out" value="1" name="adult-number" />
          </div>
        </div>
      </div>

      <div class="pricing-column col-lg-4 col-md-6"> 
      <div class="card">
          <div class="card-header">
            <h3>Rooms</h3>
            <input className='check-input' type="Number" id="check-out" value="1" name="adult-number" />
          </div>
        </div>
      </div>

      <div class="pricing-column col-lg-12">  
      <div class="card">
          <div class="card-header">
              <button class=" check-btn w-100 btn btn-lg btn-block btn-outline-success" type="button">Book now!</button>
          </div>
        </div>
      </div>

      </div>


      <div class="row col-reason">

        <div class="pricing-column col-lg-6 col-md-6">
        <div class="card">
          <div class="card-header">
            Why lodge with us!
          </div>
        </div>
      </div>

      <div class="pricing-column col-lg-6 col-md-6">
        <div class="card">
          <div class="card-body">
            <p className='reason-p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      </div>


      

    </section>
    </div>
  )
}

export default features