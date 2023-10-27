import './App.css';
import NavBar from './Components/NavBar';
import CompRouter from './AppRoute.js/CompRouter';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CompRouter/>
    </div>
  );
}

export default App;