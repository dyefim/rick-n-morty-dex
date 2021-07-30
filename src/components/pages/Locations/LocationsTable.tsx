import React from 'react';
import { Location } from 'types';

interface Props {
  locations: Location[];
}

const LocationsTable = ({ locations }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Dimension</th>
        </tr>
      </thead>
      <tbody>
        {locations?.map(location => {
          return (
            <tr key={location.id}>
              <td>{location.name}</td>
              <td>{location.type}</td>
              <td>{location.dimension}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LocationsTable;
