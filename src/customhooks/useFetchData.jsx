import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = url => {
  const [apiData, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  const getAPIData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(url);
      setData(data);
    } catch (error) {
      setApiError(true);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getAPIData();
  }, [getAPIData]);

  return [apiData, loading, apiError];
};

export default useFetchData;
