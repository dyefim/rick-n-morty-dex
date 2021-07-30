import React from 'react';

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<{ name: string }>>;
}

const Filters = ({ setFilters }: Props) => {
  const changeFilter = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters(filters => ({
      ...filters,
      [event.target.name]: event.target.value,
    }));
  };

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
