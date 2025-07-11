import React from 'react';
import { render, screen } from '@testing-library/react';
import BackLink from '../BackLink';

describe('BackLink Component', () => {
  it('renders with the correct title and href', () => {
    // Arrange
    const props = {
      href: '/test-link',
      title: 'Go Back',
    };

    // Act
    render(<BackLink {...props} />);

    // Assert
    const link = screen.getByText('Go Back');
    expect(link).toBeDefined();
    expect(link?.className).toContain('govuk-link');
    expect(link.closest('a')).toHaveAttribute('href', '/test-link');
  });
});
