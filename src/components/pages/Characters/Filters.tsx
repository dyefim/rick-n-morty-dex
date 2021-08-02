import React from 'react';
import { handleFilterChange } from 'events/';
import Select from 'components/common/Select';
import Input from 'components/common/Input';
import { CharacterFilters } from 'types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'inline-grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: theme.spacing(1),
    margin: `${theme.spacing(1)}px 0`,
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
    />
  );

  const genderSelect = (
    <Select
      options={['', 'Female', 'Male', 'Genderless', 'unknown']}
      handleSelection={changeFilter}
      label={'Gender'}
      name={'gender'}
    />
  );

  const speciesInput = (
    <Input label={'Species'} name={'species'} handleInput={changeFilter} />
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
