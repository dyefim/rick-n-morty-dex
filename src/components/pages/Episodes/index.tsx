import React, { useEffect, useState } from 'react';
import { baseUrl } from 'services';
import { Episode } from 'types';
import Pagination from 'components/common/Pagination';
import Filters from './Filters';
import EpisodesTable from './EpisodesTable';

const Episodes = ({ title = 'Episodes' }) => {
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({
    count: 1,
    pages: 1,
    next: '',
    prev: '',
  });
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const [filters, setFilters] = useState({
    name: '',
    // episode: 'S01',
  });

  useEffect(() => {
    const getEpisodes = async () => {
      const parameters = Object.entries(filters).map(([p, v]) => p + '=' + v);

      const response = await fetch(
        `${baseUrl}/episode/?page=${page}&${parameters.join('&')}`
      );

      const result = await response.json();

      if (result.info) setInfo(result.info);
      if (result.results) setEpisodes(result.results);
    };

    getEpisodes();
  }, [filters, page]);

  return (
    <div>
      <h1>{title}</h1>
      <Filters setFilters={setFilters} />
      <Pagination numberOfPages={info.pages} pageSetter={setPage} />
      <EpisodesTable episodes={episodes} />
    </div>
  );
};

export default Episodes;
