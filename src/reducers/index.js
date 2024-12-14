import helloReducer from './hello';
import loaderReducer from './loader';
import modalReducer from './modal';
import cacheReducer from './cache';
import authReducer from './auth';

export default {
  hello: helloReducer,
  loader: loaderReducer,
  modal: modalReducer,
  cache: cacheReducer,
  auth: authReducer,
};
