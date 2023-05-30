import React from 'react';
// import Navbar from './components/Navbar';
// import { Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Add from './components/Add';
import Users from './components/Users';


const App = () => {
  return (
    <div className='App'> 
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add data={{sname:'',sgrade:''}} method='post'/>} />
      </Routes> */}
      <Users name='hii'/>
    </div>
  )


};

export default App;
