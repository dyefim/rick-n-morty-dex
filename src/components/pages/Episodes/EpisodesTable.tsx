import React from 'react';
import { Episode } from 'types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import tableStyles from 'styles/tableStyles';

const useStyles = makeStyles({
  table: {
    ...tableStyles(),
  },
});

interface Props {
  episodes: Episode[];
}

const EpisodesTable = ({ episodes }: Props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table
        size="small"
        classes={{ root: classes.table }}
        aria-label="Episodes table"
      >
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
              <TableCell className="weak">{episode.episode}</TableCell>
              <TableCell>{episode.name}</TableCell>
              <TableCell className="weak" align="right">
                {episode.air_date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EpisodesTable;
