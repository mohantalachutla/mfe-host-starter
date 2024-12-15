import { Routes, Route, Link } from 'react-router';
import { isVerifiedUser } from './utils/auth';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Page from './pages/Page';
import PageNotFound from './components/common/PageNotFound';
import Text from './components/base/Text';
import Logout from './pages/Logout';
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      {/* protected routes */}
      <Route index path="/" element={withProtection(<Home />)} />
      <Route path="product" element={withProtection(<Page />)} />

      {/* public routes */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="logout" element={<Logout />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;

const withProtection = (element) => {
  if (isVerifiedUser()) {
    return element;
  }
  return (
    <Text variant="pre">
      <Text variant="h3">
        Please{' '}
        <Text variant="b">
          <Link to="/login">Login</Link>
        </Text>{' '}
        to view this page
      </Text>
    </Text>
  );
};
