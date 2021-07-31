import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Navigation from './Navigation';
import Routes from './routes';
import useStyles from 'styles/mainStyles';

const theme = createTheme({
  palette: {
    text: {
      primary: '#fff',
      secondary: '#aaa',
    },
    primary: {
      main: '#03a9f4',
    },
    secondary: {
      main: '#00e676',
    },
  },
});

const Main = ({ mainTitle = `Rick'n'Morty-dex` }) => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Typography className={classes.mainTitle} align="center" variant="h1">
          {mainTitle}
        </Typography>
        <Routes />
        <Navigation />
      </Container>
    </MuiThemeProvider>
  );
};

export default Main;
