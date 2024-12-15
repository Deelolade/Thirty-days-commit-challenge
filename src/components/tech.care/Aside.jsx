import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import "./aside.css";
import { GoKebabHorizontal } from "react-icons/go";


const Aside = () => {
    const [Users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const ApiFetch = async () => {
        try {
            const Apilink = await fetch('https://randomuser.me/api/?results=50');
            const response = await Apilink.json();
            setUsers(response.results);
            setIsLoading(false); // Data fetched, stop loading
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false); // Stop loading on error as well
        }

    }
    useEffect(() => {
        ApiFetch()
    }, [])
    return (
        <div>



            <section className='w-[22vw] bg-white h-[80vh] p-4 px-0  rounded-xl mb-3'>
                <div className='header px-3 flex items-center h-10 justify-between mb-5'>
                    <h1 className='text-2xl font-bold'>Patients</h1>
                    <FaSearch className='text-2xl' />
                </div>

                <ul className='overflow-y-scroll h-[70vh] custom-scrollbar pr-1'>
                    {
                        Users && Users.length > 0 ?
                            Users.map((user, index) => {
                                return (
                                    <div key={index}>
                                        <li className='h-24 flex items-center justify-between px-4 bg-white hover:bg-green-200'>
                                            <div className="text flex justify-between items-center">
                                                <img src={user.picture.thumbnail} alt="" className='rounded-full mr-6 h-16 w-16 object-fixed' />
                                                <div className="">
                                                    <h4 className='font-bold text-l'>{user.name.first} {user.name.last}</h4>
                                                    <p className=' font-medium'>{user.gender}, {user.dob.age}</p>
                                                </div>
                                            </div>
                                            <GoKebabHorizontal className='text-2xl' />
                                        </li>
                                    </div>
                                )
                            }) : <p> Wait a minute.... </p>
                    }
                </ul>
            </section>
        </div>
    )
}

export default Aside
