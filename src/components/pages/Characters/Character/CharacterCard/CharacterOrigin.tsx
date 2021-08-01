import React from 'react';
import { Character } from 'types';
import Typography from '@material-ui/core/Typography';

interface Props {
  originName: Character['origin']['name'];
}

const CharacterOrigin = ({ originName }: Props) => {
  return (
    <Typography component="small" color="textSecondary">
      Origin: {originName}
    </Typography>
  );
};

export default CharacterOrigin;
