// Import jest-dom matchers
import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    pathname: '/',
    query: {},
    asPath: '/',
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
  }),
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, className, ...rest }) => {
    return <a href={href} className={className} {...rest}>{children}</a>;
  };
});

// Suppress console errors during tests
global.console.error = jest.fn();