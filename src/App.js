import { BrowserRouter, useNavigate } from 'react-router';
import AppWrapper from './components/common/AppWrapper';
import Navbar from './components/base/Navbar';
import AppRoutes from './Routes';
import { useDispatch } from 'react-redux';
import { logout } from './reducers/auth';
import useIsLoggedIn from './hooks/useIsLoggedIn';
export default () => {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Menu />
        <AppRoutes />
      </BrowserRouter>
    </AppWrapper>
  );
};

const Menu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useIsLoggedIn();
  const navigate = useNavigate();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand onClick={() => navigate('/')}>
        <img src="/favicon.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          A2Z
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          active={window.location.pathname === '/'}
          onClick={() => navigate('/')}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          active={window.location.pathname === '/orders'}
          onClick={() => navigate('/orders')}
        >
          Orders
        </Navbar.Link>
        <Navbar.Link
          active={window.location.pathname === '/wishlist'}
          onClick={() => navigate('/wishlist')}
        >
          Wishlist
        </Navbar.Link>
        <Navbar.Link
          active={window.location.pathname === '/about'}
          onClick={() => navigate('/about')}
        >
          About
        </Navbar.Link>
        {isLoggedIn && (
          <Navbar.Link
            active={window.location.pathname === '/logout'}
            onClick={(e) => {
              e.preventDefault();
              dispatch(logout());
              navigate('/logout');
            }}
          >
            Logout
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
