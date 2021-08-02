import React from 'react';
import { Location } from 'types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface Props {
  location: Location;
}

const LocationRow = ({ location }: Props) => {
  return (
    <TableRow key={location.id}>
      <TableCell>{location.name}</TableCell>
      <TableCell>{location.type}</TableCell>
      <TableCell>{location.dimension}</TableCell>
    </TableRow>
  );
};

export default LocationRow;
