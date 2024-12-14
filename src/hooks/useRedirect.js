import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { TOKEN_KEY } from 'env';

export default function useRedirect(path) {
  const navigate = useNavigate();
  const token = localStorage.getItem(TOKEN_KEY);
  console.log({ token });
  useEffect(() => {
    if (token) {
      navigate(path ?? '/');
    }
  }, [token, navigate]);
}
