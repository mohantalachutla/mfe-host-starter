import { NavLink } from 'react-router';

const Logout = () => {
  return (
    <div>
      you have been <b>logged out!</b> Please{' '}
      <NavLink to="/login">login</NavLink> again
    </div>
  );
};

export default Logout;
