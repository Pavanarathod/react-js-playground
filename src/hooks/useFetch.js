import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(url)
        .then((responce) => {
          return responce.data;
        })
        .then((data) => {
          const movieData = data.results.map((collection) => {
            return {
              id: collection.episode_id,
              title: collection.title,
              openingText: collection.opening_crawl,
              releaseDate: collection.release_date,
            };
          });

          setLoading(false);
          setMovies(movieData);
        })
        .catch((error) => alert(error.message));
    };
    fetchData();
  }, [url]);

  return [movies, loading];
};

export default useFetch;
