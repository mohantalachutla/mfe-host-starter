import { useSelector } from 'react-redux';

export default () => useSelector((state) => state.auth.token);
