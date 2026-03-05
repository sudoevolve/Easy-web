import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage } from './components/LandingPage'
import { PRESETS } from './lib/presets'

function App() {
  return (
    <Router>
      {/* Global Noise Overlay */}
      <div className="noise-overlay" />
      
      <Routes>
        {/* Main Site - Preset A */}
        <Route path="/" element={<LandingPage preset={PRESETS.A} allPresets={PRESETS} />} />
        
        {/* Showcase Sites - Other Presets */}
        <Route path="/preset-b" element={<LandingPage preset={PRESETS.B} allPresets={PRESETS} />} />
        <Route path="/preset-c" element={<LandingPage preset={PRESETS.C} allPresets={PRESETS} />} />
        <Route path="/preset-d" element={<LandingPage preset={PRESETS.D} allPresets={PRESETS} />} />
        
        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
