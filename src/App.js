import React from 'react';
import {Meal} from './Meal';
import { Portfolio } from './Portfolio';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
    <Route path='/' element={<Portfolio />} />
    <Route path='/meal' element={<Meal />} />
    </Routes>
  );
}

export default App;
