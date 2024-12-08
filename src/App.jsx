import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './components/Leyout/Layout';
import Scrollbutton from './pages/ScrollTopButton/Scrollbutton';
import Courses from './pages/courses/Courses';
import Podcast from './pages/podcast/Podcast';
import Blog from './pages/blog/Blog';
import AboutUs from './pages/aboutus/AboutUs';
import Contact from './pages/contact/Contact';
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
          <Route path='/podcast' element={<Podcast />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
      <Scrollbutton/>
    </BrowserRouter>
  );
};

export default App;
