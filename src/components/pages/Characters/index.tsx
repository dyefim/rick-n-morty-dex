import React, { useState } from 'react';
import useRequestByParams from 'hooks/useRequestByParams';
import Filters from './Filters';
import CharactersList from './CharactersList';
import { handlePagination } from 'events/';
import { Character, CharacterFilters } from 'types';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
}));

const CharactersPage = ({ title = 'Characters' }) => {
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState<CharacterFilters>({
    species: '',
    status: '',
    gender: '',
  });

  const { data: characters, info } = useRequestByParams<Character>({
    endpoint: 'character',
    filters,
    page,
  });

  const classes = useStyles();

  return (
    <div>
      <Typography align="right" variant="h3">
        {title}
      </Typography>
      <Filters setFilters={setFilters} />
      <Pagination
        color="secondary"
        count={info.pages}
        page={page}
        onChange={handlePagination(setPage)}
        className={classes.pagination}
      />
      <CharactersList characters={characters} />
    </div>
  );
};

export default CharactersPage;
