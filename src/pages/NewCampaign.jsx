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
import Loader from '../components/Loader'
// import { library } from "@fortawesome/fontawesome-svg-core";

// Add the icon to the library
// library.add(faConfluence);


const NewCampaign = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // Simulate an API call or some action that takes time
    setTimeout(() => {
      setLoading(false);
    }, 15000);
  };

  return (

         <div className="flex flex-row">
            <Navbar />
            <div className={` p-4 flex flex-col items-center justify-center bg-gradient-to-l from-gray-900 via-purple-900 to-violet-600 w-full h-[100vh] pt-4 pb-2`}>
                
            <div className={`flex flex-row justify-center items-center bg-white bg-opacity-80 rounded-[10px] h-[100px] w-[1000px] p-4 ml-44`}>
                    <h1 className={`flex text-[25px]`}>Create New Campaign</h1>
                    
                </div>

                <div className={`flex flex-col justify-between items-center bg-white bg-opacity-80 rounded-[10px]  w-[1000px] p-8 pb-4 mt-12 ml-44`}>
                    <div className={`flex flex-row justify-center items-center w-full mt-2 mb-2`}>
                        <h1 >Campaign Name: </h1>
                        <input className={`flex ml-4 w-[200px]`}></input>
                    </div>
                            <div className={`flex flex-row mt-2 mb-2`}>
                            <label for="new_start">Start Date: </label>
                            <input className={`flex ml-4`} id="new_start" name="new_start" type="date"
                              onChange={handleChange}
                              ref={dateInputRef}
                            />
                          
                          </div>
                          
                          <div className={`flex flex-row mt-2 mb-2`}>
                            <label for="new_finish">Finish Date: </label>
                            <input className={`flex ml-4`} id="new_finish" name="new_finish" type="date"
                              onChange={handleChange}
                              ref={dateInputRef}
                            />
                          
                          </div>

                          <div className={`flex flex-row w-[100%] items-center justify-center mt-2 mb-2`}>
                          <p>Campaign Description: </p>
                          <textarea className={`w-[30%] ml-4`} id="w3review"  name="w3review" rows="5" cols="1"></textarea>

                        </div>

                        <div className={`flex flex-row justify-center items-center w-full mt-2 mb-2`}>
                        <h1 >Evaluation brands: (separate by comma) </h1>
                        <input className={`flex ml-4 w-[200px]`}></input>
                        </div>
                        <div className={`flex flex-col items-center justify-center bg-white w-[70%] h-[330px] rounded-[10px] mt-2 mb-2 p-2`}>
                            <h1 className={`flex text-[25px]`}>Add Influencers</h1>
                            <div className={`flex flex-row justify-center bg-blue-100 rounded-[10px] items-center w-full mt-2 mb-2 p-2`}>
                                <h1>Instagram name:</h1>
                                <input className={`flex ml-4 w-[200px]`} placeholder="@name"></input>
                            </div>
                            <div className={`flex flex-row justify-center bg-blue-100 rounded-[10px] items-center w-full mt-2 mb-2 p-2`}>
                                <h1>Instagram name:</h1>
                                <input className={`flex ml-4 w-[200px]`} placeholder="@name"></input>
                            </div>
                            <div className={`flex flex-row justify-center bg-blue-100 rounded-[10px] items-center w-full mt-2 mb-2 p-2`}>
                                <h1>Instagram name:</h1>
                                <input className={`flex ml-4 w-[200px]`} placeholder="@name"></input>
                            </div>
                            <div className={`flex flex-row justify-center bg-blue-100 rounded-[10px] items-center w-full mt-2 mb-2 p-2`}>
                                <h1>Instagram name:</h1>
                                <input className={`flex ml-4 w-[200px]`} placeholder="@name"></input>
                            </div>

                            <button className={`flex items-center justify-center text-center w-[250px] h-[40px] bg-blue-400 text-white rounded-[10px]`}>Add one more Influencer</button>
                            
                        </div>
                    
                    
                    <button onClick={handleClick} className={`flex items-center justify-center text-center w-[250px] h-[60px] bg-blue-400 text-white rounded-[10px] mt-2`}>Create Campaign</button>
                    <Loader loading={loading} />
                </div>
                    
                    


                    
                
                    


            </div>
               
        </div>


        
        

  )
}

export default NewCampaign