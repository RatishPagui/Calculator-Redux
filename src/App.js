
import './App.css';
import Calculator from './Components/Calculator';
import Navbar from './Components/Navbar';
import Output from './Components/Output';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Calculator />
        <Output />
      </div>
    </>

  );
}

export default App;
