import NavBar from "./NavBar"
import image from '../assets/saps_banner.jpg'


const Hero = () => {
  return (
    <>
      <div>
        <img src={image} className="w-full" />
      </div>
      <NavBar />
    </>
  )
}

export default Hero