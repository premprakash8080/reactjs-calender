import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components';
import { Calendar } from './pages';
import './App.css';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Calendar />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
