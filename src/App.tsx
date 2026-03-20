import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Basename de React Router = BASE de Vite (sin slash final).
 * Con `base: './'` queda undefined (sitio en raíz del dominio).
 * Si publicas en subruta (p. ej. github.io/nombre-repo/), define en vite `base: '/nombre-repo/'`
 * para que las rutas /hero-option-* coincidan con el pathname real.
 */
function routerBasename() {
  const base = import.meta.env.BASE_URL;
  if (base === '/' || base === './') return undefined;
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

export default function App() {
  return (
    <BrowserRouter basename={routerBasename()}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hero-option-2" element={<HomePage heroOption={2} />} />
        <Route path="/hero-option-3" element={<HomePage heroOption={3} />} />
        <Route path="/hero-option-4" element={<HomePage heroOption={4} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
