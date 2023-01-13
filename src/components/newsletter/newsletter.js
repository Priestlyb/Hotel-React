import React from 'react'
import "./newsletter.css"
import map from "./map.png"

function newsletter() {
  return (
    <div>
        <div class="newsletter">
        <div class="row">
            <div class="newsletter-left col-lg-6">
                <h3>Newsletter</h3>
                <p>Get Update Through Email.</p>
              <div class="form-floating mb-3">
                <input type="email" className='newsletter-input' class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>
              <button class="newsletter-btn w-100 btn btn-lg btn-block btn-outline-dark" type="button">Subscribe</button>
            </div>
            <div class="newsletter-right col-lg-6">
              <img src={map} class="newsletter-img" alt="Map" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default newsletter