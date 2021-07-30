import React from 'react';
import { Character } from 'types';

interface Props {
  character: Character;
}

const cardStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ccc',
  margin: 10,
  padding: 10,
  borderRadius: 5,
};

const CharacterCard = ({ character }: Props) => {
  return (
    <div style={cardStyles}>
      {character.name}
      <img src={character.image} alt={character.name + ' image'} width="100" />
      <span>Origin: {character.origin.name}</span>
    </div>
  );
};

export default CharacterCard;
