import { useState, useEffect } from "react";
import axios from "axios";

const useApiCall = (url) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((response) => {
      //console.log(response);
      setFetchedData(response.data);
      setLoading(false);
    });
  }, [url]);

  return [fetchedData, isLoading];
};

export default useApiCall;
