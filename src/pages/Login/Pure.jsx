import { useDispatch } from 'react-redux';
import Login from 'components/Login';
import { loginAction } from 'actions';
import useNavigate from 'hooks/useNavigate';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    dispatch(loginAction(data));
    navigate('/', { replace: true });
  };
  return <Login onSubmit={handleSubmit} />;
};

export default LoginPage;
