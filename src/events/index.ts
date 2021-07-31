type FilterSetter<F> = React.Dispatch<React.SetStateAction<F>>;

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

export { handleInput, handleFilterChange };
