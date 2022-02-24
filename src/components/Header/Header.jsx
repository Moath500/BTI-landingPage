import React from 'react'
import './header.css';
import headerimg from '../../images/header.png';
const Header = () => {
  return (
    <div className='header-items'>
        <div>
            <h1>Want anything to be easy with LaslesVPN.</h1>
            <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            <button className='start-btn'>Get Started</button>
        </div>
        <div className='h-photo'>
          <img src={headerimg} />
        </div>
    </div>
  )
}

export default Header