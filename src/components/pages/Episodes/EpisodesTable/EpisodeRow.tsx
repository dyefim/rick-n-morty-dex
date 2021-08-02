import React from 'react';
import { Episode } from 'types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface Props {
  episode: Episode;
}

const EpisodeRow = ({ episode }: Props) => {
  return (
    <TableRow key={episode.episode}>
      <TableCell className="weak">{episode.episode}</TableCell>
      <TableCell>{episode.name}</TableCell>
      <TableCell className="weak" align="right">
        {episode.air_date}
      </TableCell>
    </TableRow>
  );
};

export default EpisodeRow;
