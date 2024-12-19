import { Switch, Route, Link } from 'react-router-dom';

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
    <Switch>
      {/* protected routes */}
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/product" render={() => <Page />} />

      {/* public routes */}
      <Route path="/login" render={() => <Login />} />
      <Route path="/register" render={() => <Register />} />
      <Route path="/logout" render={() => <Logout />} />
      <Route path="*" render={() => <PageNotFound />} />
    </Switch>
  );
};

export default AppRoutes;

const PrivateRoute = ({ render, ...props }) => {
  const isLoggedIn = useIsLoggedIn();
  return <Route {...props} render={isLoggedIn ? render : LoginDisclaimer} />;
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
