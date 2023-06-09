import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import Team from './components/team';
import About from './components/about';
import Login from './components/login'
import Pmaterial from './components/pmaterial'
import Past from './components/past'
import Clubs from './components/clubs'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/PDC" element={<About/>} />
        <Route path="/PDC/team" element={<Team />} />
        <Route path="/PDC/about" element={<About />} />
        <Route path="/PDC/login" element={<Login />} />
        <Route path="/PDC/PlacementMaterial" element={<Pmaterial />} />
        <Route path="/PDC/PastSecretaries" element={<Past />} />
        <Route path="/PDC/Clubs" element={<Clubs />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
