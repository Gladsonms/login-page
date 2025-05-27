import { useState, useEffect } from "react";
import { getAllCountries } from "../api/countries";
import { COUNTRIES_PER_PAGE } from "../constants";
import type { Country } from "../types/home";

export type UseCountriesReturnType = {
  countries: Country[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMoreCountries: () => void;
};

export const useCountries = (
  filterRegion: string | undefined
): UseCountriesReturnType => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchCountries = async (page: number) => {
    try {
      setLoading(true);
      setError(null);

      const allCountries = await getAllCountries();

      const filteredCountries = filterRegion
        ? allCountries.filter(
            (country: Country) =>
              country.region &&
              country.region.toLowerCase() === filterRegion.toLowerCase()
          )
        : allCountries;

      const startIndex = (page - 1) * COUNTRIES_PER_PAGE;
      const endIndex = page * COUNTRIES_PER_PAGE;

      const paginatedCountries = filteredCountries.slice(startIndex, endIndex);

      setCountries((prevCountries) => [
        ...prevCountries,
        ...paginatedCountries,
      ]);

      if (endIndex >= filteredCountries.length) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }

      setPage((prevPage) => prevPage + 1);
    } catch (error: any) {
      setError("Error fetching countries: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCountries([]);
    setPage(1);
    setHasMore(true);
    fetchCountries(1);
  }, [filterRegion]);

  return {
    countries,
    loading,
    error,
    hasMore,
    loadMoreCountries: () => fetchCountries(page),
  };
};
