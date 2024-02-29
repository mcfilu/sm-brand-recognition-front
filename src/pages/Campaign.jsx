import React from 'react'
import Navbar from '../components/Navbar'
import { useRef, useState } from 'react'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import {faUser,} from "@fortawesome/free-solid-svg-icons"
import { faChartBar, faFile, faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import cristiano from '../assets/cristiano.jpg'
import messi from '../assets/messi.jpg'
import popy from '../assets/popy.jpg'
import mcos from '../assets/mcos.jpg'
import {Link} from 'react-router-dom'
// import { library } from "@fortawesome/fontawesome-svg-core";

// Add the icon to the library
// library.add(faConfluence);


const Campaign = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };
  return (

         <div className="flex flex-row">
            <Navbar />
            <div className={` p-4 flex flex-col items-center justify-center bg-gradient-to-l from-gray-900 via-purple-900 to-violet-600 w-full h-[100vh] pt-4 pb-4 ml-44`}>
                
                <div className={`w-[100%] h-[100%] flex flex-col items-center justify-center`}>

                
                    
                    <div className={` flex flex-col items-center justify-between w-[70%] h-[350px] bg-white bg-opacity-80 rounded-[10px] mb-10  pt-4 pb-4`}>
                      <h1 className={`flex items-center justify-center text-center text-[30px] font-poppins h-[12%]`}>Campaign Informations</h1>
                      
                      <div className={`flex flex-row h-[60%] w-[100%]`}>
                      <div className={`flex flex-col w-[100%] items-center justify-between pt-2 pb-2`}>
                          <p>Campaign Name: Yonex campaign on 4 influencer</p>
                          <p>Start date: 25/04/2023</p>
                          
                          <div className={`flex flex-row`}>
                            <label for="new_start">New Start Date</label>
                            <input id="new_start" name="new_start" type="date"
                              onChange={handleChange}
                              ref={dateInputRef}
                            />
                          
                          </div>
                          <p>Finish date: 05/05/2023</p>
                          <div className={`flex flex-row`}>
                            <label for="new_finish">New Finish Date</label>
                            <input id="new_finish" name="new_finish" type="date"
                              onChange={handleChange}
                              ref={dateInputRef}
                            />
                          
                          </div>
                        </div>

                        <div className={`flex flex-col w-[100%] items-center justify-between pt-2 pb-2`}>
                          <p>Campaign Description: </p>
                          <textarea className={`w-[70%]`} id="w3review" name="w3review" rows="5" cols="1"> this is the testing input for campaign description</textarea>

                        </div>
                        <div className={`flex flex-col w-[100%] items-center justify-between pt-2 pb-2`}>
                          <p className={`flex`}>Add new influencer</p>
                          <p className={`flex `}>Instagram nickname: </p>
                          <input className={``} type="text" placeholder='@Nickname'></input>
                          <button className={`flex items-center justify-center text-center w-[40%] h-[15%] bg-blue-400 text-white rounded-[10px]`}>Add</button>
                        </div>
                      </div>
                      <p className={`text-[25px]`}>Active: <i className={`text-green-500`}><FontAwesomeIcon icon={faSquareCheck} /></i></p>
                      <button className={`w-[30%] h-[10%] bg-blue-400 text-white rounded-[10px] mr-4`}>Save Informations</button>
                    </div>

                    <div className={` flex flex-col items-center justify-between w-[70%] h-[550px] bg-white bg-opacity-80 rounded-[10px] pl-8 pr-8 pt-4 pb-4`}>
                    <h1 className={`flex items-center justify-center text-center text-[30px] font-poppins`}>Campaign Influencers</h1>
                      <div className={` flex flex-col w-[100%]`}>
                        <div className={`flex flex-row items-center justify-between `}>
                          <div className={`w-[280px] h-[450px] flex flex-col bg-white bg-opacity-80 rounded-[10px] p-2 flex justify-between`}>
                            <p className={`text-[20px] text-center`}>@CRISTIANO</p>
                            <img className={`rounded-[10px]`} src={cristiano}></img>
                            <div className={`flex flex-col`}>
                              <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faInstagram} /></i>Posts: 3479</p>
                              <p className={`flex ml-16`}><i><FontAwesomeIcon icon={faUser} /></i>Followers: 580M</p>
                              <div className={`flex bg-red-400 rounded-[10px] mt-2`}>
                                <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>Detected posts: 0</p>
                              </div>
                              
                            </div>
                            
                            <div className={`flex flex-row items-center justify-between`}>
                              <button className={`flex items-center justify-center text-center bg-blue-400 text-white rounded-[10px] w-[100px] h-[28px] `}>View</button>
                              <button className={`flex items-center justify-center text-center bg-red-500 text-white rounded-[10px] w-[100px] h-[28px] `}>Delete</button>
                            </div>
                          </div>

                          <div className={`w-[280px] h-[450px] flex flex-col bg-white bg-opacity-80 rounded-[10px] p-2 flex justify-between`}>
                            <p className={`text-[20px] text-center`}>@LEOMESSI</p>
                            <img className={`rounded-[10px]`} src={messi}></img>
                            <div className={`flex flex-col`}>
                              <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faInstagram} /></i>Posts: 1027</p>
                              <p className={`flex ml-16`}><i><FontAwesomeIcon icon={faUser} /></i>Followers: 504M</p>
                              <div className={`flex bg-red-400 rounded-[10px] mt-2`}>
                                <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>Detected posts: 0</p>
                              </div>
                              
                            </div>
                            
                            <div className={`flex flex-row items-center justify-between`}>
                              <button className={`flex items-center justify-center text-center bg-blue-400 text-white rounded-[10px] w-[100px] h-[28px] `}>View</button>
                              <button className={`flex items-center justify-center text-center bg-red-500 text-white rounded-[10px] w-[100px] h-[28px] `}>Delete</button>
                            </div>
                          </div>

                          <div className={`w-[280px] h-[450px] flex flex-col bg-white bg-opacity-80 rounded-[10px] p-2 flex justify-between`}>
                            <p className={`text-[20px] text-center`}>@POPYUMMY_MAG</p>
                            <img className={`rounded-[10px]`} src={popy}></img>
                            <div className={`flex flex-col`}>
                              <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faInstagram} /></i>Posts: 2785</p>
                              <p className={`flex ml-16`}><i><FontAwesomeIcon icon={faUser} /></i>Followers: 556K</p>
                              <div className={`flex bg-green-400 rounded-[10px] mt-2`}>
                                <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>Detected posts: 1</p>
                              </div>
                              
                            </div>
                            
                            <div className={`flex flex-row items-center justify-between`}>
                              <button className={`flex items-center justify-center text-center bg-blue-400 text-white rounded-[10px] w-[100px] h-[28px] `}>View</button>
                              <button className={`flex items-center justify-center text-center bg-red-500 text-white rounded-[10px] w-[100px] h-[28px] `}>Delete</button>
                            </div>
                          </div>

                          <div className={`w-[280px] h-[450px] flex flex-col bg-white bg-opacity-80 rounded-[10px] p-2 flex justify-between`}>
                            <p className={`text-[20px] text-center`}>@MCOSGIRON</p>
                            <img className={`rounded-[10px]`} src={mcos}></img>
                            <div className={`flex flex-col`}>
                              <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faInstagram} /></i>Posts: 180</p>
                              <p className={`flex ml-16`}><i><FontAwesomeIcon icon={faUser} /></i>Followers: 22.6K</p>
                              <div className={`flex bg-green-400 rounded-[10px] mt-2`}>
                                <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>Detected posts: 6</p>
                              </div>
                              
                            </div>
                            
                            <div className={`flex flex-row items-center justify-between`}>
                              <Link to="/home/campaign/influencer"><button className={`flex items-center justify-center text-center bg-blue-400 text-white rounded-[10px] w-[100px] h-[28px] `}>View</button></Link>
                              <button className={`flex items-center justify-center text-center bg-red-500 text-white rounded-[10px] w-[100px] h-[28px] `}>Delete</button>
                            </div>
                          </div>
                          
                          
                        </div>

                      </div>
                    </div>

                </div>
                    
                    


                    
                
                    


            </div>
               
        </div>


        
        

  )
}

export default Campaign