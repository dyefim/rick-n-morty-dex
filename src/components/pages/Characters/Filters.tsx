import React from 'react';
import { CharacterFilters } from 'types';

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<CharacterFilters>>;
}

const renderSelectOptions = (oprionsArr: string[]) =>
  oprionsArr.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

const Filters = ({ setFilters }: Props) => {
  const changeFilter = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters(filters => ({
      ...filters,
      [event.target.name]: event.target.value,
    }));
  };

  const statusSelect = (
    <label htmlFor="status">
      Status
      <select onChange={changeFilter} name="status" id="status">
        {renderSelectOptions(['', 'Alive', 'Dead', 'unknown'])}
      </select>
    </label>
  );

  const genderSelect = (
    <label htmlFor="gender">
      Gender
      <select onChange={changeFilter} name="gender" id="gender">
        {renderSelectOptions(['', 'Female', 'Male', 'Genderless', 'unknown'])}
      </select>
    </label>
  );
  const speciesInput = (
    <label htmlFor="species">
      Species
      <input type="text" name="species" id="species" onChange={changeFilter} />
    </label>
  );

  return (
    <form>
      <legend>Filters</legend>
      {statusSelect}
      {genderSelect}
      {speciesInput}
    </form>
  );
};

export default Filters;
