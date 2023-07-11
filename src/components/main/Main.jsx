import React from 'react'

 function Main() {
  return (
    <div className='main container'>
        <div className="main_top ">
            <div className="main_top-left">
              <h1 className='main_top-title'>Who is your <br /> Actionist?</h1>
              <div className="main_top-img"></div>
            </div>

            <div className="main_top-right">
              <p className='main_top-p'>Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit. Numquam <br /> dolor dicta corporis, <br /> provident tempore nostrum. <br /> mission pswed.</p>
              <button className='main_top-btn'>See Examples</button>
            </div>
        </div>

        <div className="main_mid container">
            <h1 className='main_mid-titl'>Our Value Proposition</h1>
            <div className="main_mid-boxing">

              <div className="main_mid-box">
                <div className="main_mid-imgbox"></div>
                <h1 className="main_mid-title">
                  Top-Tier Professionals
                </h1>
                <p className='main_mid-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cumque illum quaerat fugit quae, <br /> natus sint pariatur.</p>
              </div>

              <div className="main_mid-box">
              <div className="main_mid-imgbox2"></div>
                <h1 className="main_mid-title">
                  Deep Client Parthnership
                </h1>
                <p className='main_mid-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cumque illum quaerat fugit quae, <br /> natus sint pariatur.</p>
                  <button className='main_mid-btn'>Read More Our Approach</button>
              </div>

              <div className="main_mid-box">
              <div className="main_mid-imgbox3"></div>
                <h1 className="main_mid-title">
                  Commitment to Client Returns
                </h1>
                <p className='main_mid-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cumque illum quaerat fugit quae, <br /> natus sint pariatur.</p>
              </div>
            </div>

        </div>

        <div className="main_bottom container">
            <h1 className='main_bottom-title'>Our Clients</h1>
            <p className='main_bottom-p'>Actionist serves leading companies including Fortune 500 players, <br /> top investment firms, and high-growth disruptors.</p>
            <div className="main_bottom-right">
              <div className="main_bottom-img"></div>
              <div className="main_bottom-content">
                <h1 className='main_bottom-title'>Careres</h1>
                <p className='main_bottom-p'>Actionist is looking to grow our team of top- <br /> tier talent. We look for intellectual horsepower, <br /> curiosity, leadership, and communications <br /> prowess.</p>
                <button className='main_bottom-btn'>Apply Now</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main