import React from 'react'
import './index.css'; 
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import ChatBot from './pages/chatbot';
import NotFoundPage from './pages/not_found';
import Transactions from './pages/transaction'
import SaisieTest from './pages/saisie';
import AppelSimulation from './pages/appel_simulation';
import Faq from './pages/faq';
function App() {

  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/exemple" element={<Exemple />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/saisie" element={<SaisieTest />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/simulation-appels" element={<AppelSimulation />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

