import { useNavigate } from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="img"></div>
      <header className="App-header">
      <h1>Welcome To Pronto Curier Service</h1>
      <button className='users-button' onClick={() => navigate('/users')}>Assign Delivery</button>
      </header>
    </div>
  );
}

export default App;
