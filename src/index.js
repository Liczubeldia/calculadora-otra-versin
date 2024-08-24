import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot
import './index.css'; // Importa tus estilos globales
import App from './App'; // Importa tu componente principal
import "./App.css";

const rootElement = document.getElementById('root'); // Encuentra el elemento con el ID 'root'
const root = createRoot(rootElement); // Crea una raíz para tu aplicación

root.render(
  <React.StrictMode>
    <App /> {/* Renderiza tu componente principal */}
  </React.StrictMode>
);

