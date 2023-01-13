import React from 'react'
import "./testimonials.css"
import Dp from "./NotGoodlooking.jfif"

function testimonials() {
  return (
    <div class="testimonials">
        <section id="testimonials">
      <div id="carouselExampleSlidesOnly" class="carousel" data-bs-ride="carousel" data-bs-interval="5000">
        <div class="carousel-inner">
          <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
          <div class="testimonials-carousel carousel-item active">
            <h2>I no longer have to sniff other dogs for love.I've my dog on TinDog. Wooof!</h2>
            <img class="testimonials-img" src={Dp} alt="NotGoodlooking" width="15%" />
            <em>Pebbles, New York</em>
          </div>
          <div class="testimonials-carousel carousel-item">
            <h2>I no longer have to sniff other dogs for love.I've my dog on TinDog. Wooof!</h2>
            <img class="testimonials-img" src={Dp} alt="NotGoodlooking" width="15%" />
            <em>Pebbles, Niger York</em>
          </div>
          <div class="testimonials-carousel carousel-item">
            <h2>I no longer have to sniff other dogs for love.I've my dog on TinDog. Wooof!</h2>
            <img class="testimonials-img" src={Dp} alt="NotGoodlooking" width="15%" />
            <em>Pebbles, Nigeria York</em>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default testimonials