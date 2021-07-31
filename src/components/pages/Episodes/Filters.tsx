import React from 'react';
import { handleFilterChange } from 'events/';
import { EpisodeFilters } from 'types';

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<EpisodeFilters>>;
}

const Filters = ({ setFilters }: Props) => {
  const changeFilter = handleFilterChange(setFilters);

  const episodeNameInput = (
    <label htmlFor="name">
      Episode name
      <input type="text" name="name" id="name" onChange={changeFilter} />
    </label>
  );

  return (
    <form>
      <legend>Filters</legend>
      {episodeNameInput}
    </form>
  );
};

export default Filters;
