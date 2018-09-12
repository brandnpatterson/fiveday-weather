import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {};
const middleware = [thunk];
const devEnv = process.env.NODE_ENV === 'development';

const store = createStore(
  reducers,
  initialState,
  devEnv
    ? compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : compose(applyMiddleware(...middleware))
);

export default store;
