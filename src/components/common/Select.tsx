import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectEvent } from 'types';

interface Props {
  value?: string;
  options: string[];
  handleSelection: React.EventHandler<SelectEvent>;
  label?: string;
  name: string;
  className?: string | undefined;
  max?: string;
}

const Select = ({
  options,
  value = undefined,
  handleSelection,
  label = 'Select',
  name,
  className,
}: Props) => {
  const [pseudoValue, setPseudoValue] = useState('');

  const handleChange = (event: SelectEvent) => {
    handleSelection(event);
    setPseudoValue(event.target.value);
  };

  return (
    <FormControl className={className} color="secondary">
      <TextField
        select
        id={name}
        name={name}
        label={label}
        value={value || pseudoValue}
        onChange={handleChange}
        variant="outlined"
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

export default Select;
