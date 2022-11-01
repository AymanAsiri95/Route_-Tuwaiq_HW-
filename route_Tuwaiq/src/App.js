import './App.css';
import Nav from './Components/Nav';
import { Routes, Route } from 'react-router-dom';
import Store from './Components/Store';
import Login from './Components/Login';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='Store' element={<Store />}></Route>
        <Route path="Login" element={<Login />}></Route>
      </Routes>

    </>
  );
}

export default App;
