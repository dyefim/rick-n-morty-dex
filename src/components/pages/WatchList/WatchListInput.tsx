import { handleInput } from 'events/';
import React, { useState } from 'react';
import { WatchListItem } from 'types';
import Input from 'components/common/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    gap: theme.spacing(1),
    margin: `${theme.spacing(1)}px 0`,
  },
}));

interface Props {
  setWatchlist: React.Dispatch<React.SetStateAction<WatchListItem>>;
}

const WatchListInput = ({ setWatchlist }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const addEpisode: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    const id = inputValue + Math.random().toFixed(4);

    setWatchlist(watchlist => ({
      ...watchlist,
      [id]: {
        episode: inputValue,
        isComplete: false,
      },
    }));

    setInputValue('');
  };

  const classes = useStyles();

  return (
    <form onSubmit={addEpisode} className={classes.form}>
      <Input
        value={inputValue}
        label={'Episode to watch'}
        name={'episode'}
        handleInput={handleInput(setInputValue)}
      />
    </form>
  );
};

export default WatchListInput;
