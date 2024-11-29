import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './components/Leyout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Digər route-lar əlavə edilə bilər */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
