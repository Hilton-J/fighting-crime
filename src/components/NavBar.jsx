import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <nav className="bg-blue-950 ">
        <ul className="flex px-10 py-5 text-white justify-between">
          <li className=" hover:text-blue-400 hover:underline">
            <NavLink to={'/'}>Home</NavLink>
         </li>
          <li className=" hover:text-blue-400 hover:underline">
            <NavLink to={'/about'}>About Us</NavLink>
         </li>
          <li className=" hover:text-blue-400 hover:underline">
            <NavLink to={'/talk'}>Talk to us</NavLink>
         </li>
          <li className=" hover:text-blue-400 hover:underline">
            <NavLink to={'/wanted'}>Wanted</NavLink>
         </li>
        
        </ul>
      </nav>
    </>
  )
}

export default NavBar