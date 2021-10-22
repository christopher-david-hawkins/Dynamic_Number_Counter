import logo from './logo.svg';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Number Choosing Counter</h1>
        <p>Please enter a number below to add or subtract</p>
      </header>
      <Counter />
    </div>
  );
}

export default App;
