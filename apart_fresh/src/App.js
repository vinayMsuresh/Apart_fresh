import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
