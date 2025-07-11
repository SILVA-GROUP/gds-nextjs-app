import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataSetTable } from '../DataSetTable';

// Mock the useDataSets hook
jest.mock('@/hooks/useDatasets', () => ({
  useDataSets: jest.fn(),
}));

// Mock the Loader component
jest.mock('@/components/ui/Loader', () => ({
  Loader: ({ text }: { text: string }) => (
    <div data-testid="loader">{text}</div>
  ),
}));

// Mock the ErrorMessage component
jest.mock('@/components/ui/ErrorMessage', () => ({
  ErrorMessage: ({ message, title }: { message: string; title?: string }) => (
    <div data-testid="error-message">
      {title && <span>{title}</span>}
      <span>{message}</span>
    </div>
  ),
}));

// Import the mocked hook
import { useDataSets } from '@/hooks/useDatasets';

describe('DataSetTable Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    // Arrange
    (useDataSets as jest.Mock).mockReturnValue({
      dataSets: [],
      loading: true,
      error: null,
    });

    // Act
    render(<DataSetTable />);

    // Assert
    expect(screen.getByTestId('loader')).toBeDefined();
    expect(screen.getByText('Loading datasets...')).toBeDefined();
  });

  it('renders error state', () => {
    // Arrange
    const errorMessage = 'Failed to fetch datasets';
    (useDataSets as jest.Mock).mockReturnValue({
      dataSets: [],
      loading: false,
      error: errorMessage,
    });

    // Act
    render(<DataSetTable />);

    // Assert
    expect(screen.getByTestId('error-message')).toBeDefined();
    expect(screen.getByText(errorMessage)).toBeDefined();
  });

  it('renders empty state when no datasets are available', () => {
    // Arrange
    (useDataSets as jest.Mock).mockReturnValue({
      dataSets: [],
      loading: false,
      error: null,
    });

    // Act
    render(<DataSetTable />);

    // Assert
    expect(screen.getByTestId('error-message')).toBeDefined();
    expect(screen.getByText('No Results')).toBeDefined();
    expect(screen.getByText('No datasets found...')).toBeDefined();
  });

  it('renders datasets when available', () => {
    // Arrange
    const mockDataSets = [
      {
        id: '1',
        title: 'Dataset 1',
        description: 'Description 1',
        release_frequency: 'Monthly',
        state: 'Published',
        next_release: null,
      },
      {
        id: '2',
        title: 'Dataset 2',
        description: 'Description 2',
        release_frequency: null,
        state: 'Draft',
        next_release: null,
      },
    ];

    (useDataSets as jest.Mock).mockReturnValue({
      dataSets: mockDataSets,
      loading: false,
      error: null,
    });

    // Act
    render(<DataSetTable />);

    // Assert
    expect(screen.getByText('Dataset')).toBeDefined();
    expect(screen.getByText('State')).toBeDefined();
    expect(screen.getByText('Next release')).toBeDefined();

    expect(screen.getByText('Dataset 1')).toBeDefined();
    expect(screen.getByText('Published')).toBeDefined();
    expect(screen.getAllByText('To be announced')[0]).toBeDefined();

    expect(screen.getByText('Dataset 2')).toBeDefined();
    expect(screen.getByText('Draft')).toBeDefined();
    expect(screen.getAllByText('To be announced')[1]).toBeDefined();
  });
});
