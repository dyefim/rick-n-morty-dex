import React from 'react';
import Routes from './routes';
import Navigation from './Navigation';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useStyles from 'styles/mainStyles';
import theme from 'styles/theme';

const Main = ({ mainTitle = `Rick'n'Morty-dex` }) => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Typography className={classes.mainTitle} align="center" variant="h1">
          {mainTitle}
        </Typography>
        <Routes />
        <div style={{ height: 100 }}></div>
        <Navigation />
      </Container>
    </MuiThemeProvider>
  );
};

export default Main;
