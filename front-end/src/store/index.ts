import { createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import createBrowserHistory from 'history/createBrowserHistory';
import reducer from '@App/store/reducers';
// import initSaga from '@App/store/sagas';

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION__: () => undefined;
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: StoreEnhancer) => undefined;
//   }
// }

// const sagaMiddleware = createSagaMiddleware();
// export const history = createBrowserHistory();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // composeEnhancers(applyMiddleware(sagaMiddleware)),

// sagaMiddleware.run(initSaga);

export default createStore(reducer);