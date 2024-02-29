import React from 'react'
import influ_logo from '../assets/influ_logo.png'
import { Link } from 'react-router-dom';

const Unauth = () => {
  return (
    <div className={`flex items-center justify-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600 min-w-screen min-h-screen`}>

        <div className={`w-[40vw] h-[40vh] bg-white rounded-[10px] flex flex-col items-center justify-center bg-opacity-90`}>
            <div className={`flex flex-col m-4 mb-0 h-[80px] mb-6`}>
                <img src={influ_logo} className={`pl-8 pr-8 h-[80px] object-contain`}></img>
            </div>
            <div>
                <p className={`font-poppins text-[150px] text-logo text-center`}>401</p>
            </div>
            <p className={`text-[20px]`}>Authorisation required!</p>
            <p className={`text-[20px]`}>Please log in to get access.</p>
            <div className={`flex flex-row mt-6`}>
                <Link to="/login"><button className={`bg-blue-500 w-60 h-10 m-2 rounded-[10px] text-white mt-6`}>LOGIN</button></Link>
                <Link to="/signup"><button className={`bg-blue-500 w-60 h-10 m-2 rounded-[10px] text-white mt-6`}>SIGN UP</button></Link>
            </div>

            
    </div>
    
    </div>
    
  )
}

export default Unauth