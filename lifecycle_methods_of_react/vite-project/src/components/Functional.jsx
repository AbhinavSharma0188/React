import { useEffect, useState } from "react";

function Functional() {
const [num,setNum]=useState(0);
    async function fetchData(){
      //fetching
      console.log("data fetched");

    }
    useEffect(()=>{
fetchData();
    },[])
  return (
    <div>Functional
        <p>{num}</p>
        <button onClick={()=>setNum(num+1)}>Increase</button>
    </div>
    
  )
}

export default Functional