import { StateSetter, PageSetter, SelectOrInputChangeEvent } from './types';

const handleInput =
  (inputSetter: React.Dispatch<React.SetStateAction<string>>) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    inputSetter(event.target.value);
  };

const handleFilterChange =
  <F>(filterSetter: StateSetter<F>) =>
  (event: SelectOrInputChangeEvent) => {
    filterSetter(filters => ({
      ...filters,
      [event.target.name]: event.target.value,
    }));
  };

const handlePagination =
  (pageSetter: PageSetter) =>
  (_: React.ChangeEvent<unknown>, value: number) => {
    pageSetter(value);
  };

export { handleInput, handleFilterChange, handlePagination };
