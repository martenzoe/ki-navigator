import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Impressum from './pages/Impressum.jsx';
import Datenschutz from './pages/Datenschutz.jsx';
import UseCase from "./pages/UseCase";
import Geo from "./pages/GEO.jsx"; // 🔥 Wichtig: import Geo-Seite

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/usecase" element={<UseCase />} />
        <Route path="/geo" element={<Geo />} /> {/* ✅ Hier die fehlende Route */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
