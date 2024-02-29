import React from 'react'
import Navbar from '../components/Navbar'
import { useRef, useState } from 'react'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import {faUser,} from "@fortawesome/free-solid-svg-icons"
import { faChartBar, faFile, faBars, faMagnifyingGlass, faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import cristiano from '../assets/cristiano.jpg'
import messi from '../assets/messi.jpg'
import popy from '../assets/popy.jpg'
import mcos from '../assets/mcos.jpg'
import img0 from '../assets/img0.jpeg'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img4 from '../assets/img4.jpeg'
import image5 from '../assets/image5.jpeg'
import image6 from '../assets/image6.jpeg'

const Influencer = () => {
  return (
    <div className="flex flex-row">
            <Navbar />
          
            <div className={` p-4 flex items-center justify-center bg-gradient-to-l from-gray-900 via-purple-900 to-violet-600 w-full h-[100vh] pt-4 pb-4`}>
                
                <div className={`w-[100%] h-[100%] flex flex-row items-center justify-center`}>

                    <div className={` flex flex-col items-center justify-between w-[350px] h-[700px] bg-white bg-opacity-70 rounded-[10px] mb-10  pt-4 pb-4`}>
                      <h1 className={`flex text-center text-[25px] `}>Influencer Statistics</h1>
                      <div className={`w-[280px] h-[400px] flex flex-col bg-white bg-opacity-80 rounded-[10px] p-2 flex justify-between`}>
                            <p className={`text-[20px] text-center`}>@MCOSGIRON</p>
                            <img className={`rounded-[10px]`} src={mcos}></img>
                            <div className={`flex flex-col`}>
                              <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faInstagram} /></i>Posts: 180</p>
                              <p className={`flex ml-16`}><i><FontAwesomeIcon icon={faUser} /></i>Followers: 22.6K</p>
                              
                              <div className={`flex bg-green-400 rounded-[10px] mt-2`}>
                                <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>Detected posts: 6</p>
                              </div>
                              
                            </div>
                            
                           
                      </div>
                      <div className={`flex flex-col bg-white rounded-[10px] w-[280px] p-2`}>
                        
                        <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faInstagram} /></i>Evaluated posts: 9</p>
                        <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>Analysed comments: 60</p>
                        <div className={`flex bg-green-400 rounded-[10px] mt-2`}>
                          <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>Comments sentiment: Positive</p>
                        </div>
                        <div className={`flex bg-green-400 rounded-[10px] mt-2`}>
                           <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faThumbsUp} /></i>Gathered likes: 13 975</p>
                        </div>
                      </div>
                    </div>

                    <div className={` flex flex-col items-center justify-between w-[950px] h-[900px] bg-white bg-opacity-70 rounded-[10px] mb-10  p-4 ml-12`}>
                      <h1 className={`flex text-center text-[25px] `}>Post Evaluation</h1>
                      <div className={`flex flex-col justify-between w-[100%]`}>
                        <div className={`flex flex-row justify-between`}>
                          <div className={`flex flex-col items-center justify-center w-[280px] h-[400px] bg-white bg-opacity-80 rounded-[10px] p-2 flex`}>
                            <div className={`flex w-[100%] bg-green-400 rounded-[10px] mb-2`}>
                              <p className={`flex text-[20px] ml-16 `}>Detected: Yonex</p>
                            </div>
                            <img className={`rounded-[10px]`} src={img0}></img>
                            <div className={`flex w-[100%] bg-white rounded-[10px] mt-2`}>
                              <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>comments: 345</p>
                            </div>
                            <div className={`flex w-[100%] bg-green-400 rounded-[10px] mt-2`}>
                            <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faThumbsUp} /></i>Gathered likes: 1505</p>
                            </div>
                            <div className={`flex w-[100%] bg-green-400 rounded-[10px] mt-2`}>
                            <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>Comments sentiment: Positive</p>
                            </div>
                          </div>

                          <div className={`flex flex-col items-center justify-center w-[280px] h-[400px] bg-white bg-opacity-80 rounded-[10px] p-2 flex`}>
                            <div className={`flex w-[100%] bg-green-400 rounded-[10px] mb-2`}>
                              <p className={`flex text-[20px] ml-16 `}>Detected: Yonex</p>
                            </div>
                            <img className={`rounded-[10px] h-[200px]`} src={img1}></img>
                            <div className={`flex w-[100%] bg-white rounded-[10px] mt-2`}>
                              <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>comments: 26</p>
                            </div>
                            <div className={`flex w-[100%] bg-green-400 rounded-[10px] mt-2`}>
                            <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faThumbsUp} /></i>Gathered likes: 1626</p>
                            </div>
                            <div className={`flex w-[100%] bg-green-400 rounded-[10px] mt-2`}>
                            <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>Comments sentiment: Positive</p>
                            </div>
                          </div>

                          <div className={`flex flex-col items-center justify-center w-[280px] h-[400px] bg-white bg-opacity-80 rounded-[10px] p-2 flex`}>
                            <div className={`flex w-[100%] bg-green-400 rounded-[10px] mb-2`}>
                              <p className={`flex text-[20px] ml-16 `}>Detected: Yonex</p>
                            </div>
                            <img className={`rounded-[10px] h-[200px]`} src={img2}></img>
                            <div className={`flex w-[100%] bg-white rounded-[10px] mt-2`}>
                              <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>comments: 43</p>
                            </div>
                            <div className={`flex w-[100%] bg-green-400 rounded-[10px] mt-2`}>
                            <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faThumbsUp} /></i>Gathered likes: 1828</p>
                            </div>
                            <div className={`flex w-[100%] bg-yellow-400 rounded-[10px] mt-2`}>
                            <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>Comments sentiment: Positive</p>
                            </div>
                          </div>
                          
                        </div>

                        <div className={`flex flex-row justify-between mt-8`}>
                          <div className={`flex flex-col items-center justify-center w-[270px] h-[400px] bg-white bg-opacity-80 rounded-[10px] p-2 flex`}>
                            <div className={`flex w-[100%] bg-green-400 rounded-[10px] mb-2`}>
                              <p className={`flex text-[20px] ml-16 `}>Detected: Yonex</p>
                            </div>
                            <img className={`rounded-[10px] h-[200px]`} src={img4}></img>
                            <div className={`flex w-[100%] bg-white rounded-[10px] mt-2`}>
                              <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>comments: 8</p>
                            </div>
                            <div className={`flex w-[100%] bg-yellow-400 rounded-[10px] mt-2`}>
                            <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faThumbsUp} /></i>Gathered likes: 1063</p>
                            </div>
                            <div className={`flex w-[100%] bg-green-400 rounded-[10px] mt-2`}>
                            <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>Comments sentiment: Positive</p>
                            </div>
                          </div>

                          <div className={`flex flex-col items-center justify-center w-[280px] h-[400px] bg-white bg-opacity-80 rounded-[10px] p-2 flex`}>
                            <div className={`flex w-[100%] bg-blue-400 rounded-[10px] mb-2`}>
                              <p className={`flex text-[20px] ml-16 `}>Detected: None</p>
                            </div>
                            <img className={`rounded-[10px] h-[200px]`} src={image5}></img>
                            <div className={`flex w-[100%] bg-white rounded-[10px] mt-2`}>
                              <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>comments: 42</p>
                            </div>
                            <div className={`flex w-[100%] bg-red-400 rounded-[10px] mt-2`}>
                            <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faThumbsUp} /></i>Gathered likes: 889</p>
                            </div>
                            <div className={`flex w-[100%] bg-yellow-400 rounded-[10px] mt-2`}>
                            <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>Comments sentiment: Neutral</p>
                            </div>
                          </div>

                          <div className={`flex flex-col items-center justify-center w-[280px] h-[400px] bg-white bg-opacity-80 rounded-[10px] p-2 flex`}>
                            <div className={`flex w-[100%] bg-blue-400 rounded-[10px] mb-2`}>
                              <p className={`flex text-[20px] ml-16 `}>Detected: None</p>
                            </div>
                            <img className={`rounded-[10px] h-[200px]`} src={image6}></img>
                            <div className={`flex w-[100%] bg-white rounded-[10px] mt-2`}>
                              <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>comments: 21</p>
                            </div>
                            <div className={`flex w-[100%] bg-yellow-400 rounded-[10px] mt-2`}>
                            <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faThumbsUp} /></i>Gathered likes: 1275</p>
                            </div>
                            <div className={`flex w-[100%] bg-green-400 rounded-[10px] mt-2`}>
                            <p className={`flex  ml-16`}><i><FontAwesomeIcon icon={faComment} /></i>Comments sentiment: Positive</p>
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

export default Influencer