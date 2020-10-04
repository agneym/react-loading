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

## Installation

```bash
npm i @agney/react-loading
# OR
yarn add @agney/react-loading
```

[Demo](https://agneym.github.io/react-loading/)

## Usage

```javascript
import { useLoading, Audio } from '@agney/react-loading';

function Content() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />,
  });

  return (
    <section {...containerProps}>
      {' '}
      {/* Accessibility props injected to container */}
      {indicatorEl} {/* renders only while loading */}
    </section>
  );
}
```
