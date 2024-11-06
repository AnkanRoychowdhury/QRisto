## What's inside?

This Repo includes the following:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) website for QRisto
- `api`: an [Express](https://expressjs.com/) server
- `@repo/ui`: a React component library
- `@repo/logger`: Isomorphic logger (a small wrapper around console.log)
- `@repo/eslint-config`: ESLint presets
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo
- `@repo/jest-presets`: Jest configurations

Each package/app is not 100% [TypeScript](https://www.typescriptlang.org/).

### JavaScript

This repo is configured to be built with JavaScript, and Next.js To build all apps in this repo:


# Install dependencies
```
npm install
```

# Run project
```
turbo dev
```

Open http://localhost:3000 for frontend

Open http://localhost:7676 for api (Backend)

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
