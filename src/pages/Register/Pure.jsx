import { useDispatch } from 'react-redux';
import Register from 'components/Register';
import { registerAction } from 'actions';
import { TOKEN_KEY } from 'env';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      navigate('/');
    }
  }, []);
  const handleSubmit = (data) => {
    dispatch(registerAction(data));
  };
  return <Register onSubmit={handleSubmit} />;
};

export default RegisterPage;
