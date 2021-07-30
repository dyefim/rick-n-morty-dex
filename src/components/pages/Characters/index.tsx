import Pagination from 'components/common/Pagination';
import React, { useEffect, useState } from 'react';
import { Character, CharacterFilters } from 'types';
import CharacterCard from './Character/CharacterCard';
import CharacterDetails from './Character/CharacterDetails';
import Filters from './Filters';

const baseUrl = 'https://rickandmortyapi.com/api';

const Characters = ({ title = 'Characters' }) => {
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({
    count: 1,
    pages: 1,
    next: '',
    prev: '',
  });
  const [characters, setCharacters] = useState<Character[]>();
  const [filters, setFilters] = useState<CharacterFilters>({
    species: '',
    status: '',
    gender: '',
  });
  const [selectedCard, setSelectedCard] = useState(0);

  useEffect(() => {
    const getCharacters = async () => {
      const parameters = Object.entries(filters).map(([p, v]) => p + '=' + v);

      const response = await fetch(
        `${baseUrl}/character/?page=${page}&${parameters.join('&')}`
      );

      const result = await response.json();

      if (result.info) setInfo(result.info);
      if (result.results) setCharacters(result.results);
    };

    getCharacters();
  }, [filters, page]);

  const charactersCards = characters?.map((character: Character) => {
    return (
      <div key={character.id}>
        <div onClick={() => setSelectedCard(character.id)}>
          <CharacterCard character={character} />
        </div>

        {selectedCard === character.id && (
          <div onClick={() => setSelectedCard(0)}>
            <CharacterDetails character={character} />
          </div>
        )}
      </div>
    );
  });

  return (
    <div>
      <h1>{title}</h1>
      <Filters setFilters={setFilters} />
      <Pagination numberOfPages={info.pages} pageSetter={setPage} />
      {charactersCards}
    </div>
  );
};

export default Characters;
