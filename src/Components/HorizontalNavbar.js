import React from 'react'
import "../App.css"

function HorizontalNavbar({toggleSidebar}) {
  return (
<div className='topNavbarWrapper'>
<div className='navBarHambuger' onClick={toggleSidebar}> 
  <img src='images/menu.png' />
  </div>
<div className='search-input'>
  <input type='text' placeholder='search here.......' />

</div>
<div className='chat-icon'>
  <img src='images/chat.png'  className='hor-nav-icons' alt='chatIcon'/>
  <span className='dot-icon'>&#9679;</span>
  {/* <p className='dot-on-profile'>.</p> */}
</div>
   <div className='notif-icon'>
    <img src='images/bell.png'  className='hor-nav-icons'  alt='notficon' />
    {/* <p className='dot-on-profile'>.</p> */}
  <span className='dot-icon'>&#9679;</span>

   </div>
   <div className='profile-icon '>
<img src='images/profile.jpg'  className='hor-nav-icons'  alt='profileIcon' />
<span id="profile-text">Admin</span>
   </div>
    </div>
  )
}

export default HorizontalNavbar