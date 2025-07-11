import { useState, useEffect } from 'react';
import { fetchDataSetById, DataSet } from '@/api';

/**
 * Hook for fetching a single dataSet by ID
 */
export function useDataSet(dataSetId: string) {
  const [dataSet, setDataSet] = useState<DataSet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDataSet = async () => {
      if (!dataSetId) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const data = await fetchDataSetById(dataSetId);
        setDataSet(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadDataSet();
  }, [dataSetId]);

  return { dataSet, loading, error };
}