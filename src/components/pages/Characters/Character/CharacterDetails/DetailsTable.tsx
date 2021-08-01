import React from 'react';
import { Character } from 'types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import MuiTableCell from '@material-ui/core/TableCell';

const TableCell = withStyles({
  root: {
    borderBottom: 'none',
  },
})(MuiTableCell);

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  return (
    <Table size="small">
      <TableBody>
        <TableRow>
          <TableCell>Name:</TableCell>
          <TableCell>{character.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Status:</TableCell>
          <TableCell>{character.status}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Species:</TableCell>
          <TableCell>{character.species}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Type:</TableCell>
          <TableCell>{character.type || '?'}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Gender:</TableCell>
          <TableCell>{character.gender}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Location:</TableCell>
          <TableCell>{character.location.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Origin:</TableCell>
          <TableCell>{character.origin.name}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CharacterCard;
