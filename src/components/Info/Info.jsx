import React from 'react'
import './info.css';
import user from '../../images/Icon/user.svg'
import location from '../../images/Icon/location.svg'
import server from '../../images/Icon/Server.svg'


const Info = () => {
  return (
    <div className='main-info'>
        <div className='user-info'>
         <img className='user-icon' src={user}></img>
          <div className='info'>
            <h1>90+</h1>
            <h4>Users</h4>
          </div>
        </div>

        <div className='location-info'>
         <img className='location-icon' src={location}></img>
          <div className='location'>
            <h1>30+</h1>
            <h4>Locations</h4>
          </div>
        </div>
        
        <div className='location-info'>
         <img className='user-icon' src={server}></img>
          <div className='server'>
            <h1>50+</h1>
            <h4>Servers</h4>
          </div>
        </div>
     

      

    </div>

    
  )
}

export default Info