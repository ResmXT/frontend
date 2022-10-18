import React from 'react';
import { Provider } from 'react-redux';
import { configureReducer } from './redux';
import Router from './router/Router';

const store = configureReducer();
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
