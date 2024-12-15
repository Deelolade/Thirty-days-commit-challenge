import React from 'react'
import { FiCalendar } from "react-icons/fi";
import { TbGenderFemme } from "react-icons/tb";
import { BsGenderMale } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa6";


const Patient = ({ user }) => {
    if (!user) {
        return <p>Select a user to see details</p>; // Fallback UI when no user is selected
    }
    const rawDate = user.dob.date
    const formattedDate = rawDate.split('T')[0]
    console.log(formattedDate)
    return (
        <div>
            <section className='w-[22vw] bg-white h-[75vh] p-4 pt-7  rounded-xl mb-3'>
                <img src={user.picture.large} alt="" className='rounded-full mx-auto mb-6  h-48 w-48 object-fixed' />
                <h1 className='font-bold text-xl text-center'>{user.name.first} {user.name.last}</h1>
                <div className=" flex mt-4">
                    <FiCalendar className='text-2xl mx-5 px-2 rounded-full my-1 h-10 w-10 bg-slate-200' />
                    <div className="div">
                        <p>Date Of Birth</p>
                        <h3 className='font-semibold'>{formattedDate}</h3>
                    </div>
                </div>
                <div className=" flex mt-4">
                    {user.gender === "female"
                        ?
                        <TbGenderFemme className='text-2xl mx-5 px-2 rounded-full my-1 h-10 w-10 bg-slate-200' />
                        :
                        <BsGenderMale className='text-2xl mx-5 px-2 rounded-full my-1 h-10 w-10 bg-slate-200' />

                    }
                    <div className="div">
                        <p>Gender</p>
                        <h3 className='font-semibold'>{user.gender}</h3>
                    </div>
                </div>
                <div className=" flex mt-4">
                    <FiPhone className='text-2xl mx-5 px-2 rounded-full my-1 h-10 w-10 bg-slate-200' />
                    <div className="div">
                        <p>Contact Info</p>
                        <h3 className='font-semibold'>{user.phone}</h3>
                    </div>
                </div>
                <div className=" flex mt-4">
                    <FiPhone className='text-2xl mx-5 px-2 rounded-full my-1 h-10 w-10 bg-slate-200' />
                    <div className="div">
                        <p>Emergency Contact</p>
                        <h3 className='font-semibold'>{user.cell}</h3>
                    </div>
                </div>
                <div className=" flex mt-4">
                    <FaLocationArrow className='text-x mx-5 px-2 rounded-full my-1 h-10 w-10 bg-slate-200' />
                    <div className="div">
                        <p>Address</p>
                        <h3 className='font-semibold'>No {user.location.street.number} , {user.location.street.name}</h3>
                    </div>
                </div>
                <button className='bg-green-300 mt-10 font-semibold py-3 px-7 rounded-full  mx-auto flex hover:bg-green-400 '>Show All Information</button>
            </section>
        </div>
    )
}

export default Patient
