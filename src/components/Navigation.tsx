import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FaceIcon from '@material-ui/icons/Face';
import MovieIcon from '@material-ui/icons/Movie';
import ExploreIcon from '@material-ui/icons/Explore';
import QueueIcon from '@material-ui/icons/Queue';
import useStyles from 'styles/bottomNavStyles';
import useNavigation from 'hooks/useNavigation';

const Navigation = () => {
  const [value, handleChange] = useNavigation('/characters');

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
        icon={<QueueIcon />}
      />
    </BottomNavigation>
  );
};

export default Navigation;
