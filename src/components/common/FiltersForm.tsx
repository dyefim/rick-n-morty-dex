import React from 'react';
import { handleFilterChange } from 'events/';
import { makeStyles } from '@material-ui/core/styles';
import formStyles from 'styles/formStyles';

const useStyles = makeStyles(theme => ({
  form: formStyles(theme),
}));

interface Props {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFilters: React.Dispatch<React.SetStateAction<any>>;
  className?: string;
}

const FiltersForm = ({ children, setFilters, className }: Props) => {
  const changeFilter = handleFilterChange(setFilters);

  const classes = useStyles();

  const classname = classes.form + (` ${className}` || '');

  return (
    <form className={classname}>
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return child;
        }

        return React.cloneElement(child, {
          ...child.props,
          handleInput: changeFilter,
          handleSelection: changeFilter,
        });
      })}
    </form>
  );
};

export default FiltersForm;
