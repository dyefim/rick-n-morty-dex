import React, { useEffect, useState } from 'react';
import Pagination from 'components/common/Pagination';
import Filters from './Filters';
import EpisodesTable from './EpisodesTable';
import useRequestByParams from 'hooks/useRequestByParams';
import { Episode } from 'types';

const EpisodesPage = () => {
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

  useEffect(() => {
    setPage(1);
  }, [filters]);

  return (
    <div>
      <Filters setFilters={setFilters} />
      <Pagination numberOfPages={info.pages} page={page} pageSetter={setPage} />
      <EpisodesTable episodes={episodes} />
    </div>
  );
};

export default EpisodesPage;
