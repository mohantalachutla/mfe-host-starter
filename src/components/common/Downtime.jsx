import { NavLink } from 'react-router-dom';
import Container from '../base/Container';
const Downtime = () => {
  return (
    <Container>
      <h1>500</h1>
      <pre>
        Oops! Site is currently under maintenance. We regret the
        inconvenience!!!
      </pre>
      <NavLink to="/">Go to Home</NavLink>
    </Container>
  );
};

export default Downtime;
