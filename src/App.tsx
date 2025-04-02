import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1 className="text-3xl">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  );
}

export default App;
