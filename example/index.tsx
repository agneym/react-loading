import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useLoading, LoaderProvider, BallTriangle } from '../.';

const App = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
  });
  return (
    <LoaderProvider indicator={<BallTriangle />}>
      <div {...containerProps}>
        {indicatorEl}
      </div>
    </LoaderProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
