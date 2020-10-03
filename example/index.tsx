import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles.css';
import IconList from './src/IconList';

const App = () => {
  return (
    <main>
      <IconList />
    </main>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
