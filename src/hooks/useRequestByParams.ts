import { useEffect, useState } from 'react';
import API from 'services/api';

interface Params {
  endpoint: string;
  filters: Record<string, string>;
  page: number;
}

const useRequestByParams = <R>({ endpoint, filters, page }: Params) => {
  const [info, setInfo] = useState({
    count: 1,
    pages: 1,
    next: '',
    prev: '',
  });

  const [data, setData] = useState<R[]>([]);

  useEffect(() => {
    const requestAndSetData = async () => {
      const result = await API.getData<R>({ endpoint, filters, page });

      if (result?.error) return;

      if (result?.info) setInfo(result.info);
      if (result?.results) setData(result.results);
    };

    requestAndSetData();
  }, [endpoint, filters, page]);

  return { data, info };
};

export default useRequestByParams;
