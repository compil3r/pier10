import React from 'react';
import { TextField, Typography } from '@mui/material';
import Button from '../components/Button';  // Importando o botão reutilizável
import '../styles/login.css';  // Importando o CSS específico da página

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <Typography variant="h4" className="login-title">
          Entrar
        </Typography>
        <TextField 
          fullWidth 
          label="Email" 
          variant="outlined" 
          margin="normal" 
        />
        <TextField 
          fullWidth 
          label="Senha" 
          type="password" 
          variant="outlined" 
          margin="normal" 
        />
        <Button fullWidth>
          Entrar
        </Button>
      </div>
    </div>
  );
};

export default Login;
