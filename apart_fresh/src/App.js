import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import ChangePassword from './components/ChangePassword';

function App() {
  return (
    <div className="App">
      <div style={{minHeight: '88vh'}}>
        <Router>
          <Routes>
            <Route path='/' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/forgot_pass' element={<ChangePassword/>} />
          </Routes>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
