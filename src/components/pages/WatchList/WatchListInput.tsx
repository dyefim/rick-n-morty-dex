import { handleInput } from 'events/';
import React, { useState } from 'react';
import { WatchListItem } from 'types';
import TextField from '@material-ui/core/TextField';

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

  return (
    <form onSubmit={addEpisode} style={{margin: '0 auto', width: 360}}>
      <TextField
        value={inputValue}
        label={'Episode to watch'}
        id={'episode'}
        name={'episode'}
        onChange={handleInput(setInputValue) as React.ChangeEventHandler}
        variant="outlined"
        autoComplete={'off'}
        fullWidth
      />
    </form>
  );
};

export default WatchListInput;
