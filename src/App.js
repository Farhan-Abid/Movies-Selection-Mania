import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import QuestionOne from './components/QuestionOne/QuestionOne';

function App() {
  return (
    <div className="App bg-light">
      <Navbar></Navbar>
      <h1 className='mt-3 movie-text-color mb-3'>MOVIES SELECTION MANIA</h1>
      <Shop></Shop>
      <QuestionOne></QuestionOne>
    </div>
  );
}

export default App;
