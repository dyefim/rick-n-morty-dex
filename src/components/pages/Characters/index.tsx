import React, { useState } from 'react';
import useRequestByParams from 'hooks/useRequestByParams';
import Filters from './Filters';
import CharactersList from './CharactersList';
import { Character, CharacterFilters } from 'types';
import Pagination from 'components/common/Pagination';
import { useEffect } from 'react';

const CharactersPage = () => {
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

  useEffect(() => {
    setPage(1);
  }, [filters]);

  return (
    <div>
      <Filters setFilters={setFilters} />
      <Pagination numberOfPages={info.pages} page={page} pageSetter={setPage} />
      <CharactersList characters={characters} />
    </div>
  );
};

export default CharactersPage;
