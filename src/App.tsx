import React, { useEffect, useState } from 'react';

import Login from './pages/Login';
import Welcome from './pages/Welcome';

import { login } from './services/login';

const App = (): JSX.Element => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const time = Number(sessionStorage.getItem('loginDate'));
    if (isFinite(time)) {
      setTime(time);
    }
  }, []);

  const onLogin = async (user: string, password: string): Promise<void> => {
    const loginResponse = await login(user, password);

    sessionStorage.setItem('loginDate', loginResponse.loginDate.toString());
    setTime(loginResponse.loginDate);
  };

  const onLogout = () => {
    setTime(0);
    console.log(time);
  };

  if (time === 0) return <Login onSubmit={onLogin} />;
  return <Welcome loginTime={time} onLogout={onLogout} />;
};

export default App;
