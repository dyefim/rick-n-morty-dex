import React from 'react';
import { Episode } from 'types';

interface Props {
  episodes: Episode[];
}

const EpisodesTable = ({ episodes }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Episode</th>
          <th>Name</th>
          <th>Air date</th>
        </tr>
      </thead>
      <tbody>
        {episodes?.map(episode => {
          return (
            <tr key={episode.id}>
              <td>{episode.episode}</td>
              <td>{episode.name}</td>
              <td>{episode.air_date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EpisodesTable;
