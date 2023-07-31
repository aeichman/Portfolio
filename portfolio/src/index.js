import React from 'react';
import { render } from 'react-dom'; // Adjust the import statement
import AppRouter from './AppRouter';
import App from './App'
import './index.css';
import './App.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dubcalendar from './Dubcalendar';
import Projects from './Projects';
import About from './About';

render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/about" element={<About /> } />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
