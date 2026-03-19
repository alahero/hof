import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RedesignPage from './pages/RedesignPage';

/**
 * App raíz: enrutamiento.
 * / = homepage (dark). /redesign = homepage en light mode.
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
        <Route path="/redesign" element={<RedesignPage />} />
      </Routes>
    </BrowserRouter>
  );
}
