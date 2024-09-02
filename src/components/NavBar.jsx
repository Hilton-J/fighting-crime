
const NavBar = () => {
  return (
    <>
      <nav className="bg-blue-950 ">
        <ul className="flex px-10 py-5 text-white justify-between">
          <li className=" hover:text-blue-400 hover:underline">
            <a href="">Home</a>
            </li>
          <li className=" hover:text-blue-400 hover:underline">
            <a href="">About Us</a>
            </li>
          <li className=" hover:text-blue-400 hover:underline">
            <a href="">Talk to us</a>
            </li>
          <li className=" hover:text-blue-400 hover:underline">
            <a href="">Wanted</a>
            </li>
        
        </ul>
      </nav>
    </>
  )
}

export default NavBar