import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('renders the footer with correct classes', () => {
    // Act
    render(<Footer />);

    // Assert
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeDefined();
    expect(footer?.className).toContain('govuk-footer');
  });

  it('renders the crown logo', () => {
    // Act
    render(<Footer />);

    // Assert
    const crownLogo = screen.getByRole('presentation');
    expect(crownLogo).toBeDefined();
    // Use getAttribute directly instead of toHaveAttribute
    expect(crownLogo.getAttribute('class')).toBe('govuk-footer__crown');
  });

  it('renders the Open Government Licence text and link', () => {
    // Act
    render(<Footer />);

    // Assert
    const licenceText = screen.getByText(/All content is available under the/i);
    expect(licenceText).toBeDefined();

    const licenceLink = screen.getByText(/Open Government Licence/i);
    expect(licenceLink).toBeDefined();
    const linkElement = licenceLink.closest('a');
    expect(linkElement?.getAttribute('href')).toBe(
      'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'

    );
    expect(linkElement?.getAttribute('rel')).toBe('license');
  });
});
