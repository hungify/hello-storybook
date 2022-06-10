import './App.css';

import { useState } from 'react';

import logo from './logo.svg';
import GlobalStyle from '~/modules/common/components/GlobalStyle';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <GlobalStyle />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
