import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Login from './pages/Login';
import theme from './theme'; // Importando o tema personalizado
import './styles/global.css';  // Importando o CSS global

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Adicione mais rotas aqui conforme necessário */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
