import React from 'react';
import { Character } from 'types';

type Props = Pick<Character, 'image' | 'name'>;

const CharacterImage = ({ image, name }: Props) => {
  return (
    <img
      src={image}
      alt={name + ' image'}
      width="100"
      style={{ borderRadius: 10 }}
    />
  );
};

export default CharacterImage;
