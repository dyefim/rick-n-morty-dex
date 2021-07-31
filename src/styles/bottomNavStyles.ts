import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  bottomNav: {
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    zIndex: 100,
  },
}));

export default useStyles;
