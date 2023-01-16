import React from 'react'
import "./footer.css"
import logo from './logo-email.png'

function footer() {
  return (
    <div div className='footer'>
    <div class ='row' >

        <div class='footer-left col-lg-4'>
            <a class="nav-link active" href="./">HOME</a>
            <a class="nav-link active" href="./about">ABOUT</a>
            <a class="nav-link active" href="./contact">CONTACT US</a>
            <a class="nav-link active" href="./terms&condition">TERMS & CONDITIONS</a>
            <a class="nav-link active" href="./about#ovmv">OUR VISION & MISSION</a>
        </div>
        
        <div class=' footer-left col-lg-4'>
            <p>Ikot Ekpene local Government Area, Uyo, Akwa ibom State, Nigeria</p>
            <p>+234-806-716-6984</p>
            <p>Pristina@gmail.com</p>
        </div>

        <div class=' footer-right col-lg-4'>
            <a  href="./facebook.com">
            <span><i class="fa-brands fa-facebook"></i></span>
            </a>
            <a href="./facebook.com">
            <span><i class="fa-brands fa-whatsapp"></i> </span>
            </a>
        </div>
    </div>

    <hr/>
    
    <div class ='row'>
        <div class=' footer-left col-lg-6'>
            <p>©️ 2022 Designer Who Codes</p>
        </div>
        <div class=' footer-right col-lg-6'>
            <img className='footer-img' src={logo} alt="logo" />
        </div>
    </div>
    </div>
  )
}

export default footer