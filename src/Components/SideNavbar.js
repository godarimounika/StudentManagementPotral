import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'
function SideNavbar({isCollapsed}) {
    return (
        <div className="sidebar-wrapper ">
          <div className={`logo-icon ${isCollapsed ? 'collapsed' : ''}`}>
            <img src='images/logo-icon3.jpg'     className={`logo ${isCollapsed ? 'collapsed' : ''}`}   alt="logo-icon" />
          </div>
          <div className='dashboard icons'>
        <img src='images/dashboard.png' alt="dashboard" />
   
          <NavLink className={({ isActive }) => isActive ? 'navlink active-link' : 'navlink'} to="/">
         { !isCollapsed &&   <p className='nav-items'>Dashboard</p>}
          </NavLink>
 
      </div>
      <div className='Student-Registration icons'>
        <img src='images/contact-form.png' alt="student-form" />
      
          <NavLink className={({ isActive }) => isActive ? 'navlink active-link' : 'navlink'} to="/studentForm">
          {!isCollapsed &&   <p className='nav-items'>Student Form</p>}
          </NavLink>
     
      </div>
      <div className='Students-List icons'>
        <img src='images/list.png' alt="student-list" />
     
          <NavLink className={({ isActive }) => isActive ? 'navlink active-link' : 'navlink'} to="/studentList">
          {!isCollapsed &&  <p className='nav-items'>Student List</p>}
          </NavLink>
       
      </div>

      <div className='sideNav-botton-icons'>
        <div className='Settings icons'>
          <img src='images/gear.png' alt="settings" />
          {!isCollapsed && <p className='nav-items'>Settings</p>}
        </div>
        <div className='Logout icons'>
          <img src='images/logout.png' alt="logout" />
          {!isCollapsed && <p className='nav-items'>Logout</p>}
        </div>
        </div>
        </div>
    )
}

export default SideNavbar