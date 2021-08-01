type FilterSetter<F> = React.Dispatch<React.SetStateAction<F>>;

export type PageSetter = React.Dispatch<React.SetStateAction<number>>;

type SelectOrInputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement
>;

const handleInput =
  (inputSetter: React.Dispatch<React.SetStateAction<string>>) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    inputSetter(event.target.value);
  };

const handleFilterChange =
  <F>(filterSetter: FilterSetter<F>) =>
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
