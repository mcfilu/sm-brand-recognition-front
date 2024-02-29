import React from 'react'
import Navbar from '../components/Navbar'
import { useRef, useState } from 'react'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import {faUser,} from "@fortawesome/free-solid-svg-icons"
import { faChartBar, faFile, faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faSquareCheck, faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import cristiano from '../assets/cristiano.jpg'
import messi from '../assets/messi.jpg'
import popy from '../assets/popy.jpg'
import mcos from '../assets/mcos.jpg'
import green_check from '../assets/green_check.jpeg'
import {Link} from 'react-router-dom'
// import { library } from "@fortawesome/fontawesome-svg-core";

// Add the icon to the library
// library.add(faConfluence);


const SearchCampaign = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };
  return (

         <div className="flex flex-row">
            <Navbar />
            <div className={` p-4 flex flex-col items-center justify-center bg-gradient-to-l from-gray-900 via-purple-900 to-violet-600 w-full h-[100vh] pt-4 pb-4`}>
                
                <div className={`flex flex-row justify-between items-center bg-white bg-opacity-80 rounded-[10px] h-[150px] w-[1000px] p-4 ml-44`}>
                    <h1 className={`flex text-[25px]`}>Search campaign:</h1>
                    <input type="text" className={`w-[250px] h-[50px]`} placeholder="Campaign Name"></input>
                    <button className={`flex items-center justify-center text-center w-[40%] h-[40px] bg-blue-400 text-white rounded-[10px]`}>Search</button>
                </div>

                <div className={`flex flex-col justify-between items-center bg-white bg-opacity-80 rounded-[10px]  w-[1000px] p-8 mt-12 ml-44`}>
                    <h1 className={`flex text-[25px]`}>All campaigns </h1>
                    <h1 className={`flex text-[15px]`}>Displayed [1,4] out of 4 </h1>
                    
                    <div className={`flex flex-row justify-between items-center bg-white bg-opacity-80 rounded-[10px] h-[100px] w-[900px] p-4 mt-4 mb-4`}>
                        <div className={`flex flex-col justify-center items-center bg-blue-700 bg-opacity-80 rounded-[10px] h-[100%] w-[50%] p-4`}>
                            <h1 className={`flex text-[15px]`}>Campaign Name</h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-700 bg-opacity-80 rounded-[10px] h-[100%] w-[20%] p-4`}>
                            <h1 className={`flex text-[15px]`}>Start date </h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-700 bg-opacity-80 rounded-[10px] h-[100%] w-[20%] p-4`}>
                            <h1 className={`flex text-[15px]`}>Finish date </h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-700 bg-opacity-80 rounded-[10px] h-[100%] w-[7%] p-4`}>
                            <h1 className={`flex text-[15px]`}>Active </h1>
                        
                        </div>

                    </div>

                    <div className={`flex flex-row justify-between items-center bg-white bg-opacity-80 rounded-[10px] h-[100px] w-[900px] p-4 mt-4 mb-4`}>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[50%] p-4`}>
                            <Link to="/home/campaign"><h1 className={`flex text-[15px]`}>Yonex campaign on 4 influencer</h1></Link>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[20%] p-4`}>
                            <h1 className={`flex text-[15px]`}>25/04/2023 </h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[20%] p-4`}>
                            <h1 className={`flex text-[15px]`}>05/05/2023 </h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[5%] p-4`}>
                            <FontAwesomeIcon icon={faCircleCheck} className={`flex text-[25px] text-green-500`}/>
                        
                        </div>

                    </div>

                    <div className={`flex flex-row justify-between items-center bg-white bg-opacity-80 rounded-[10px] h-[100px] w-[900px] p-4 mt-2 mb-2`}>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[50%] p-4`}>
                            <h1 className={`flex text-[15px]`}>Leki campaign on 2 alpine influencers</h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[20%] p-4`}>
                            <h1 className={`flex text-[15px]`}>27/04/2023 </h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[20%] p-4`}>
                            <h1 className={`flex text-[15px]`}>06/05/2023 </h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[5%] p-4`}>
                            <FontAwesomeIcon icon={faCircleCheck} className={`flex text-[25px] text-green-500`}/>
                        
                        </div>

                    </div>

                    <div className={`flex flex-row justify-between items-center bg-white bg-opacity-80 rounded-[10px] h-[100px] w-[900px] p-4 mt-2 mb-2`}>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[50%] p-4`}>
                            <h1 className={`flex text-[15px]`}>McDonalds campaign on 5 influencers</h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[20%] p-4`}>
                            <h1 className={`flex text-[15px]`}>28/04/2023 </h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[20%] p-4`}>
                            <h1 className={`flex text-[15px]`}>02/05/2023 </h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[5%] p-4`}>
                            <FontAwesomeIcon icon={faCircleCheck} className={`flex text-[25px] text-red-500`}/>
                        
                        </div>

                    </div>

                    <div className={`flex flex-row justify-between items-center bg-white bg-opacity-80 rounded-[10px] h-[100px] w-[900px] p-4 mt-2 mb-2`}>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[50%] p-4`}>
                            <h1 className={`flex text-[15px]`}>Gap testing campaign</h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[20%] p-4`}>
                            <h1 className={`flex text-[15px]`}>29/04/2023 </h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[20%] p-4`}>
                            <h1 className={`flex text-[15px]`}>01/05/2023 </h1>
                        
                        </div>
                        <div className={`flex flex-col justify-center items-center bg-blue-100 bg-opacity-80 rounded-[10px] h-[100%] w-[5%] p-4`}>
                            <FontAwesomeIcon icon={faCircleCheck} className={`flex text-[25px] text-red-500`}/>
                        
                        </div>

                    </div>
                    
                    <button className={`flex items-center justify-center text-center w-[4%] h-[40px] bg-blue-400 text-white rounded-[10px] mt-4`}>1</button>
                </div>
                    


                    
                
                    


            </div>
               
        </div>


        
        

  )
}

export default SearchCampaign