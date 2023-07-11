import React from 'react'

 function Footer() {
  return (
    <footer className='footer container'>
        <div className="footer_left">
          <h1 className='footer_title'>Actionist</h1>
        </div>

        <div className="footer_content">
          <h1 className='footer_content-title'>Find Us</h1>
          <p className='footer_content-p'>1925 Century Park East</p>
          <p className='footer_content-p'>Los Angeles, CA 90067</p>
        </div>

        <div className="footer_link">
            <h1 className='footer_content-title'>Follow Us</h1>
            <p className='footer_content-p'>© Copyright 2023</p>
            <p className='footer_content-p'>Actionist Consulting</p>
        </div>
    </footer>
  )
}

export default Footer