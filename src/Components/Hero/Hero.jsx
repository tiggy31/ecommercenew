import React from 'react'
import './Hero.styles.scss'

const Hero =() => {
   return(
    <section class="hero is-large is-info hero-image">
    <div class="hero-body">
    <div class="container">
      <h1 class="hero-title">
       MY WORLD
      </h1>
      <div className = "Shop-now-btn">
          <button className = 'button is-black' id = "shop-now">
            Shop now
          </button>
          </div>
      </div>
    </div>
  </section>
   )
}

export default Hero