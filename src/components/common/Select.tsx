import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectEvent } from 'types';

interface Props {
  value?: string;
  options: string[];
  handleSelection: React.EventHandler<SelectEvent>;
  label?: string;
  name: string;
  id?: string;
}

const Select = ({
  options,
  value = undefined,
  handleSelection,
  name,
  label = name,
  id = name + '_select',
}: Props) => {
  const [pseudoValue, setPseudoValue] = useState('');

  const handleChange = (event: SelectEvent) => {
    handleSelection(event);
    setPseudoValue(event.target.value);
  };

  return (
    <TextField
      select
      id={id}
      name={name}
      label={label}
      value={value || pseudoValue}
      onChange={handleChange}
      variant="outlined"
      size="small"
    >
      {options.map(option => (
        <MenuItem key={option} value={option}>
          {option || ' '}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Select;
