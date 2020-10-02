import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useLoading, Audio } from '../.';

const App = () => {
  const { containerProps, indicatorEl } = useLoading({
    indicator: <Audio />,
    loading: true,
  });
  return (
    <div {...containerProps}>
      {indicatorEl}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
