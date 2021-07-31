import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FaceIcon from '@material-ui/icons/Face';
import MovieIcon from '@material-ui/icons/Movie';
import ExploreIcon from '@material-ui/icons/Explore';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import useStyles from 'styles/bottomNavStyles';

const Navigation = () => {
  const history = useHistory();
  const location = useLocation();

  const changeLocation = (path = '/') => {
    history.push(path);
  };

  const [value, setValue] = useState(() => location.pathname || '/characters');

  const handleChange = (_: unknown, newValue: string) => {
    setValue(newValue);
    changeLocation(newValue);
  };

  const classes = useStyles();

  return (
    <BottomNavigation
      className={classes.bottomNav}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        value="/characters"
        label="Characters"
        icon={<FaceIcon />}
      />
      <BottomNavigationAction
        value="/episodes"
        label="Episodes"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        value="/locations"
        label="Locations"
        icon={<ExploreIcon />}
      />
      <BottomNavigationAction
        value="/watch-list"
        label="Watchlist"
        icon={<PlaylistPlayIcon />}
      />
    </BottomNavigation>
  );
};

export default Navigation;
