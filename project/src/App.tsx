import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { CompleteProfile } from './pages/CompleteProfile';
import { Explore } from './pages/Explore';
import { Collaborate } from './pages/Collaborate';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="complete-profile" element={<CompleteProfile />} />
          <Route path="explore" element={<Explore />} />
          <Route path="collaborate" element={<Collaborate />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;