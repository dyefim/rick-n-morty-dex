import React from 'react';
import useLocalState from 'hooks/useLocalState';
import WatchListInput from './WatchListInput';
import WatchListItems from './WatchListItems';
import { WatchListItem } from 'types';

const WatchList = ({ title = 'My watch list' }) => {
  const [watchlist, setWatchlist] = useLocalState<WatchListItem>(
    'watchlist',
    {}
  );

  return (
    <div>
      <h1>{title}</h1>
      <WatchListInput setWatchlist={setWatchlist} />
      <WatchListItems watchlist={watchlist} setWatchlist={setWatchlist} />
    </div>
  );
};

export default WatchList;
