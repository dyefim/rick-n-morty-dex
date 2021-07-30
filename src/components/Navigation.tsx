import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/characters">Characters</Link>
      <Link to="/episodes">Episodes</Link>
      <Link to="/locations">Locations</Link>
      <Link to="/watch-list">My watch list</Link>
    </nav>
  );
};

export default Navigation;
