import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import FontStyles from './assets/fonts/FontStyles.tsx';
import GlobalStyles from './GlobalStyles.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <FontStyles />
    <App />
  </StrictMode>
);
