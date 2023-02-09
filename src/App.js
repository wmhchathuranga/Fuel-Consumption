import Login from './Login';
import Register from './Register';
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';

function App() {
  const ui = (
    <Routes>
      <Route path='/login' element={
        <div className='row justify-content-center align-items-center vh-100 bg-light m-0'>
          <div className="col-10 col-md-5 border p-4 form-container bg-white">
            <Login />
          </div>
        </div>
      } />


      <Route path='/register' element={
        <div className='row justify-content-center align-items-center vh-100 bg-light m-0'>
          <div className="col-10 col-md-6 border p-4 form-container bg-white">
            <Register />
          </div>
        </div>
      } />

      <Route path='/' element={<Admin />} />
    </Routes>
  );

  return ui;
}

export default App;
