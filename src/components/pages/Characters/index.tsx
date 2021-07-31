import React, { useState } from 'react';
import { Character, CharacterFilters } from 'types';
import Pagination from 'components/common/Pagination';
import CharacterCard from './Character/CharacterCard';
import CharacterDetails from './Character/CharacterDetails';
import Filters from './Filters';
import useRequestByParams from 'hooks/useRequestByParams';

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

  const [selectedCard, setSelectedCard] = useState(0);

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

export default CharactersPage;
