import { NavLink } from 'react-router-dom';
import Container from '../base/Container';
const PageNotFound = () => {
  return (
    <Container>
      <h1>404</h1>
      <pre>Oops! Page not found</pre>
      <NavLink to="/">Go to Home</NavLink>
    </Container>
  );
};

export default PageNotFound;
