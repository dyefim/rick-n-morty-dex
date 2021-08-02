import React from 'react';
import { handleFilterChange } from 'events/';
import { EpisodeFilters } from 'types';
import Input from 'components/common/Input';

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<EpisodeFilters>>;
}

const Filters = ({ setFilters }: Props) => {
  const changeFilter = handleFilterChange(setFilters);

  return (
    <form>
      <Input label={'Episode name'} name={'name'} handleInput={changeFilter} />
    </form>
  );
};

export default Filters;
