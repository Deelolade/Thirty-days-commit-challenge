import React, { useEffect, useState } from 'react'
import { BsCreditCard } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { GoKebabHorizontal } from "react-icons/go";

const Navbar = () => {
    const [User, setUser] = useState([])
    const [selectedItem, setSelectedItem] = useState("Patients")
    const [isLoading, setIsLoading] = useState(true)
    const ApiFetch = async () => {
        try {
            const Apilink = await fetch('https://randomuser.me/api/?results=1');
            const response = await Apilink.json();
            setUser(response.results);
            setIsLoading(false); // Data fetched, stop loading
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false); // Stop loading on error as well
        }
    }
    useEffect(() => {
        ApiFetch()
    }, [])
    const handleClick = (itemName) => {
        setSelectedItem(itemName); // Update selected item
    };
    return (
        <div>
            <nav className='flex w-[100%] h-[8vh] justify-between items-center px-12 bg-white rounded-[50px] mx-auto mb-8 '>
                <div className="logo text-4xl font-bold ">
                    <h4 className='font-sans font-bold'>Tech<span className='text-green-500'>.</span>Care</h4>
                </div>
                <ul className='nav-items flex w-[50%] justify-evenly  items-center font-semibold font-sans'>
                    <li><a href="" className={`flex items-center py-2 px-3 rounded-full transition duration-300 ${selectedItem === 'Overview' ? 'bg-green-300' : ''} 
                    hover:bg-green-200`} onClick={() => handleClick("Overview")}><GoHome className='text-xl mx-2 my-1 ' />Overview</a></li>
                    <li><a href="" className={`flex items-center py-2 px-3 rounded-full transition duration-300 ${selectedItem === 'Patients' ? 'bg-green-300' : ''} 
                    hover:bg-green-200`} onClick={() => handleClick("Patients")}><MdOutlinePeopleAlt className='text-xl mx-2 my-1 ' />Patients</a></li>
                    <li><a href="" className={`flex items-center py-2 px-3 rounded-full transition duration-300 ${selectedItem === 'Schedule' ? 'bg-green-300' : ''} 
                    hover:bg-green-200`} onClick={() => handleClick("Schedule")}><FiCalendar className='text-xl mx-2 my-1 ' />Schedule</a></li>
                    <li><a href="" className={`flex items-center py-2 px-3 rounded-full transition duration-300 ${selectedItem === 'Message' ? 'bg-green-300' : ''} 
                    hover:bg-green-200`} onClick={() => handleClick("Message")}> <FiMessageSquare className='text-xl mx-2 my-1 ' />Message</a></li>
                    <li><a href="" className={`flex items-center py-2 px-3 rounded-full transition duration-300 ${selectedItem === 'Transactions' ? 'bg-green-300' : ''} 
                    hover:bg-green-200`} onClick={() => handleClick("Transactions")}><BsCreditCard className='text-xl mx-2 my-1 ' />Transactions</a></li>
                </ul>
                {
                    User && User.length > 0 ?
                        User.map((user, index) => {
                            return (
                                <div key={index}>
                                    <div className="user-info  flex justify-between">
                                        <img src={user.picture.thumbnail} alt="" className='rounded-full h-12 mr-2 w-12 object-fixed' />
                                        <div className="user-text  leading-tight mt-1">
                                            <h5 className='font-bold '>Dr. {user.name.first} {user.name.last}</h5>
                                            <p className=''>Medical Practitioner</p>
                                        </div>
                                        <div className="h-11 w-px bg-gray-200 mx-3"></div>
                                        <div className="icons flex justify-center items-center">
                                            <IoSettingsOutline className='text-2xl' />
                                            <GoKebabHorizontal className='text-2xl rotate-90' />
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <p> Wait a minute.... </p>
                }
            </nav>
        </div>
    )
}

export default Navbar
