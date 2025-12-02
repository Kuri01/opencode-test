# AGENTS.md

This document provides guidelines for build, lint, and test commands, as well as code style standards for this project.

## Build, Lint, Test Commands

- `npm run build` - Builds the project.
- `npm run lint` - Checks code style and quality.
- `npm test` - Runs all tests.
- `npm test -- --testNamePattern=<name>` - Runs a specific test by name.

## Code Style Guidelines

- Use ES6 modules for imports.
- Format code with Prettier, adhering to `.prettierrc` settings.
- Use TypeScript for type safety.
- Follow naming conventions: camelCase for variables and functions, PascalCase for classes.
- Handle errors with try-catch blocks or async error handling.
- Keep functions small and focused.
- Include JSDoc comments for exported functions.

## Cursor and Copilot Rules

- Follow rules specified in `.cursor/rules/` and `.github/copilot-instructions.md` for consistent AI assistance.
