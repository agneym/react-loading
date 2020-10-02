import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useLoading, BallTriangle } from '../.';

const App = () => {
  const { containerProps, indicatorEl } = useLoading({
    indicator: <BallTriangle />,
    loading: true,
  });
  return (
    <div {...containerProps}>
      {indicatorEl}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
