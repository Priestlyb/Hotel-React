import React from 'react'
import "./newsletter.css"
import map from "./map.png"

function newsletter() {
  return (
    <div class="newsletter">
        <div class="row">
            <div class="newsletter-left col-lg-6">
                <h3>Newsletter</h3>
                <p>Get Update Through Email.</p>
              <form class="row g-3 needs-validation" novalidate>

              <div class='form-floating'>
              <input type="email" class="form-control" id="floatingInputValue validationTooltip01" placeholder="name@example.com" required />
              <label for="floatingInputValue">Email</label>
                </div>

              <div>
                <button class="email-btn btn w-100" type="submit">Subscribe</button>
              </div>
            </form>
            </div>
            <div class="newsletter-right col-lg-6">
              <img src={map} class="newsletter-img" alt="Map" />
            </div>
        </div>
        </div>
  )
}

export default newsletter;