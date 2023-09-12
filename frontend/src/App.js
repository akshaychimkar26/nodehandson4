import './App.css';
import NavBar from './Components/NavBar';
import CompRouter from './AppRoute.js/CompRouter';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CompRouter/>
      <Footer/>
    </div>
  );
}

export default App;