import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  it('renders the skip link', () => {
    // Act
    render(<Header />);

    // Assert
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toBeDefined();
    expect(skipLink.getAttribute('href')).toBe('#main-content');
    expect(skipLink.className).toBe('govuk-skip-link');
  });

  it('renders the GOV.UK logo with link to homepage', () => {
    // Act
    render(<Header />);

    // Assert
    const logoImg = screen.getByRole('img', { name: 'GOV.UK' });
    expect(logoImg).toBeDefined();

    const logoLink = screen.getByRole('link', { name: /GOV.UK/ });
    expect(logoLink).toBeDefined();
    expect(logoLink.getAttribute('href')).toBe('/');
    expect(logoLink?.className).toContain('govuk-header__link--homepage');
  });

  it('renders the header with correct classes', () => {
    // Act
    render(<Header />);

    // Assert
    const header = screen.getByRole('banner');
    expect(header).toBeDefined();
    expect(header?.className).toContain('govuk-header');
    expect(header.getAttribute('data-module')).toBe('govuk-header');
  });
});
