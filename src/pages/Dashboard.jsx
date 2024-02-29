import React from 'react'
import Navbar from '../components/Navbar'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import {faUser,} from "@fortawesome/free-solid-svg-icons"
import { faChartBar, faFile, faBars } from "@fortawesome/free-solid-svg-icons"
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'
// import { library } from "@fortawesome/fontawesome-svg-core";

// Add the icon to the library
// library.add(faConfluence);


const Dashboard = () => {
  return (

         <div className="flex flex-row">
            <Navbar />
            <div className={`fixed top-0 left-64 p-4 flex flex-col pl-12 justify-center bg-gradient-to-l from-gray-900 via-purple-900 to-violet-600 w-full h-full`}>
                
                <div className={`h-[70vh] w-[70vw] grid grid-cols-2 ml-44`}>
                    
                    <div className={`relative w-[30vw] h-[30vh] bg-white bg-opacity-80 rounded-[10px]`}>
                        <div className={`flex flex-row h-[100%]`}>
                            <div style={{ height: "100%", width: "30%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <i className={`text-[90px] text-blue-400 text-center`}> <FontAwesomeIcon icon={faWindowRestore} /></i>
                            </div>
                            <div className={`flex flex-col items-center justify-center w-[70%]`}>
                                <h1 className={`flex items-center justify-center text-center text-[35px] font-poppins h-[30%]`}>Campaigns</h1>
                                <div className={`flex flex-col items-center justify-center h-[50%]`}>
                                    <h1 className={`flex items-center justify-center text-center text-[30px] mb-2 font-poppins`}>Active: 2</h1>
                                    <h1 className={`flex items-center justify-center text-center text-[30px] mt-2 font-poppins h-[30%]`}>Past: 2</h1>

                                    
                                    {/* <h1 className={`flex items-center justify-center text-center pt-4 text-[25px] font-poppins`}>Past: 12</h1> */}
                                    
                                </div>
                                <div className={`flex items-center justify-center h-[20%] w-[100%]`}>
                                    <button className={`w-[30%] h-[70%] bg-blue-400 text-white rounded-[10px] mr-4`}>New</button>
                                    <button className={`w-[30%] h-[70%] bg-blue-400 text-white rounded-[10px] ml-4`}>View</button>
                                    {/* <FontAwesomeIcon icon="fa-brands fa-confluence" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`relative w-[30vw] h-[30vh] bg-white bg-opacity-80 rounded-[10px]`}>
                        <div className={`flex flex-row h-[100%]`}>
                            <div style={{ height: "100%", width: "30%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <i className={`text-[90px] text-blue-400 text-center`}> <FontAwesomeIcon icon={faUser} /></i>
                            </div>
                            <div className={`flex flex-col items-center justify-center w-[70%]`}>
                                <h1 className={`flex items-center justify-center text-center text-[35px] font-poppins h-[30%]`}>Influencers</h1>
                                <div className={`flex flex-col items-center justify-center h-[50%]`}>
                                    <h1 className={`flex items-center justify-center text-center text-[30px] mb-2 font-poppins`}>In Active: 4</h1>
                                    <h1 className={`flex items-center justify-center text-center text-[30px] mt-2 font-poppins h-[30%]`}>In Past: 12</h1>

                                    
                                    {/* <h1 className={`flex items-center justify-center text-center pt-4 text-[25px] font-poppins`}>Past: 12</h1> */}
                                    
                                </div>
                                <div className={`flex items-center justify-center h-[20%] w-[100%]`}>
                                    <button className={`w-[30%] h-[70%] bg-blue-400 text-white rounded-[10px] mr-4`}>Search</button>
                                    <button className={`w-[30%] h-[70%] bg-blue-400 text-white rounded-[10px] ml-4`}>View</button>
                                    {/* <FontAwesomeIcon icon="fa-brands fa-confluence" /> */}
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className={`relative w-[30vw] h-[30vh] bg-white bg-opacity-80 rounded-[10px]`}>
                        <div className={`flex flex-row h-[100%]`}>
                            <div style={{ height: "100%", width: "30%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <i className={`text-[90px] text-blue-400 text-center`}> <FontAwesomeIcon icon={faInstagram} /></i>
                            </div>
                            <div className={`flex flex-col items-center justify-center w-[70%]`}>
                                <h1 className={`flex items-center justify-center text-center text-[35px] font-poppins h-[30%]`}>Posts</h1>
                                <div className={`flex flex-col items-center justify-center h-[50%]`}>
                                    <h1 className={`flex items-center justify-center text-center text-[30px] mb-2 font-poppins`}> Recognised ad: 11</h1>
                                    <h1 className={`flex items-center justify-center text-center text-[30px] mt-2 font-poppins h-[30%]`}> Unrecognised: 34</h1>

                                    
                                    {/* <h1 className={`flex items-center justify-center text-center pt-4 text-[25px] font-poppins`}>Past: 12</h1> */}
                                    
                                </div>
                                <div className={`flex items-center justify-center h-[20%] w-[100%]`}>
                                    <button className={`w-[30%] h-[70%] bg-blue-400 text-white rounded-[10px] mr-4`}>Search</button>
                                    <button className={`w-[30%] h-[70%] bg-blue-400 text-white rounded-[10px] ml-4`}>View</button>
                                    {/* <FontAwesomeIcon icon="fa-brands fa-confluence" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`relative w-[30vw] h-[30vh] bg-white bg-opacity-80 rounded-[10px]`}>
                        <div className={`flex flex-row h-[100%]`}>
                            <div style={{ height: "100%", width: "30%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <i className={`text-[90px] text-blue-400 text-center`}> <FontAwesomeIcon icon={faFile} /></i>
                            </div>
                            <div className={`flex flex-col items-center justify-center w-[70%]`}>
                                <h1 className={`flex items-center justify-center text-center text-[35px] font-poppins h-[30%]`}>Reports</h1>
                                <div className={`flex flex-col items-center justify-center h-[50%]`}>
                                    <h1 className={`flex items-center justify-center text-center text-[30px] mb-2 font-poppins`}>This month: 2</h1>
                                    <h1 className={`flex items-center justify-center text-center text-[30px] mt-2 font-poppins h-[30%]`}>Overall: 6</h1>

                                    
                                    {/* <h1 className={`flex items-center justify-center text-center pt-4 text-[25px] font-poppins`}>Past: 12</h1> */}
                                    
                                </div>
                                <div className={`flex items-center justify-center h-[20%] w-[100%]`}>
                                    <button className={`w-[30%] h-[70%] bg-blue-400 text-white rounded-[10px] mr-4`}>New</button>
                                    <button className={`w-[30%] h-[70%] bg-blue-400 text-white rounded-[10px] ml-4`}>View</button>
                                    {/* <FontAwesomeIcon icon="fa-brands fa-confluence" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    


            </div>
               
        </div>


        
        

  )
}

export default Dashboard