import { BrowserRouter } from 'react-router';
import AppWrapper from './components/common/AppWrapper';
import AppRoutes from './Routes';
export default () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <AppRoutes />
      </AppWrapper>
    </BrowserRouter>
  );
};
