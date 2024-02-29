import React from 'react'
import influ_logo from '../assets/influ_logo.png'
import { Link } from 'react-router-dom';

const Forgotten = () => {
  return (
    <div className={`flex items-center justify-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600 min-w-screen min-h-screen`}>

        <div className={`w-[25vw] h-[38vh] bg-white rounded-[10px] flex flex-col bg-opacity-89`}>
                <form className={`flex flex-col items-center justify-center w-full h-full`}>
                    <div className={`flex flex-col m-4 h-1/3`}>
                        <img src={influ_logo} className={`pl-8 pr-8 h-[100px] object-contain`}></img>
                    </div>
                    <div className={` flex flex-col items-center`}>
                        <p className={`font-poppins text-[20px] text-logo text-center`}>Forgot your password?</p>
                        <p className={`font-poppins text-[15px] text-logo text-center`}>Enter your email address and we'll send you a link to reset your password.</p>
                        
                    </div>
                    <div className={` flex flex-col items-center mt-6`}>
                        <div className={`flex flex-col items-center justify-start`}>
                            <input type="email" placeholder="   Email" className={`bg-gray-500 w-80 h-10 m-2 rounded-[10px] bg-opacity-20`}/>
                            <button className={`bg-blue-500 w-80 h-10 m-2 rounded-[10px] text-white`}>RECOVER PASSWORD</button>
                        </div>
                        
                       
                        
                    </div>
                    
                </form>
                
        </div>
        
    </div>
  )
}

export default Forgotten