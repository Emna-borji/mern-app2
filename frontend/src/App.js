import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Counter from './Counter';

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Counter/>
      <Routes>
          <Route path = "/" element = {<Dashboard/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/register" element = {<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
