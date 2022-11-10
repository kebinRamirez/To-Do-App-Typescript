import React, { useEffect } from 'react';
import AppNavigator from './src/navigators/MainNavigator';
import store from './src/redux/store'
import { Provider } from 'react-redux'



const App = () => {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
