import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { handlePagination } from 'events/';
import Filters from './Filters';
import LocationsTable from './LocationsTable';
import useRequestByParams from 'hooks/useRequestByParams';
import { Location } from 'types';

const LocationsPage = ({ title = 'Locations' }) => {
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
      <h1>{title}</h1>
      <Filters setFilters={setFilters} />
      <Pagination
        color="secondary"
        count={info.pages}
        page={page}
        onChange={handlePagination(setPage)}
      />
      <LocationsTable locations={locations} />
    </div>
  );
};

export default LocationsPage;
