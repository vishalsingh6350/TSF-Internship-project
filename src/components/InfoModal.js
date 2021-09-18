import React from 'react'
import '../assets/stylesheets/InfoModal.css'
const InfoModal = ({modalState}) => {
   return (
      <div className='modal' onClick={()=>modalState(false)}>
         <div className="modalContent">
            This is a dummy website for a hypothetical NGO operating under "THE SPARKS FOUNDATION" that I've created as my submission for the ongoing Internship here at The Sparks Foundation for GRIP September 2021 batch.....
            <br />
            There is no backend involved here so each and every data you see rendering on the screen is randomly generated on each refresh......
            <br />
            Do checkOut this site and suggest how i can improve it...
         </div>
      </div>
   )
}

export default InfoModal
