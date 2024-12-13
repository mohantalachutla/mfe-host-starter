import { Routes, Route, Link, Outlet } from 'react-router';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Page from './pages/Page';
import PageNotFound from './components/common/PageNotFound';
import Text from './components/base/Text';
import Logout from './pages/Logout';
import Home from './pages/Home';
import useAuthentic from 'hooks/useAuthentic';
import { useDispatch } from 'react-redux';
import { getToken, getUser } from './utils/auth';
import { loginSuccess } from './reducers/auth';
import { useEffect } from 'react';
import useIsLoggedIn from './hooks/useIsLoggedIn';
import useToken from './hooks/useToken';
const AppRoutes = () => {
  useAuthentic();
  const isLogged = useIsLoggedIn();
  const dispatch = useDispatch();
  const token = useToken();
  useEffect(() => {
    if (!token && getToken()) {
      dispatch(
        loginSuccess({
          user: getUser(),
          token: getToken(),
        })
      );
    }
  }, []);
  return (
    <Routes>
      {/* protected routes */}
      <Route path="/" element={<Root />}>
        <Route index element={isLogged ? <Home /> : <LoginDisclaimer />} />
        <Route
          path="product"
          element={isLogged ? <Page /> : <LoginDisclaimer />}
        />

        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

export const Root = () => {
  return <Outlet />;
};

const LoginDisclaimer = () => {
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
