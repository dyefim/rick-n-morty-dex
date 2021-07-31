import { useEffect, useState } from 'react';
import { baseUrl } from 'services';

interface Props {
  endpoint: string;
  filters: Record<string, string>;
  page: number;
}

const useRequestByParams = ({ endpoint, filters, page }: Props) => {
  const [info, setInfo] = useState({
    count: 1,
    pages: 1,
    next: '',
    prev: '',
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const parameters = Object.entries(filters).map(
        ([key, value]) => key + '=' + encodeURIComponent(value)
      );

      const response = await fetch(
        `${baseUrl}/${endpoint}/?page=${page}&${parameters.join('&')}`
      );

      const result = await response.json();

      if (result.info) setInfo(result.info);
      if (result.results) setData(result.results);
    };

    getData();
  }, [endpoint, filters, page]);

  return { data, info };
};

export default useRequestByParams;
