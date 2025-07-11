import React from 'react';
import Header from './Header';

describe('Header Component', () => {
  beforeEach(() => {
    cy.mount(<Header />);
  });

  it('renders the skip link', () => {
    cy.get('.govuk-skip-link')
      .should('exist')
      .and('have.text', 'Skip to main content')
      .and('have.attr', 'href', '#main-content')
      .and('have.attr', 'data-module', 'govuk-skip-link');
  });

  it('renders the header with correct class and data attribute', () => {
    cy.get('header')
      .should('have.class', 'govuk-header')
      .and('have.attr', 'data-module', 'govuk-header');
  });

  it('renders the GOV.UK logo with correct link', () => {
    cy.get('.govuk-header__logo a')
      .should('have.attr', 'href', '/')
      .and('have.class', 'govuk-header__link--homepage');
  });

  it('renders the GOV.UK SVG logo', () => {
    cy.get('.govuk-header__logotype')
      .should('exist')
      .and('have.attr', 'aria-label', 'GOV.UK');
    
    cy.get('.govuk-header__logotype title')
      .should('contain', 'GOV.UK');
  });
});