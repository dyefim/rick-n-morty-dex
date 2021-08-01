import React from 'react';
import { handleFilterChange } from 'events/';
import Select from 'components/common/Select';
import TextField from '@material-ui/core/TextField';
import { CharacterFilters } from 'types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    gap: theme.spacing(1),
    margin: `${theme.spacing(1)}px 0`
  },
  legend: {
    color: '#777',
  },
  select: {
    width: '100%',
  },
  input: {
    width: '100%',
  },
}));

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<CharacterFilters>>;
}

const Filters = ({ setFilters }: Props) => {
  const classes = useStyles();

  const changeFilter = handleFilterChange(setFilters);

  const statusSelect = (
    <Select
      options={['', 'Alive', 'Dead', 'unknown']}
      handleSelection={changeFilter}
      label={'Status'}
      name={'status'}
      className={classes.select}
    />
  );

  const genderSelect = (
    <Select
      options={['', 'Female', 'Male', 'Genderless', 'unknown']}
      handleSelection={changeFilter}
      label={'Gender'}
      name={'gender'}
      className={classes.select}
    />
  );

  const speciesInput = (
    <TextField
      id={'Species'}
      label={'Species'}
      name={'species'}
      onChange={changeFilter as React.ChangeEventHandler}
      variant="outlined"
      className={classes.input}
    />
  );

  return (
    <form className={classes.form}>
      {statusSelect}
      {genderSelect}
      {speciesInput}
    </form>
  );
};

export default Filters;
