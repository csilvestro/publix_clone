//Parent/Smart Component: App
import React from 'react';
//React Router
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Header from './components/Header';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Header />
      {/* A navigation would go here */}
      <Routes>
        <Route exact path='/' element={<Layout />} /> 
        <Route path='/Layout' element={<Layout />} /> 
        <Route path='/Cart' element={<Cart />} /> 
      </Routes>
    </div>
  );
}

export default App;
