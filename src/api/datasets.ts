import { ApiResponse, DataSet } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.beta.ons.gov.uk/v1';

/**
 * Fetches a list of all dataSets
 */
export async function fetchDataSets(): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}/datasets`);
  
  if (!response.ok) {
    const errorMessage = `Failed to fetch dataSets: ${response.status} ${response.statusText}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  
  return response.json();
}

/**
 * Fetches a single dataSet by ID
 */
export async function fetchDataSetById(dataSetId: string): Promise<DataSet> {
  const response = await fetch(`${API_BASE_URL}/datasets/${dataSetId}`);
  
  if (!response.ok) {
    const errorMessage = `Failed to fetch dataSet details: ${response.status} ${response.statusText}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  
  return response.json();
}