# ANDchievements-UI

## Branching Strategy

For features: feat/component-with-characteristic

For fixes: bug/

For updates and minor changes: chore/

## Components Structure

This project is using [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) to structure components.

Components are found in the `src/components` directory. Each component is organised into:

- atom
  - A singular component with no external dependencies to any other component
- molecule
  - A slightly more complex component with a few dependencies on other components
- organism
  - A complex component with many dependencies on other componenets

Each component is in a package with its respective styles and tests for appropriate functionality.

The project is currently at above 90% test coverage. Let's keep it that way and strive for 100%!
