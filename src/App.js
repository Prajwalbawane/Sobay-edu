import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header'

// Pages
import HomePage from './pages/HomePage'
import MSQPage from './pages/MSQPage'
import NotesPage from './pages/NotesPage'
import PYQPage from './pages/PYQPage'

import AskAiPage from './pages/AskAIPage'
import DailyTest from './pages/DailyTest'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'
// import NotesPage from './pages/NotesPage'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/msq-test" element={<MSQPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/pyqpage" element={<PYQPage />} />
        <Route path="/ask-ai" element={<AskAiPage/>} />
        <Route path="/daily-test" element={<DailyTest />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer/>
    </Router>
  )
}
