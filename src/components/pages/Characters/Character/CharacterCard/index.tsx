import React from 'react';
import { Character } from 'types';
import CharacterImage from './CharacterImage';
import CharacterDetails from '../CharacterDetails';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper/Popper';
import useMuiPopper from 'hooks/useMuiPopper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';
import CharacterName from './CharacterName';
import CharacterOrigin from './CharacterOrigin';
import useStyles from './styles';

interface Props {
  character: Character;
}

const CharacterCardWithPopper = ({ character }: Props) => {
  const classes = useStyles();

  const {
    open,
    anchorEl,
    placement,
    toggle: togglePopper,
    close: closePopper,
  } = useMuiPopper();

  const card = (
    <Paper className={classes.card} onClick={togglePopper}>
      <CharacterName name={character.name} />
      <CharacterImage image={character.image} name={character.name} />
      <CharacterOrigin originName={character.origin.name} />
    </Paper>
  );

  const popper = (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement={placement}
      transition
      className={classes.popper}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <CharacterDetails character={character} />
        </Fade>
      )}
    </Popper>
  );

  return (
    <div>
      <ClickAwayListener onClickAway={closePopper}>{card}</ClickAwayListener>
      {popper}
    </div>
  );
};

export default CharacterCardWithPopper;
