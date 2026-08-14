# mini-react

A minimal React clone built from scratch in TypeScript — a custom JSX runtime, a virtual DOM renderer, and a state/hooks system, built to understand how React works under the hood.

This is a learning project, not a production library: the goal was to reimplement enough of React's core mechanics (element creation, rendering, diffing, and state) to see how the pieces fit together.

## What's implemented

JSX runtime (src/package/definitions) is a custom pragma that turns JSX into plain element objects. The renderer (src/package/renderer) walks the element tree and mounts and updates it in the DOM. The component model (src/package/component) supports function components with props. State (src/package/state) is a hook-like system for triggering re-renders.

## Project structure

App.tsx is the example app using the mini-react package, and index.tsx is the entry point. Inside src/package: component holds component handling, definitions holds the JSX pragma and element definitions, renderer handles DOM rendering and updates, and state holds the state and hooks implementation.

## Running locally

Requires pnpm. Run pnpm install to install dependencies, pnpm dev to start rollup in watch mode and serve the example app, pnpm build for a production build, and pnpm start to serve the built output.

## Status

Actively evolving as a personal exercise in understanding React internals, not intended for use as a dependency.
