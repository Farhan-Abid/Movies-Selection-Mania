import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='mt-3 movie-text-color'>MOVIES SELECTION MANIA</h1>
    </div>
  );
}

export default App;
