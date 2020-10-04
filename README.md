<h2 align="center">React Loading</h2>
<p align="center">
Simple and Accessible loading indicators with React.
<br />
<br />
<a href="https://www.npmjs.com/package/@agney/react-loading">
  <img src="https://badge.fury.io/js/%40agney%2Freact-loading.svg" />
</a>
<img src="https://img.shields.io/badge/module%20formats-cjs%2C%20esm-green.svg" />
<br />
<a href="https://github.com/agneym/react-loading/actions">
  <img src="https://github.com/agneym/react-loading/workflows/CI/badge.svg" />
</a>
<a href="https://prettier.io">
  <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" />
</a>
<a href="http://makeapullrequest.com">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
</a>

Comes bundled with React components of [Sam Herbert's animated SVG loaders](https://github.com/SamHerbert/SVG-Loaders) in a tree shakeable package.

![Example of loading indicator SVGs](./example/indicator.gif)

## Installation

```bash
npm i @agney/react-loading
# OR
yarn add @agney/react-loading
```

[Demo](https://agneym.github.io/react-loading/)

## Features

- Small Size

  The whole library is about [20kB minified](https://bundlephobia.com/result?p=@agney/react-loading). _But you would never need the whole bundle._

  The library is build to be treeshakeable that when you use one or two of the bundled loaders, you would have less than 1kB in your bundle.

- Accessibility

  Provides accessibility attributes on your loading components and containers.

  `aria-busy` is set to `true` on container on loading and progress indicators have `role=progressbar`.

- Specify a global loader

  You probably don't want loader components mixed everywhere, so you can specify a `LoaderContext` that can be overridden later if necessary.

## Usage

```javascript
import { useLoading, Audio } from '@agney/react-loading';

function Content() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />,
  });

  return (
    {/* Accessibility props injected to container */}
    <section {...containerProps}>
      {indicatorEl} {/* renders only while loading */}
    </section>
  );
}
```
