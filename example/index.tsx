import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles.css';
import IconList from './src/IconList';
import Docs from './src/Docs';

const App = () => {
  return (
    <main>
      <section>
        <IconList />
      </section>
      <section>
        <Docs />
      </section>
    </main>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
