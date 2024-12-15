import { useDispatch } from 'react-redux';
import Login from 'components/Login';
import { loginAction } from 'actions';
import { useNavigate } from 'react-router';
import { TOKEN_KEY } from 'env';
import { useEffect } from 'react';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      navigate('/');
    }
  }, []);
  const handleSubmit = (data) => {
    dispatch(loginAction(data));
  };
  return <Login onSubmit={handleSubmit} />;
};

export default LoginPage;
