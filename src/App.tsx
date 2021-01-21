import React from 'react';

import Login from './pages/Login';
import Welcome from './pages/Welcome';

const App = () => {
  if (true) return <Login />;
  return <Welcome loginTime={Date.now()} />;
};

export default App;
