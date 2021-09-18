import {useState} from 'react'
import '../assets/stylesheets/Navbar.css'
import logo from '../assets/images/logo.svg'
import InfoModal from './InfoModal'

const Navbar = () => {
   const [modal, setmodal] = useState(false)
   return (
      <>
      <nav>
         <div className="logo" onClick={()=>setmodal(true)}>
            <img src={logo} alt="logo.svg" srcSet="" />
            <span>DonateLives - the sparks foundation intiative </span>        
         </div>
      </nav>
      {modal&&<InfoModal modalState={setmodal}/>}
      </>
   )
}

export default Navbar
