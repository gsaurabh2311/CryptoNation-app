import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="left">
                <p>Buy & Sell Crypto 24x7 using your account.</p>
                <h1>Invest in Cryptocurrency with your IRA</h1>
                <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                <div className="input-container">
                    <input type="email" placeholder="Enter your email" />
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </div>

        <div className="right">
            <div className="img-container">
                <img src={Crypto} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Hero