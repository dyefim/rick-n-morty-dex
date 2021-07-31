import React from 'react';
import { baseUrl } from 'services';
import { Character } from 'types';

interface Props {
  character: Character;
}

const cardStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#9cf',
  margin: 10,
  padding: 10,
  borderRadius: 5,
};

const CharacterCard = ({ character }: Props) => {
  const episodes = character.episode.map(episodeUrl =>
    episodeUrl.replace(`${baseUrl}/episode/`, '')
  );

  return (
    <div style={cardStyles}>
      <span>Name: {character.name}</span>

      <img src={character.image} alt={character.name + ' image'} width="100" />

      <span>Status: {character.status}</span>
      <span>Species: {character.species}</span>
      <span>Type: {character.type}</span>
      <span>Gender: {character.gender}</span>

      <span>Location: {character.location.name}</span>
      <span>Origin: {character.origin.name}</span>

      <span>Episodes: {episodes.join(', ')}</span>
    </div>
  );
};

export default CharacterCard;
