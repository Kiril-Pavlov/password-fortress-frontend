import './App.css';
import HomePage from './HomePage';
import PasswordDetail from './PasswordDetail';
import Register from './Register'
import Login from './Login'
import AddPasswordDetail from './AddPasswordDetail';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path='/register' exact element={<Register />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/add' exact element={<AddPasswordDetail />} />
          <Route path='/' exact element={<HomePage />} />
          <Route path='/entry/:id' element={<PasswordDetail />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
