import React from 'react'
import './Footer.css'
import {FaFacebook, FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="col col-1">
               <h1>Crypto<span className="primary">Nation</span></h1> 
            </div>  
            <div className="col">
                <h5>Support</h5>
                <span className="bar"></span>
                    <a href='/#'>Contact Us</a>
                    <a href='/#'>Chat</a>
                    <a href='/#'>Help Center</a>
                    <a href='/#'>Developers</a>
            </div>
            <div className="col">        
                <h5>Developers</h5>
                <span className="bar"></span>
                    <a href='/#'>Cloud</a>
                    <a href='/#'>Api</a>
                    <a href='/#'>Pro</a>
            </div>
            <div className="col">    
                <h5>Company</h5>
                <span className="bar"></span>
                    <a href='/#'>About</a>
                    <a href='/#'>Privacy</a>
                    <a href='/#'>Legal</a>
            </div>
            <div className="col">    
                <h5>Social</h5>
                <span className="bar"> </span>
                    <a href='/#'><FaFacebook className="icon" /></a>
                    <a href='/#'><FaTwitter className="icon" /></a>
                    <a href='/#'><FaLinkedin className="icon" /></a>
                    <a href='/#'><FaGithub className="icon" /></a>
            </div>
        </div>    
    </div>
  )
}

export default Footer