import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Addtask from './Component/Pages/Addtask';
import Taskdetails from './Component/Pages/Taskdetails';
import Update from './Component/Pages/Update';
import Delete from './Component/Pages/Delete';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addtask' element={<Addtask/>}></Route>
      <Route path='/taskdetails' element={<Taskdetails/>}></Route>
      <Route path='addtask/update/:userID' element={<Update/>}></Route>
      <Route path='addtask/delete/:userID' element={<Delete/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
