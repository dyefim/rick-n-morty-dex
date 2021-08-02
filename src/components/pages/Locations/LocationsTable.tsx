import React from 'react';
import { Location } from 'types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import tableStyles from 'styles/tableStyles';

const useStyles = makeStyles({
  table: {
    ...tableStyles(),
  },
});

interface Props {
  locations: Location[];
}

const LocationsTable = ({ locations }: Props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table
        size="small"
        classes={{ root: classes.table }}
        aria-label="Locations table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Dimension</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locations?.map(location => (
            <TableRow key={location.id}>
              <TableCell>{location.name}</TableCell>
              <TableCell>{location.type}</TableCell>
              <TableCell>{location.dimension}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LocationsTable;
