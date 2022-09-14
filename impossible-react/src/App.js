import { Routes, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Board from './components/Board/Board';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/game" element={<Board />} exact />
        <Route path="/" element={<Main />} exact />
      </Routes>
      <div className="app-bg"></div>
    </div>
  );
}

export default App;
