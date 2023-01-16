import React from 'react'
import "./quick-contact.css"

function quickcontact() {
  return (
    <div class="quick-contact">

        <button class="btt-btn btn" type="button" title="Back to top"><a href='#navbar'><i class="fa-solid fa-arrow-up"></i></a></button>

        <button class="quick-contact-btn btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><i class="fa-solid fa-message"></i></button>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
  <div class="offcanvas-body small">
    ...
  </div>
</div>
    </div>
  )
}

export default quickcontact