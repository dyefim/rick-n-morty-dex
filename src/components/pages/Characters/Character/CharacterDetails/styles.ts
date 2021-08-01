import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    details: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(1),
      gap: theme.spacing(1),
      width: 300,
      backgroundColor: '#cdf',
    },
    avatar: {
      alignSelf: 'center',
    },
  })
);

export default useStyles;
