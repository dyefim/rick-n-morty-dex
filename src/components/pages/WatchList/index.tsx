import React, { useEffect, useState } from 'react';
import { getLocalState, saveToLocalState } from 'utils/localStorage';
import WatchListInput from './WatchListInput';
import WatchListItems from './WatchListItems';

export interface WatchListItem {
  [id: string]: {
    episode: string;
    isComplete: boolean;
  };
}

const WatchList = ({ title = 'My watch list' }) => {
  const [watchlist, setWatchlist] = useState<WatchListItem>({});

  useEffect(() => {
    const watchlistFromLocalState = getLocalState('watchlist');

    if (watchlistFromLocalState) {
      setWatchlist(watchlist => ({ ...watchlist, ...watchlistFromLocalState }));
    }
  }, []);

  useEffect(() => {
    saveToLocalState('watchlist', watchlist);
  }, [watchlist]);

  return (
    <div>
      <h1>{title}</h1>
      <WatchListInput setWatchlist={setWatchlist} />
      <WatchListItems watchlist={watchlist} setWatchlist={setWatchlist} />
    </div>
  );
};

export default WatchList;
