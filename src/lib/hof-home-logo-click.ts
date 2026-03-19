import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Click del logo: en la home ya estamos en `/` y React Router no remonta la ruta,
 * así que hay que subir el scroll y quitar el hash manualmente.
 */
export function useHomeLogoClick() {
  const location = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (location.pathname !== '/') return;

      e.preventDefault();
      if (location.hash) {
        navigate({ pathname: '/', hash: '' }, { replace: true });
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [location.pathname, location.hash, navigate],
  );
}
