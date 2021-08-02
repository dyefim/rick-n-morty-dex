import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
  value?: string;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  label?: string;
  id?: string;
}

const CustomInput = ({
  value,
  handleInput,
  name,
  label = name,
  id = name + '_input',
}: Props) => {
  const [pseudoValue, setPseudoValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInput(event);
    setPseudoValue(event.target.value);
  };

  return (
    <TextField
      value={value || pseudoValue}
      label={label}
      id={id}
      name={name}
      onChange={handleChange}
      variant="outlined"
      autoComplete={'off'}
      size="small"
      fullWidth
    />
  );
};

export default CustomInput;
