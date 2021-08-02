import React from 'react';
import { EpisodeFilters } from 'types';
import FiltersForm from 'components/common/FiltersForm';
import Input from 'components/common/Input';

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<EpisodeFilters>>;
}

const Filters = ({ setFilters }: Props) => {
  return (
    <FiltersForm setFilters={setFilters}>
      <Input label={'Episode name'} name={'name'} />
    </FiltersForm>
  );
};

export default Filters;
