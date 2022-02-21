import React from 'react';
import trade from '../assets/trade.png'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="signup">
        <div className="container">
            <div className="left">
                <img src={trade} alt="" />
            </div>
            <div className="right">
                <h2>Earn Passive income with crypto.</h2>
                <p>Earn up to 12% annual rewards on 30+ digital assets through staking. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                <div className="input-container">
                    <input type="email" placeholder="Enter your email" />
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp