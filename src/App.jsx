import React from 'react';
import { BrowserRouter as Router, Route, Routes ,  } from "react-router-dom";
import NavBar from './Components/Nav/NavBar';
import Hero from './Components/Header/Hero';
import Expertise from './Components/Expertise/Expertise';
import SectionComponent from './Components/SectionComponent';
import Footer from './Components/Expertise/Footer';

const App = () => {
  return (

   <div>
     <Router>
        <NavBar className="shadow-2xl" />
        <Hero />
        <Expertise />
        <SectionComponent />
        <Footer />
        <Routes>
        <Route path='/' element={<h1></h1>} />
    </Routes>
    </Router>
   </div>
  );
};

export default App;
