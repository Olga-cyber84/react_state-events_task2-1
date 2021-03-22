import './App.css';
import Portfolio from './components/Portfolio';
import data from './data/Portfolio.json';

function App() {
  return (
    <Portfolio projects={data}/>
  );
}

export default App;
