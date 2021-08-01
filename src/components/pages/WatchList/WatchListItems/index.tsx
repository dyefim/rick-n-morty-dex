import React from 'react';
import { WatchListItem } from 'types';
import ListItem from './ListItem';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      margin: '0 auto',
      backgroundColor: theme.palette.background.paper,
    },
  })
);

interface Props {
  watchlist: WatchListItem;
  setWatchlist: React.Dispatch<React.SetStateAction<WatchListItem>>;
}

const WatchListItems = ({ watchlist, setWatchlist }: Props) => {
  const classes = useStyles();

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
    <Box borderRadius={4} className={classes.root}>
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
    </Box>
  );
};

export default WatchListItems;
