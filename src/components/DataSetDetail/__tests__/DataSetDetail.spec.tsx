import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataSetDetail } from '../DataSetDetail';

// Mock the useDataSet hook
jest.mock('@/hooks/useDataset', () => ({
  useDataSet: jest.fn(),
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

// Mock the BackLink component
jest.mock('@/components/ui/BackLink', () => ({
  BackLink: ({ href, title }: { href: string; title: string }) => (
    <a data-testid="back-link" href={href}>
      {title}
    </a>
  ),
}));

// Mock the Lucide icons
jest.mock('lucide-react', () => ({
  Calendar: () => <div data-testid="calendar-icon" />,
  Globe: () => <div data-testid="globe-icon" />,
}));

// Import the mocked hook
import { useDataSet } from '@/hooks/useDataset';

describe('DataSetDetail Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    // Arrange
    (useDataSet as jest.Mock).mockReturnValue({
      dataSet: null,
      loading: true,
      error: null,
    });

    // Act
    render(<DataSetDetail dataSetId="123" />);

    // Assert
    expect(screen.getByTestId('loader')).toBeDefined();
    expect(screen.getByText('Loading dataset details...')).toBeDefined();
  });

  it('renders error state', () => {
    // Arrange
    const errorMessage = 'Failed to fetch dataset';
    (useDataSet as jest.Mock).mockReturnValue({
      dataSet: null,
      loading: false,
      error: errorMessage,
    });

    // Act
    render(<DataSetDetail dataSetId="123" />);

    // Assert
    expect(screen.getByTestId('back-link')).toBeDefined();
    expect(screen.getByTestId('error-message')).toBeDefined();
    expect(screen.getByText(errorMessage)).toBeDefined();
  });

  it('renders not found state when dataset is null', () => {
    // Arrange
    (useDataSet as jest.Mock).mockReturnValue({
      dataSet: null,
      loading: false,
      error: null,
    });

    // Act
    render(<DataSetDetail dataSetId="123" />);

    // Assert
    expect(screen.getByTestId('back-link')).toBeDefined();
    expect(screen.getByTestId('error-message')).toBeDefined();
    expect(screen.getByText('Not Found')).toBeDefined();
    expect(screen.getByText('Dataset not found.')).toBeDefined();
  });

  it('renders dataset details when available', () => {
    // Arrange
    const mockDataSet = {
      id: '123',
      title: 'Test Dataset',
      description: 'This is a test dataset',
      state: 'Published',
      unit_of_measure: 'Count',
      next_release: 'January 2024',
      last_updated: '2023-12-01T12:00:00Z',
      national_statistic: true,
      keywords: ['test', 'data'],
      release_frequency: 'Monthly',
      contacts: [
        {
          name: 'Test Contact',
          email: 'test@example.com',
          telephone: '123-456-7890',
        },
      ],
      methodologies: [
        {
          title: 'Test Methodology',
          href: 'https://example.com/methodology',
        },
      ],
    };

    (useDataSet as jest.Mock).mockReturnValue({
      dataSet: mockDataSet,
      loading: false,
      error: null,
    });

    // Act
    render(<DataSetDetail dataSetId="123" />);

    // Assert
    expect(screen.getByTestId('back-link')).toBeDefined();
    expect(screen.getByText('Test Dataset')).toBeDefined();
    expect(screen.getByText('This is a test dataset')).toBeDefined();
    expect(screen.getByText('Published')).toBeDefined();
    expect(screen.getByText('Description')).toBeDefined();
    expect(screen.getByText('Methodologies')).toBeDefined();
    expect(screen.getByText('Test Methodology')).toBeDefined();
    expect(screen.getByText('Contacts')).toBeDefined();
    expect(screen.getByText('Name')).toBeDefined();
    expect(screen.getByText('Test Contact')).toBeDefined();
    expect(screen.getByText('Email')).toBeDefined();
    expect(screen.getByText('test@example.com')).toBeDefined();
    expect(screen.getByText('Telephone')).toBeDefined();
    expect(screen.getByText('123-456-7890')).toBeDefined();
    expect(screen.getByText('Release frequency')).toBeDefined();
    expect(screen.getByText('Monthly')).toBeDefined();
    expect(screen.getByText('Next release')).toBeDefined();
    expect(screen.getByText('January 2024')).toBeDefined();
    expect(screen.getByText('State')).toBeDefined();
  });
});
