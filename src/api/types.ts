// Common types for API responses and data structures

export interface DataSet {
  id: string;
  title: string;
  description: string;
  edition: string;
  keywords: string[];
  next_release: string;
  release_frequency: string;
  state: string;
  type: string;
  contacts?: Array<{
    name: string;
    email: string;
    telephone: string;
  }>;
  methodologies?: Array<{
    href: string;
    title: string;
  }>;
  publisher?: {
    name: string;
    type: string;
    url: string;
  };
  theme?: string;
  unit_of_measure?: string;
  last_updated?: string;
  license?: string;
  methodology?: string;
  national_statistic?: boolean;
  publication_date?: string;
  latest_changes?: Array<{
    description: string;
    name: string;
    type: string;
  }>;
}

export interface ApiResponse {
  count: number;
  items: DataSet[];
  limit: number;
  offset: number;
  total_count: number;
}