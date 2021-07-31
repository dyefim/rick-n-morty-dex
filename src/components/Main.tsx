import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Navigation from './Navigation';
import Routes from './routes';
import useStyles from 'styles/mainStyles';

const Main = ({ mainTitle = `Rick'n'Morty-dex` }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography className={classes.mainTitle} align="center" variant="h1">
        {mainTitle}
      </Typography>
      <Routes />
      <Navigation />
    </Container>
  );
};

export default Main;
