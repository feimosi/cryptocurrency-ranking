This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Project setup](#project-setup)
- [Code generator](#code-generator)
- [Testing](#testing)
- [Changing Webpack or Babel config](#changing-webpack-or-babel-config)

## Project setup

Make sure you have `yarn` installed and run the following commands:

- `yarn`
- `yarn start`

That's it! The app is available at http://localhost:3000/

## Code generator

Run `yarn generator` to see all available generators.

## Testing

`yarn test` command runs all tests with Jest.

## Linting

TSLint doesn't support runtime rules in the watch mode, so to see all linting errors you should run `yarn lint`.

See: https://github.com/palantir/tslint/issues/3155

## Changing Webpack or Babel config

The Webpack and Babel configs are hidden by the `react-scripts` package. It's desired to avoid ejecting the config at all cost. Some modifications are still possible using `react-app-rewired`, which is being configured inside the `config-overrides.js` file.

## Other

### Typescript

The Typescript integration is based on the following guide:

https://github.com/piotrwitek/react-redux-typescript-guide
