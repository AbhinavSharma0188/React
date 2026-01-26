import { useDispatch, useSelector } from "react-redux";
import { increment } from "./utility/couterSlice";

function App() {

  const data=useSelector((state)=>state.counter1.value)
  const dispatch=useDispatch();
  function handleDispatch(){
    dispatch(increment())
  }
  return (
    <div>{data}
    <button onClick={handleDispatch}>Increase</button>
    
    
    </div>
  )
}

export default App;