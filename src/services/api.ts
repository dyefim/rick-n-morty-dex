import { baseUrl } from 'services';
import { ApiResponse } from 'types';

interface Params {
  endpoint: string;
  filters?: Record<string, string>;
  page?: number;
}

const getData = async <R>({ endpoint, filters, page }: Params) => {
  const parameters = Object.entries(filters || {}).map(
    ([key, value]) => key + '=' + encodeURIComponent(value)
  );

  try {
    const response = await fetch(
      `${baseUrl}/${endpoint}/?page=${page}&${parameters?.join('&')}`
    );

    const result = await response.json();

    return result as ApiResponse<R>;
  } catch (error) {
    console.error(error);
  }
};

export default { getData };
