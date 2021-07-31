import React, { useState } from 'react';
import { WatchListItem } from 'types';

interface Props {
  setWatchlist: React.Dispatch<React.SetStateAction<WatchListItem>>;
}

const WatchListInput = ({ setWatchlist }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

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
    <form onSubmit={addEpisode}>
      <input
        value={inputValue}
        onChange={handleInput}
        type="text"
        name="episode"
        id="episode"
      />
    </form>
  );
};

export default WatchListInput;
