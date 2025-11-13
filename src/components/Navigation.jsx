import React from 'react'


function Navigation() {
  return (
    
      <nav className='container'>

        <div className='logo'>
          <img src="/assets/brand_logo.png" alt="logo" />
        </div>

        <ul>
          <li href="#">menu</li>
          <li href="#">location</li>
          <li href="#">about</li>
          <li href="#">contact</li>
        </ul>

        <button>Login</button>

      </nav>
   
  )
}

export default Navigation
