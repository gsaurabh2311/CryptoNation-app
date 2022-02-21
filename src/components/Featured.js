import React from 'react'
import BTC from '../assets/btc-img.png'
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Solana</h2>
                <p>Check out all available assets: Cryptocurrencies and NFT's</p>
                <button className="btn">See More Coins</button>
            </div>

            <div className="right">
                <div className="top">
                    <img src={BTC} alt="" />
                </div>
                <div>
                    <h5>Bitcoin</h5>
                    <p>$50000</p>
                </div>
                <span><FiArrowUpRight />2.5%</span>
            </div>
        </div>
    </div>
  )
}

export default Featured