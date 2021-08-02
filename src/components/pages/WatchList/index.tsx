import React from 'react';
import useLocalState from 'hooks/useLocalState';
import WatchListInput from './WatchListInput';
import WatchListItems from './WatchListItems';
import { WatchListItem } from 'types';

const WatchList = () => {
  const [watchlist, setWatchlist] = useLocalState<WatchListItem>(
    'watchlist',
    {}
  );

  return (
    <div>
      <WatchListInput setWatchlist={setWatchlist} />
      <WatchListItems watchlist={watchlist} setWatchlist={setWatchlist} />
    </div>
  );
};

export default WatchList;
