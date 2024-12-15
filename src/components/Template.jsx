import React from 'react'
import imageOne from './Iguana.jpg'
import { BsCreditCard } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { GoKebabHorizontal } from "react-icons/go";
import Navbar from './tech.care/Navbar';
import Aside from './tech.care/Aside';
import Main from "./tech.care/Main"

const Template = () => {
    return (
        <div className='w-full h-screen bg-zinc-100 pt-5 pb-5 px-5'>
            <Navbar/>
            <div className="flex w-[100%] ">
            <Aside/>
            <Main/>
            </div>
        </div>
    )
}

export default Template
