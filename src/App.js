import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import StudentList from './Components/StudentList';
import SideNavbar from './Components/SideNavbar';
import HorizontalNavbar from './Components/HorizontalNavbar';
import MainContainer from './Components/MainContainer';
// import StudentForm from './Components/StudentForm';
import StudentUpdate from './Components/EditStudentForm';
import StudentView from "./Components/StudentView"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Dashboard/>} />
    
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
