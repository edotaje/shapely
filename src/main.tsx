import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import CookiePolicy from './pages/CookiePolicy.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
