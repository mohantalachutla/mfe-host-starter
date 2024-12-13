import { Routes, Route, Link } from 'react-router';
import { isVerifiedUser } from './utils/auth';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Page from './pages/Page';
import PageNotFound from './components/common/PageNotFound';
import Logout from './pages/Logout';
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      {/* protected routes */}
      <Route index element={withProtection(<Home />)} />
      <Route path="/product" element={withProtection(<Page />)} />

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
    <div>
      <h3>
        Please <Link to="/login">Login</Link> to view this page
      </h3>
    </div>
  );
};
