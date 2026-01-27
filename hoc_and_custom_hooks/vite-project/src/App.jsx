import { useState } from 'react';

function App() {
  return (
    <div>hoc

     <Hoc cmp={Counter}/>
    </div>
  )
}
function Hoc(props){
 return <h1><props.cmp/></h1>
}
function Counter(){
  const [count,setCount]=useState(0);
  return<>
  <h3>{count}</h3>
  <button onClick={()=>setCount(count+1)}>Update</button>
  </>
}

export default App