import React from 'react';
import { AppRoutes } from './Routes/Routes';

import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Footer } from './components/Footer/Footer';
import { cnApp } from './App.classname';

import './App.css';

const App = () => {
  return (
    <div className={cnApp()}>
      <Header />
      <div className={cnApp('Container')}>
        <SideBar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export { App };
