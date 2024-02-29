import React from 'react'
import influ_logo from '../assets/influ_logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   
<div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 flex flex-col justify-between z-0">
  <div>
    <Link to="/home"><img src={influ_logo} ></img></Link>
    <h2 className="text-xl font-bold mb-4 mt-12">Campaigns</h2>
    <ul>
      <li className="mb-2">
        <a href="/page1" className="hover:text-gray-300">
        <Link to="/home/campaign/search">All campaigns</Link>
        </a>
      </li>
      <li className="mb-2">
        <a href="/page2" className="hover:text-gray-300">
            <Link to="/home/campaign/search">Search campaigns</Link>
        </a>
        </li>
      <li className="mb-2">
        <a href="/page2" className="hover:text-gray-300">
        <Link to="/home/campaign/new">New campaigns</Link>
        </a>
        </li>

    </ul>

    <h2 className="text-xl font-bold mb-4 mt-12">Reports</h2>
    <ul>
      <li className="mb-2">
        <a href="/page1" className="hover:text-gray-300">
          All reports
        </a>
      </li>
      <li className="mb-2">
        <a href="/page2" className="hover:text-gray-300">
            New report
        </a>
        </li>
    </ul>

    <h2 className="text-xl font-bold mb-4 mt-12">Influencers</h2>
    <ul>
      <li className="mb-2">
        <a href="/page1" className="hover:text-gray-300">
          All Influencers
        </a>
      </li>
      <li className="mb-2">
        <a href="/page2" className="hover:text-gray-300">
            Search Influencers
        </a>
        </li>
    </ul>

    </div>
    <ul>
    <li className="mb-2">
      <a href="/page2" className="hover:text-gray-300 self-end">
        Profile Informations
      </a>
    </li>
    <li className="mb-2">
      <a href="/page2" className="hover:text-gray-300 self-end">
        Lougout
      </a>
    </li>
    
  </ul>
    </div>

  )
}

export default Navbar