import React from 'react'
import './contact.css'

function contact() {
  return (
    <div class='container'>
      <div className='contact'>
        <h1 className='contact-title'>Say hello to us!</h1>
        <p className='contact-sub'>Let's talk busines or just have a coffee. <br/> We would love to heard from you</p>

        <p className='address'>ADDRESS</p>
        <p className='address-text'>Ikot Ekpene local Government Area, Uyo, Akwa ibom State, Nigeria</p>

        <p className='address'>PHONE</p>
        <p className='address-text'>+234-806-716-6984</p>

        <p className='address'>E-MAIL</p>
        <p className='address-text'>Pristina@gmail.com</p>
        
        <div class ='row'  >
            <div class=' contact-left col-lg-6'>
            <a class="contact-btn" href="mailto:pbassey30@gmail.com">Email ME</a>
            </div>
            <div class=' contact-right col-lg-6'>
            <a href='#'><i class="fa-brands fa-facebook"></i></a>
            <a href='#'><i class="fa-brands fa-whatsapp"></i> </a>
            </div>
        </div>

        
      <div className='contact-bg'><h1>________________________________________________________________________________________________________</h1></div>

      </div>
      
    </div>
  )
}

export default contact