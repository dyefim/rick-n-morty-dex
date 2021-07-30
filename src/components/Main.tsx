import React from 'react';
import Navigation from './Navigation';
import Routes from './routes';

const title = `Rick'n'Morty-dex`;

const Main = () => {
  return (
    <div>
      <h1>{title}</h1>
      <Navigation />
      <Routes />
    </div>
  );
};

export default Main;
