import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/settings/colors.css';
import './styles/generics/reset.css';
import './styles/elements/base.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

