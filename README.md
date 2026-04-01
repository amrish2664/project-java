# LearnJava

An Angular-based learning application for Java programming concepts. This project is configured for seamless deployment on Netlify with GitHub integration.

## Quick Links

- 🚀 **[Deployment Guide](.github/DEPLOYMENT.md)** - Complete setup for Netlify + GitHub
- 📱 **Live Demo** - [Your Netlify URL]

## Features

- Interactive Java learning modules
- Quiz system for knowledge assessment
- Responsive navbar and sidebar navigation
- Single-Page Application (SPA) routing

## Prerequisites

- Node.js 20.x
- npm 10.9.4 or higher

## Installation & Development

### Install Dependencies

```bash
npm install
```

### Development Server

To start a local development server, run:

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application automatically reloads when you modify source files.

### Production Build

Build for production deployment:

```bash
npm run build
```

Output will be in `dist/learnjava/browser/`

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
