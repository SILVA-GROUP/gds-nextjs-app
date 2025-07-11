import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from '../Loader';

// Mock the lucide-react module
jest.mock('lucide-react', () => ({
  Loader2: ({ className }: { className?: string }) => (
    <div data-testid="loader-icon" className={className}>
      Loader Icon
    </div>
  ),
}));

describe('Loader Component', () => {
  it('renders with default props', () => {
    // Act
    render(<Loader />);

    // Assert
    const loaderIcon = screen.getByTestId('loader-icon');
    expect(loaderIcon).toBeDefined();
    expect(loaderIcon?.className).toContain('h-6');
    expect(loaderIcon?.className).toContain('w-6'); // Default medium size
  });

  it('renders with custom text', () => {
    // Arrange
    const testText = 'Loading data...';

    // Act
    render(<Loader text={testText} />);

    // Assert
    expect(screen.getByText(testText)).toBeDefined();
  });

  it('renders with small size', () => {
    // Act
    render(<Loader size="small" />);

    // Assert
    const loaderIcon = screen.getByTestId('loader-icon');
    expect(loaderIcon?.className).toContain('h-4');
    expect(loaderIcon?.className).toContain('w-4');
  });

  it('renders with large size', () => {
    // Act
    render(<Loader size="large" />);

    // Assert
    const loaderIcon = screen.getByTestId('loader-icon');
    expect(loaderIcon?.className).toContain('h-8');
    expect(loaderIcon?.className).toContain('w-8');
  });

  it('applies custom className', () => {
    // Act
    render(<Loader className="custom-class" />);

    // Assert
    const container = screen.getByTestId('loader-icon').closest('div');
    expect(container?.parentElement?.className).toContain('custom-class');
  });
});
