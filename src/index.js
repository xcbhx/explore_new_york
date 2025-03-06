import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LocationList from './components/LocationList/LocationList';
import Details from './components/Details/Details';
import About from './components/About/About';
import Privacy from './components/Privacy/Privacy';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<LocationList />}/>
          <Route path='/details/:id' element={<Details/>} />
          <Route path='about' element={<About />} />
          <Route path='privacy' element={<Privacy />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
