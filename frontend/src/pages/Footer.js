import React from 'react'
import "./pages.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className="footer">
      <p className='footer-name'>Asian Castle</p>
      <div>
        <p className='social-links'>Social Links</p>
        <div className='social-icons'>
          <p><FontAwesomeIcon icon={faLinkedinIn} /></p>
          <p><FontAwesomeIcon icon={faInstagram} /></p>
          <p><FontAwesomeIcon icon={faXTwitter} /></p>
          <p><FontAwesomeIcon icon={faFacebookF} /></p>
          <p><FontAwesomeIcon icon={faYoutube} /></p>            
        </div>  
      </div>
      <hr />
      <p className='copy-rights'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. 2025 © Asian Castle™ Ltd. All rights reserved.</p>
      {/* All trademarks are properties of their respective owners. */} 
    </div>
     
  )
}
