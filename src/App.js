import React, { useEffect } from 'react';

import CareerPage from './pages/CareerPage';
import Navbar from './components/Navbar';
import ProjectPage from './pages/ProjectPage';
import MainPage from './pages/MainPage';
import ServicePage from './pages/ServicePage';
import ProjectsPage from './pages/ProjectsPage';


import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import ServicesPage from './pages/ServicesPage';



const App = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])


  const projectPages = [1,2,3,4,5,6]
  const servicePages = [1,2,3]
  return (
    <div className='max-w-screen-3xl mx-auto'>
      <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<MainPage/>} />
            <Route exact path='/projects' element={<ProjectsPage/>} />
            <Route exact path='/services' element={<ServicesPage/>} />
            {projectPages.map((page) => (
              <Route exact path={`/project${page}`} element={<ProjectPage page={page}/>} />
            ))}
            {servicePages.map((page) => (
              <Route exact path={`/service${page}`} element={<ServicePage page={page}/>} />
            ))}
            <Route exact path='/career' element={<CareerPage/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;