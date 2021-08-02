import React from 'react';
import Select from 'components/common/Select';
import Input from 'components/common/Input';
import FiltersForm from 'components/common/FiltersForm';
import { CharacterFilters } from 'types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  form: {
    display: 'inline-grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<Partial<CharacterFilters>>>;
}

const CharacterFilters = ({ setFilters }: Props) => {
  const classes = useStyles();

  return (
    <FiltersForm setFilters={setFilters} className={classes.form}>
      <Select
        options={['', 'Alive', 'Dead', 'unknown']}
        label={'Status'}
        name={'status'}
      />
      <Select
        options={['', 'Female', 'Male', 'Genderless', 'unknown']}
        label={'Gender'}
        name={'gender'}
      />
      <Input label={'Species'} name={'species'} />
    </FiltersForm>
  );
};

export default CharacterFilters;
