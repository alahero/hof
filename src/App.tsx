import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

/** App raíz: enrutamiento (homepage en tema claro). */
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
