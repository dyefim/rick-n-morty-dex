import React from 'react';
import { WatchListItem } from 'types';
import ListItem from './ListItem';

interface Props {
  watchlist: WatchListItem;
  setWatchlist: React.Dispatch<React.SetStateAction<WatchListItem>>;
}

const WatchListItems = ({ watchlist, setWatchlist }: Props) => {
  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;

    setWatchlist(watchlist => ({
      ...watchlist,
      [id]: {
        episode: watchlist[id].episode,
        isComplete: !watchlist[id].isComplete,
      },
    }));
  };

  const handleRemove = (id: string) => {
    setWatchlist(watchlist =>
      Object.keys(watchlist)
        .filter(key => key !== id)
        .reduce((acc: WatchListItem, key) => {
          return { ...acc, [key]: watchlist[key] };
        }, {})
    );
  };

  return (
    <ul>
      {Object.entries(watchlist).map(([id, { episode, isComplete }]) => {
        return (
          <ListItem
            key={id}
            id={id}
            episodeName={episode}
            isComplete={isComplete}
            handleCheckbox={handleCheckbox}
            handleRemove={handleRemove}
          />
        );
      })}
    </ul>
  );
};

export default WatchListItems;
