import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './components/Leyout/Layout';
import Scrollbutton from './pages/ScrollTopButton/Scrollbutton';
import Courses from './pages/courses/Courses';

const App = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/courses' element={<Courses />} />
        </Route>
      </Routes>
      <Scrollbutton/>
    </BrowserRouter>
  );
};

export default App;
