import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '../error-message';

describe('ErrorMessage Component', () => {
  it('renders with default props', () => {
    // Arrange
    const message = 'Something went wrong';

    // Act
    render(<ErrorMessage message={message} />);

    // Assert
    expect(screen.getByText('Error!')).toBeDefined();
    expect(screen.getByText(message)).toBeDefined();

    const container = screen.getByText('Error!').closest('div');
    expect(container).toBeDefined();
    expect(container?.className).toContain('p-4 border border-red-500 bg-red-50 rounded');
  });

  it('renders with custom title', () => {
    // Arrange
    const message = 'Something went wrong';
    const title = 'Custom Error';

    // Act
    render(<ErrorMessage message={message} title={title} />);

    // Assert
    expect(screen.getByText('Custom Error!')).toBeDefined();
  });

  it('applies custom className', () => {
    // Arrange
    const message = 'Something went wrong';
    const customClass = 'custom-error-class';

    // Act
    render(<ErrorMessage message={message} className={customClass} />);

    // Assert
    const container = screen.getByText('Error!').closest('div');
    expect(container?.className).toContain(customClass);
  });
});
