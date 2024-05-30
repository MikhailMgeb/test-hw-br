import React, { useEffect, useState } from 'react';
import { AppRoutes } from './Routes/Routes';

import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Footer } from './components/Footer/Footer';
import { cnApp } from './App.classname';
import { BASE_URL } from './utils/constants';

import './App.css';

const App = () => {
  const [isReadyCart, setIsReadyCart] = useState(false);

  useEffect(() => {
    fetch(`${BASE_URL}/Admin/create?value=5`, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(isReady => setIsReadyCart(isReady))
  }, [])

  console.log(isReadyCart)

  return (
    <div className={cnApp()}>
      <Header isReady={isReadyCart} />
      <div className={cnApp('Container')}>
        <SideBar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export { App };
