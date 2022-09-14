import './App.css';
import Form from './components/form';
import Header from './components/header';
import Home from './components/home';
import { ThemeContext } from './theme';

function App() {
  const state = { theme: 'dark' };
  return (
    <div className="App">
      <ThemeContext.Provider value={state.theme}>
        <Header></Header>
      </ThemeContext.Provider>
      <Home initialValue={125}></Home>
      <Form></Form>
    </div>
  );
}

export default App;
