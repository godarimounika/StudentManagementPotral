import React, { useState } from 'react'
import SideNavbar from './SideNavbar'
import HorizontalNavbar from './HorizontalNavbar'
import MainContainer from './MainContainer'
import { Route, Routes } from 'react-router-dom'
import StudentForm from './StudentForm'
import StudentList from './StudentList'
import StudentView from './StudentView'
import EditStudentForm from "./EditStudentForm"

function Dashboard() {
const[isSideBarCollapsed, setIsSideBarCollapsed] = useState(false)


const toggleSideBar =()=>{
  setIsSideBarCollapsed(!isSideBarCollapsed);
}


  return (
<div className={`dashboard-container ${isSideBarCollapsed ? 'collapsed' : ''}`}>
    <div className="side-nav-bar">
<SideNavbar isCollapsed={isSideBarCollapsed}/>
    </div>
    <div className='maincontainer-wrapper'>
        <div className='topNavbar'>
        <HorizontalNavbar toggleSidebar={toggleSideBar} />

        </div>
<div className='main-part'>
<Routes>
  
  <Route path='/' element={< MainContainer/>}/>
  <Route path='/StudentForm'  element={<StudentForm/>}  />

  <Route  path='/StudentList' element={<StudentList/>} />
  
  <Route path='/students/view/:id' element={<StudentView />} />
  <Route path='/students/edit/:id' element={<EditStudentForm/>} />



</Routes>
</div>

    </div>
   

</div>
  )
}

export default Dashboard