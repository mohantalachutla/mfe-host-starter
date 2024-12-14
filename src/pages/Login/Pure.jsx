import { useDispatch } from 'react-redux';
import Login from 'components/Login';
import { loginAction } from 'actions';
import useRedirect from 'hooks/useRedirect';

const LoginPage = () => {
  const dispatch = useDispatch();
  useRedirect();
  const handleSubmit = (data) => {
    dispatch(loginAction(data));
  };
  return <Login onSubmit={handleSubmit} />;
};

export default LoginPage;
