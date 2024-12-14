import { useDispatch } from 'react-redux';
import Register from 'components/Register';
import { registerAction } from 'actions';
import useRedirect from 'hooks/useRedirect';

const RegisterPage = () => {
  const dispatch = useDispatch();
  useRedirect();
  const handleSubmit = (data) => {
    dispatch(registerAction(data));
  };

  return <Register onSubmit={handleSubmit} />;
};

export default RegisterPage;
