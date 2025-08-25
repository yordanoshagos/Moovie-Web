import { useState, useEffect } from "react";
import { TMDBMovie } from "../utils/type";
import { searchMovies } from "../utils/fetchTmdb";

export default function useSearch(query: string) {
  const [results, setResults] = useState<TMDBMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    searchMovies(query)
      .then((data) => {
        setResults(data.results);
        setLoading(false);
      })
      .catch(() => {
        setError("Search failed.");
        setLoading(false);
      });
  }, [query]);

  return { results, loading, error };
}
