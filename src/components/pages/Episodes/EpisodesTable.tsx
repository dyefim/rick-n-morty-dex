import React from 'react';
import { Episode } from 'types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface Props {
  episodes: Episode[];
}

const EpisodesTable = ({ episodes }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Episode</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Air date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {episodes?.map(episode => (
            <TableRow key={episode.episode}>
              <TableCell>{episode.episode}</TableCell>
              <TableCell>{episode.name}</TableCell>
              <TableCell align="right">{episode.air_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EpisodesTable;
