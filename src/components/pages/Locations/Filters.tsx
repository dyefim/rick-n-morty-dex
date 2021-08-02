import React from 'react';
import { LocationFilters } from 'types';
import FiltersForm from 'components/common/FiltersForm';
import Input from 'components/common/Input';

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<LocationFilters>>;
}

const Filters = ({ setFilters }: Props) => {
  return (
    <FiltersForm setFilters={setFilters}>
      <Input label={'Location name'} name={'name'} />
      <Input label={'Location type'} name={'type'} />
      <Input label={'Dimension'} name={'dimension'} />
    </FiltersForm>
  );
};

export default Filters;
