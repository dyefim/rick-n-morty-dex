import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectEvent } from 'types';
// import { makeStyles } from '@material-ui/core/styles';

interface Props {
  value?: string;
  options: string[];
  handleSelection: React.EventHandler<SelectEvent>;
  label?: string;
  name: string;
  className?: string | undefined;
  max?: string;
}

// const useStyles = makeStyles(theme => ({
//   form: {
//     display: 'flex',
//     // flexDirection: 'column',
//     gap: theme.spacing(4),
//     padding: theme.spacing(1),
//   },
//   legend: {
//     color: '#777',
//   },
//   select: {
//     color: 'red',
//   },
// }));

const Select = ({
  options,
  value = undefined,
  handleSelection,
  label = 'Select',
  name,
  className,
}: Props) => {
  // const classes = useStyles();

  return (
    <FormControl className={className} color="secondary">
      <TextField
        select
        id={name}
        name={name}
        label={label}
        value={value}
        onChange={handleSelection}
        variant="outlined"
        // color="secondary"
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
