import React from 'react'
import "./Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <div className='navbar' >
      <img className=' logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt='netflix-logo' />
      <div className='names'>
      <h3 className='home' >Home </h3>
      <h3 className='home'>TV Shows </h3>
      <h3 className='home'>Movies </h3>
      <h3 className='home'>Recently Asked </h3>
      </div>

      <div className='names-end'>
      <FontAwesomeIcon className='search' icon={faSearch} size="lg" />
        <h3>KIDS</h3>
      </div>
      
      
      <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117 " alt="Avathar" />
    </div>
  )
}

export default Navbar
