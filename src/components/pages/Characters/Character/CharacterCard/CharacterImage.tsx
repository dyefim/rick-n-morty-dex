import React from 'react';
import { Character } from 'types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  img: {
    borderRadius: theme.shape.borderRadius,
  },
}));

type Props = Pick<Character, 'image' | 'name'>;

const CharacterImage = ({ image, name }: Props) => {
  const classes = useStyles();

  return (
    <img
      src={image}
      alt={name + ' image'}
      width="100"
      className={classes.img}
    />
  );
};

export default CharacterImage;
