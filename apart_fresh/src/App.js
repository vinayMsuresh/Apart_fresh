import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
