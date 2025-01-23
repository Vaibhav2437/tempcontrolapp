import './App.css';
// import Tempcontrol from './components/Tempcontrol';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Lifecycle from './components/Lifecycle';
import { useState } from 'react';

function App() {
  const [show,setShow] = useState(true)
  return (
    <div className="App">
      {/* <Tempcontrol/> */}
      <h1>Learn React</h1>
      <button className='btn btn-danger' onClick={()=>setShow(!(show))}> Unmount The Comp</button>
      {
        show ? <Lifecycle/> : <div> </div>
      }
      
    </div>
  );
}

export default App;
