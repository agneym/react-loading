import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useLoading, LoaderProvider, BallTriangle } from '../.';

const App = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
  });
  return <div {...containerProps}>{indicatorEl}</div>;
};

ReactDOM.render(
  <LoaderProvider indicator={<BallTriangle />}>
    <App />
  </LoaderProvider>,
  document.getElementById('root')
);
