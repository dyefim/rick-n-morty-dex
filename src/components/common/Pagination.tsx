import React from 'react';
import { handlePagination, PageSetter } from 'events/';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    padding: `${theme.spacing(2)}px 0`,
  },
}));

interface Props {
  numberOfPages?: number;
  page: number;
  pageSetter: PageSetter;
}

const CustomPagination = ({ numberOfPages = 1, page, pageSetter }: Props) => {
  const classes = useStyles();

  return (
    <Pagination
      color="secondary"
      count={numberOfPages}
      page={page}
      onChange={handlePagination(pageSetter)}
      siblingCount={1}
      boundaryCount={1}
      className={classes.pagination}
    />
  );
};

export default CustomPagination;
