import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PipsWithPaul } from './PipsWithPaul';
import { ClifsCatalog } from './ClifsCatalog';
import { Resume } from './Resume';
import { CCLighting } from './CCLighting';

export const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path='/pipswithpaul' element={<PipsWithPaul />} />
    <Route path='/clifscatalog' element={<ClifsCatalog />} />
    <Route path='/resume' element={<Resume />} />
    <Route path='/cclighting' element={<CCLighting />} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
