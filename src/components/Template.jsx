import React, { useContext, useState } from 'react'
import Navbar from './tech.care/Navbar';
import Aside from './tech.care/Aside';
import Main from "./tech.care/Main"
import Patient from './tech.care/Patient';


const Template = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const handleUserClick = (user) => {
        setSelectedUser(user);
    };
    return (
        <div className='w-full h-screen bg-zinc-100 pt-5 pb-5 px-5'>
            <Navbar />
            <div className="flex w-[100%] ">
                <Aside onUserClick={handleUserClick} selectedUser={selectedUser} />
                <Main />
                <Patient user={selectedUser} />
            </div>
        </div>
    )
}

export default Template
