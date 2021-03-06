export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type CharacterFilters = Pick<Character, 'species' | 'status' | 'gender'>;

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export type EpisodeFilters = Pick<Episode, 'name'>;

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export type LocationFilters = Pick<Location, 'name' | 'type' | 'dimension'>;

export interface WatchListItem {
  [id: string]: {
    episode: string;
    isComplete: boolean;
  };
}
