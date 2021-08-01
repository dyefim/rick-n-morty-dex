import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainTitle: {
    padding: theme.spacing(2),
    fontSize: '1.75rem',
    fontWeight: 'normal',
    letterSpacing: -1,
    fontStyle: 'italic',
    // color: '#88d446',
    color: '#36d',
  },
}));

export default useStyles;
