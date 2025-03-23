/* CUSTOM HOOK TO FETCH DATA FROM API */
import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    /* TODO: simulate a delay in order to show skeletons */
    setIsLoading(true);

    setTimeout(() => {
      axios
        .get(url, { headers: { Accept: "application/json" } })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 3500);
  }, [url]);

  return { data, isLoading, error };
}

export default useAxios;
