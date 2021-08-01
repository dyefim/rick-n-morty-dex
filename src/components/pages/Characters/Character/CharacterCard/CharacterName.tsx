import React from 'react';
import { Character } from 'types';
import Typography from '@material-ui/core/Typography';

type Props = Pick<Character, 'name'>;

const CharacterName = ({ name }: Props) => {
  return <Typography color="primary">{name}</Typography>;
};

export default CharacterName;
