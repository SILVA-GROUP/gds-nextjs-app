import { useState, useEffect } from 'react';
import { fetchDataSets, DataSet } from '@/api';

/**
 * Hook for fetching all dataSets
 */
export function useDataSets() {
  const [dataSets, setDataSets] = useState<DataSet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDataSets = async () => {
      try {
        setLoading(true);
        const data = await fetchDataSets();
        setDataSets(data.items || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadDataSets();
  }, []);

  return { dataSets, loading, error };
}