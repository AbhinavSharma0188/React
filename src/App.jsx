import { Route, Routes } from 'react-router-dom';
import Class from './components/Class.jsx';
import Functional from './components/Functional.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Navbar/>}>
              <Route path="/" element={<Functional/>}></Route></Route>
              <Route path="*" element={<h1>Page not found</h1>}></Route>
              <Route path='/classComponent' element={<Class/>}></Route>
           
            
        </Routes>
    </div>
  )
}

export default App;