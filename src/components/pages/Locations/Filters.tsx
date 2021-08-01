import React from 'react';
import { handleFilterChange } from 'events/';
import { LocationFilters } from 'types';
import TextField from '@material-ui/core/TextField';

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<LocationFilters>>;
}

const Filters = ({ setFilters }: Props) => {
  const changeFilter = handleFilterChange(setFilters);

  const locationNameInput = (
    <TextField
      label={'Location name'}
      id={'name'}
      name={'name'}
      onChange={changeFilter as React.ChangeEventHandler}
      variant="outlined"
      autoComplete={'off'}
    />
  );

  const locationTypeInput = (
    <TextField
      label={'Type'}
      id={'type'}
      name={'type'}
      onChange={changeFilter as React.ChangeEventHandler}
      variant="outlined"
      autoComplete={'off'}
    />
  );

  const locationDimensionInput = (
    <TextField
      label={'Dimension'}
      id={'dimension'}
      name={'dimension'}
      onChange={changeFilter as React.ChangeEventHandler}
      variant="outlined"
      autoComplete={'off'}
    />
  );

  return (
    <form>
      <legend>Filters</legend>
      {locationNameInput}
      {locationTypeInput}
      {locationDimensionInput}
    </form>
  );
};

export default Filters;
