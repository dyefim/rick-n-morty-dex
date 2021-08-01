import React from 'react';
import { Character } from 'types';
import Paper from '@material-ui/core/Paper';
import DetailsTable from './DetailsTable';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  const classes = useStyles();

  return (
    <Paper elevation={12} className={classes.details}>
      <Avatar
        src={character.image}
        alt={character.name + ' image'}
        className={classes.avatar}
      />
      <DetailsTable character={character} />
    </Paper>
  );
};

export default CharacterCard;
