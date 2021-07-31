import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { handlePagination } from 'events/';
import Filters from './Filters';
import EpisodesTable from './EpisodesTable';
import useRequestByParams from 'hooks/useRequestByParams';
import { Episode } from 'types';

const EpisodesPage = ({ title = 'Episodes' }) => {
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    name: '',
    // episode: 'S01',
  });

  const { data: episodes, info } = useRequestByParams<Episode>({
    endpoint: 'episode',
    filters,
    page,
  });

  return (
    <div>
      <h1>{title}</h1>
      <Filters setFilters={setFilters} />
      <Pagination
        color="secondary"
        count={info.pages}
        page={page}
        onChange={handlePagination(setPage)}
      />
      <EpisodesTable episodes={episodes} />
    </div>
  );
};

export default EpisodesPage;
