import {useEffect,useState,useRef} from 'react'
import Navbar from './Navbar'
import '../assets/stylesheets/LandingPage.css'

const LandingPage = () => {
   const barRef=useRef()
   const numberRef=useRef()
   const [state, setState] = useState(0)
   const updateDashArray=(length)=>{
      document.documentElement.style.setProperty("--svgdasharray",length)
   }
   const updateDashOffset=(length)=>{
      document.documentElement.style.setProperty("--svgdashoffset",length)
   }    
   useEffect(() => {
      updateDashArray(Math.ceil(barRef.current.getTotalLength()))
      updateDashOffset(Math.ceil(barRef.current.getTotalLength()))
      const intervalRef=setInterval(
         ()=>{
            setState(Math.floor((Math.random())*899+100));
         }
      ,50)
      setTimeout(()=>clearInterval(intervalRef),1000)
      const Script = document.createElement("script");
      const Form = document.getElementById("formBtn");
      Script.setAttribute('src','https://checkout.razorpay.com/v1/payment-button.js')
      
      Script.setAttribute('data-payment_button_id','pl_HyqegMGSsctscj')
      Form.appendChild(Script);
   }, [])

   useEffect(() => {
      const timeOutRef= setTimeout(() => {
         updateDashOffset(barRef.current.getTotalLength()-(Math.floor((state/1111)*barRef.current.getTotalLength())))
         numberRef.current.innerText=`Total collection: ₹${(Math.floor((state)*920))}`
         console.log(Math.floor((state/1111)*barRef.current.getTotalLength()))
      }, 1000);
      return () => {
         clearTimeout(timeOutRef)
      }
   }, [state])

   return (
       <>
           <Navbar />
           <section>
           <article className="heroText" >
              <span className="orange" data-message="Random Generated Data....Meant for demo only">{state}</span> peoples have joined <span className="blue">to bring a change...</span>
              <div className="secondary-text" >
                 We are collecting donation to bring some much needed revolutionary changes to our society....join us to be a part of this noble cause!!!
               </div>
               {/* <button className="donateBtn">Join us today...</button> */}
               <form id="formBtn">
                  {/* <script src="https://checkout.razorpay.com/v1/payment-button.js"
               data-payment_button_id="pl_Hh6OPfnlnbQxJn" async> 
               </script> */}
               </form>
           </article>
           <article className="stats">
               <div className="goal">
                   <span>Goal: <br/></span>
                   <span>₹ 10,00,000</span>
               </div>
               <div className="progressBar">
                  <div className="numbers" ref={numberRef}></div>
                   <svg
                       width="300"
                       height="300"
                       viewBox="0 0 300 300"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                   >
                     <circle ref={barRef}
                           cx="150"
                           cy="150"
                           r="120"
                           stroke="white"
                           strokeWidth="30"
                           strokeLinejoin="round"
                     />
                    <circle ref={barRef}
                           cx="150"
                           cy="150"
                           r="120"
                           stroke="white"
                           strokeWidth="30"
                           strokeLinejoin="round"
                     />
                   </svg>
               </div>
               <div className="progressInfo">
                  <span>Remaining amount:   </span>
                  <span>{`₹ ${1000000-Math.floor((state)*920)}`}</span>
               </div>
           </article>
           </section>
           <div className="greetText">
              Made with 🧡 by vishal
           </div>
       </>
   );
}

export default LandingPage
