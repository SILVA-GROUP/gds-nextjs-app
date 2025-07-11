## GDS Civil Servant Next.js Application highlighting standard coding practice and accessibility.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Environment Variables

This project uses environment variables for configuration. Create a `.env` file in the root directory with the following variables:

```
NEXT_PUBLIC_API_BASE_URL=https://api.beta.ons.gov.uk/v1
```

A `.env.example` file is provided as a template.

### Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

### Testing

This project uses Jest and React Testing Library for unit testing. To run the tests:

```bash
npm test
# or with verbose output
npm test -- --verbose
```
