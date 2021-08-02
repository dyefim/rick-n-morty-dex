import { handleInput } from 'events/';
import React, { useState } from 'react';
import { WatchListItem } from 'types';
import Input from 'components/common/Input';

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
    <form onSubmit={addEpisode} style={{ margin: '0 auto', width: 360 }}>
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
