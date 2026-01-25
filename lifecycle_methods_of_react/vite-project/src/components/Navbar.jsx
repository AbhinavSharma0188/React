import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to={"/"} >  <button >Functional component</button></Link>
        <Link to={"/classComponent"}><button>Class component</button></Link>
        <Outlet/>


    </div>
  )
}

export default Navbar