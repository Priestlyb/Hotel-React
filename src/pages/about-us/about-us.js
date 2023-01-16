import React from 'react';
import "./about-us.css";

function aboutus() {
  return (
    <>
    <div class='container-fuild about-container'>
      <div class='row'>
        <div class='about-title col-lg-6'>
          <h1>Partnerhip & Customer Happiness</h1>
        </div>
        <div class='col-img col-lg-6'>
        <img src="https://www.ekohotels.com/assets/img/eh-diplomatic-suites.jpg" class="about-img" alt="Map" />
        </div>
      </div>
    </div>

    <div class='team container'>
      <h2 className='team-tittle'>Meet Our People</h2>

      <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
        <div class="carousel-inner">

          <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div class="testimonials-carousel carousel-item active">

        <div class='row team-row'>

        <div class='col-lg-6'><img className='team-img ' src='https://www.ekohotels.com/assets/img/gallery/ga-restaurant-16.jpg' alt='staff' />
        </div>

        <div class='col-lg-6'>
            <h1 className='quote-left'>,,</h1>
            <p className='quote'>Most of what I've learned in my career been during a period of hyper growth and change.</p>
            <h1 className='quote-right'>,,</h1>
            <p className='team-position'>Owner of Pristina</p>
            <h3 className='name'>Mr. Patrick Bassey</h3>
          </div>
          
        </div>

      </div>

        <div class="testimonials-carousel carousel-item">

        <div class='row team-row'>

        <div class='col-lg-6'><img className='team-img ' src='https://www.ekohotels.com/assets/img/gallery/ga-restaurant-5.jpg' alt='staff' />
        </div>

        <div class='col-lg-6'>
            <h1 className='quote-left'>''</h1>
            <p className='quote'>Most of what I've learned in my career been during a period of hyper growth and change.</p>
            <h1 className='quote-right'>''</h1>
            <p className='team-position'>Co_Owner of Pristina</p>
            <h3 className='name'>Mr. Priestly Bassey</h3>
          </div>
          
        </div>

      </div>

        <div class="testimonials-carousel carousel-item">

        <div class='row team-row'>

        <div class='col-lg-6'><img className='team-img ' src='https://www.ekohotels.com/assets/img/gallery/ga-restaurant-14.jpg' alt='staff' />
        </div>

        <div class='col-lg-6'>
            <h1 className='quote-left'>''</h1>
            <p className='quote'>Most of what I've learned in my career been during a period of hyper growth and change.</p>
            <h1 className='quote-right'>''</h1>
            <p className='team-position'>Co_Owner of Pristina</p>
            <h3 className='name'>Miss. Pedita Bassey</h3>
          </div>
          
        </div>

      </div>
      
      </div>
      </div>
      
    </div>

    <div class='more-team container'>
      <div class='row'>
      <h1 className='team-tittle'>Explore more teams?</h1>

      <div class='card col-lg-4'>
        <img class='more-team-img w-100' src='https://www.ekohotels.com/assets/img/gallery/ga-restaurant-12.jpg' alt='IMG' />
        <div class='card-header'>
        <h4>Kitchen</h4>
        <p>We're the wizard behind the Delicious meals you will soon or have had before. Sit back and place your order let's fill you mouth</p>
        </div>

      </div>

      <div class='card col-lg-4'>
        <img class='more-team-img w-100' src='https://i.pinimg.com/564x/c6/83/15/c68315fd38eaef82878c6d8a5722bae3.jpg' alt='IMG' />
        <div class='card-header'>
        <h4>Taxi</h4>
        <p>We're the wizard behind the Delicious Taxi you will soon or have had before. Sit back and place your order let's fill you mouth</p>
        </div>

      </div>

      <div class='card col-lg-4'>
        <img class='more-team-img w-100' src='https://i.pinimg.com/564x/1a/9c/f9/1a9cf90d9f858b56dee5bdaf8fb66b84.jpg' alt='IMG' />
        <div class='card-header'>
        <h4>Laundry</h4>
        <p>We're the wizard behind the Delicious washing you will soon or have had before. Sit back and place your order let's fill you mouth</p>
        </div>

      </div>

    </div>
    </div>

    <div class="container" id="ovmv">
      <div class="row">

        <div class="ovmv col-lg-6">
          <h2><span className='our'>OUR</span> VISION & MISSION</h2>
          <ul>
            <li>We aspire to be the leading and preferred hotel in West Africa</li>
          </ul>
        </div>

        <div class="ovmv col-lg-6">
          <h2><span className='our'>OUR</span> VALUES</h2>
          <ul>
            <li>We aspire to be the leading and preferred hotel in West Africa</li>
          </ul>
        </div>
      </div>
    </div>

    <div class='email container-fluid'>
      <h2>We're building a different kind of hotel</h2>
      <p>Don't miss a step in our journey. Add your email to stay updated on our newest project and job openings</p>
  

      <form class="row g-3 needs-validation" novalidate>

        <div class='form-floating col-lg-6'>
        <input type="text" class="form-control" id="floatingInputValue validationTooltip01" placeholder="name@example.com" required />
        <label for="floatingInputValue">Name</label>
          <div class="valid-tooltip">
            Looks good!
          </div>
          </div>

        <div class='form-floating col-lg-6'>
        <input type="email" class="form-control" id="floatingInputValue validationTooltip01" placeholder="name@example.com" required />
        <label for="floatingInputValue">Email</label>
          <div class="valid-tooltip">
            Looks good!
          </div>
          </div>

        <div class="col-12">
          <button class="email-btn btn w-100" type="submit">Subscribe</button>
        </div>
      </form>

      </div>                                                                                                                                                       
    </>
  )
}

export default aboutus
 