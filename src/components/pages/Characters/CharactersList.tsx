import React from 'react';
import CharacterCard from './Character/CharacterCard';
import { Character } from 'types';
import Grid from '@material-ui/core/Grid';

interface Props {
  characters: Character[];
}

const CharactersList = ({ characters }: Props) => {
  const charactersCards = characters?.map((character: Character) => {
    return (
      <Grid key={character.id} item xs={6} md={4}>
        <CharacterCard key={character.id} character={character} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={2}>
      {charactersCards}
    </Grid>
  );
};

export default CharactersList;
