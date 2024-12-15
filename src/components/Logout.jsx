import { NavLink } from 'react-router';
import Text from 'components/base/Text';

const Logout = () => {
  return (
    <Text variant="pre">
      you have been logged out! Please{' '}
      <Text variant="b">
        <NavLink to="/login">login</NavLink>
      </Text>{' '}
      again
    </Text>
  );
};

export default Logout;
