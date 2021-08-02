import { Theme } from '@material-ui/core/styles';

const formStyles = (theme: Theme) => ({
  display: 'grid',
  gap: theme.spacing(1),
  margin: `${theme.spacing(1)}px 0`,
});

export default formStyles;
