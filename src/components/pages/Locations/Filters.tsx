import React from 'react';
import { handleFilterChange } from 'events/';
import { LocationFilters } from 'types';
import Input from 'components/common/Input';
import { makeStyles } from '@material-ui/core/styles';
import formStyles from 'styles/formStyles';

const useStyles = makeStyles(theme => ({
  form: formStyles(theme),
}));

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<LocationFilters>>;
}

const Filters = ({ setFilters }: Props) => {
  const changeFilter = handleFilterChange(setFilters);

  const classes = useStyles();

  return (
    <form className={classes.form}>
      <Input label={'Location name'} name={'name'} handleInput={changeFilter} />
      <Input label={'Location type'} name={'type'} handleInput={changeFilter} />
      <Input
        label={'Dimension'}
        name={'dimension'}
        handleInput={changeFilter}
      />
    </form>
  );
};

export default Filters;
