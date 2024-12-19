import { useDispatch } from 'react-redux';
import Register from 'components/Register';
import { registerAction } from 'actions';
import useNavigate from 'hooks/useNavigate';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    dispatch(registerAction(data));
    navigate('/', { replace: true });
  };
  return <Register onSubmit={handleSubmit} />;
};

export default RegisterPage;
