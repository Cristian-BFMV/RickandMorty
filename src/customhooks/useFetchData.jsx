import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = url => {
  const [APIData, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getAPIData = useCallback(async () => {
    setLoading(true);
    const { data } = await axios.get(url);
    setData(data);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getAPIData();
  }, [getAPIData]);

  return [APIData, loading];
};

export default useFetchData;
