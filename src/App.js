import { BrowserRouter } from 'react-router';
import AppWrapper from './components/common/AppWrapper';
import Navbar from './components/base/Navbar';
import AppRoutes from './Routes';
import { TOKEN_KEY } from './env';
export default () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Menu />
        <AppRoutes />
      </AppWrapper>
    </BrowserRouter>
  );
};

const Menu = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="/favicon.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          A2Z
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={window.location.pathname === '/'}>
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/orders"
          active={window.location.pathname === '/orders'}
        >
          Orders
        </Navbar.Link>
        <Navbar.Link
          href="/wishlist"
          active={window.location.pathname === '/wishlist'}
        >
          Wishlist
        </Navbar.Link>
        <Navbar.Link
          href="/about"
          active={window.location.pathname === '/about'}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          active={window.location.pathname === '/logout'}
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem(TOKEN_KEY);
            window.location.href = '/logout';
          }}
        >
          Logout
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
