import React from 'react';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './core/store';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
};

export default App;
