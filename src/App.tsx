import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { AppRoutes } from './Routes/Routes';
import { Header } from './components/Header/Header';
import { BASE_URL } from './utils/constants';
import { textsDropMenu } from './utils/content';

import { cnApp } from './App.classname';

import './App.css';



const App = () => {
  const [isReadyCart, setIsReadyCart] = useState(false);

  useEffect(() => {
    fetch(`${BASE_URL}/Admin/create?value=5`, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(isReady => setIsReadyCart(isReady))
  }, []);

  return (
    <div className={cnApp()}>
      <Header isReady={isReadyCart} dropMenuContent={textsDropMenu} />
      <div className={cnApp('Container')}>
        <AppRoutes />
      </div>
    </div>
  );
}

export { App };
