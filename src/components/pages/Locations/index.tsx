import React, { useEffect, useState } from 'react';
import { baseUrl } from 'services';
import { Location } from 'types';
import Pagination from 'components/common/Pagination';
import Filters from './Filters';
import LocationsTable from './LocationsTable';

const LocationsPage = ({ title = 'Locations' }) => {
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({
    count: 1,
    pages: 1,
    next: '',
    prev: '',
  });
  const [locations, setLocations] = useState<Location[]>([]);

  const [filters, setFilters] = useState({
    name: '',
    type: '',
    dimension: '',
  });

  useEffect(() => {
    const getLocations = async () => {
      const parameters = Object.entries(filters).map(([p, v]) => p + '=' + v);

      const response = await fetch(
        `${baseUrl}/location/?page=${page}&${parameters.join('&')}`
      );

      const result = await response.json();

      if (result.info) setInfo(result.info);
      if (result.results) setLocations(result.results);
    };

    getLocations();
  }, [filters, page]);

  return (
    <div>
      <h1>{title}</h1>
      <Filters setFilters={setFilters} />
      <Pagination numberOfPages={info.pages} pageSetter={setPage} />
      <LocationsTable locations={locations} />
    </div>
  );
};

export default LocationsPage;
