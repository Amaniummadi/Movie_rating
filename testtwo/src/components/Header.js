
import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (

        <nav>
        <div class="nav-wrapper nav-padding">
          <Link to='/' class="brand-logo left">MovieList</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
          
          </ul>
        </div>
      </nav>


    )
}

export default Header
