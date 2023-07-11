import React from 'react'

 function Header() {
  return (
    <header className='header'>
        <div className="header_row container">
          <div className="header_logo">
            <h1 className='header_logotype'>Actionist</h1>
          </div>

          <div className="header_navbar">
            <a className='header_link' href="">Service</a>
            <a className='header_link' href="">Mission</a>
            <a className='header_link' href="">Team</a>
            <a className='header_link' href="">Careers</a>
            <a className='header_link' href="">Contact</a>
          </div>
        </div>

        <div className="header_title container">
            <h1>We are action-oriented strategists. <br /> We help our clients achieve geat things</h1>
        </div>
    </header>
  )
}

export default Header