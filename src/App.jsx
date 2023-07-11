import { useState } from 'react';
import { useContents } from './hooks/useContents';
import { TabTemplate } from './templates/TabTemplate';

const App = () => {
  const contents = useContents();
  const [tab, setTab] = useState('HOME');
  const { title, content } = contents[tab];

  return (
    <div className="App">
      <header>
        <h1 onClick={() => setTab('HOME')}>✨ Hello World ✨</h1>
        <nav>
          <ul>
            <li onClick={() => setTab('HTML')}>HTML</li>
            <li onClick={() => setTab('CSS')}>CSS</li>
            <li onClick={() => setTab('JS')}>JavaScript</li>
          </ul>
        </nav>
      </header>
      <main>
        <TabTemplate title={title} content={content} />
      </main>
    </div>
  );
};

export default App;
