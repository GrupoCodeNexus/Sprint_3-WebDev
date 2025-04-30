// importando rotas e componentes necessárias
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import Error from './routes/Error';
import Login from './routes/Login';
import Home from './routes/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Problema from './routes/Problema';
import Solucao from './routes/Solucao';

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage ? <Nav /> : null}
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Problema" element={<Problema />} />
        <Route path="/Solucao" element={<Solucao />} />
      </Routes>
      {!isLoginPage ? <Footer /> : null}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;