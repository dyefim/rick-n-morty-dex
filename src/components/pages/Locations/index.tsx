import React, { useState } from 'react';
import Pagination from 'components/common/Pagination';
import Filters from './Filters';
import LocationsTable from './LocationsTable';
import useRequestByParams from 'hooks/useRequestByParams';
import { Location } from 'types';

const LocationsPage = () => {
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    name: '',
    type: '',
    dimension: '',
  });

  const { data: locations, info } = useRequestByParams<Location>({
    endpoint: 'location',
    filters,
    page,
  });

  return (
    <div>
      <Filters setFilters={setFilters} />
      <Pagination numberOfPages={info.pages} page={page} pageSetter={setPage} />
      <LocationsTable locations={locations} />
    </div>
  );
};

export default LocationsPage;
