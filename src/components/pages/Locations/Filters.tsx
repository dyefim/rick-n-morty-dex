import React from 'react';
import { handleFilterChange } from 'events/';
import { LocationFilters } from 'types';

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<LocationFilters>>;
}

const Filters = ({ setFilters }: Props) => {
  const changeFilter = handleFilterChange(setFilters);

  const locationNameInput = (
    <label htmlFor="name">
      Location name
      <input type="text" name="name" id="name" onChange={changeFilter} />
    </label>
  );

  const locationTypeInput = (
    <label htmlFor="type">
      Type
      <input type="text" name="type" id="type" onChange={changeFilter} />
    </label>
  );

  const locationDimensionInput = (
    <label htmlFor="dimension">
      Dimension
      <input
        type="text"
        name="dimension"
        id="dimension"
        onChange={changeFilter}
      />
    </label>
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
