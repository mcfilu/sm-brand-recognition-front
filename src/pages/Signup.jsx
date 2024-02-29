import React from 'react'
import influ_logo from '../assets/influ_logo.png'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className={`flex items-center justify-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600 min-w-screen min-h-screen`}>

        <div className={`w-[20vw] h-[46vh] bg-white rounded-[10px] flex flex-col bg-opacity-89`}>
                <form className={`flex flex-col items-center justify-center w-full h-full`}>
                    <div className={`flex flex-col m-4 h-1/3`}>
                        <img src={influ_logo} className={`pl-8 pr-8`}></img>
                    </div>
                    <div className={`h-1/2 flex flex-col place-items-center`}>
                        <input placeholder="   Username" className={`bg-gray-500 w-60 h-10  mb-4 rounded-[10px] bg-opacity-20`}/>
                        <input placeholder="   Email" className={`bg-gray-500 w-60 h-10  rounded-[10px] mb-4 bg-opacity-20`}/>

                        <input placeholder="   Password" type={`password`} className={`bg-gray-500 w-60 h-10 mb-4 rounded-[10px] bg-opacity-20`}/>
                        <input placeholder="   Confirm Password" type={`password`} className={`bg-gray-500 w-60 h-10 mb-4 rounded-[10px] bg-opacity-20`}/>
                    </div>
                    <div className={` flex flex-col items-center `}>
                        <div className={`flex flex-col items-center justify-start`}>
                            <button className={`bg-blue-500 w-60 h-10 m-2 rounded-[10px] text-white mt-6`}>SIGN UP</button>
                        </div>
                        
                        <div className={`flex flex-col items-center justify-end mt-4 mb-2`}>

                            <Link to="/login"><p className={`flex text-right`}>LOGIN</p></Link>
                        </div>
                        
                    </div>
                    
                </form>
                
        </div>
        
    </div>
  );
};

export default Signup