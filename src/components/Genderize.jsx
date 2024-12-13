import { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { FcCancel } from "react-icons/fc";

const Genderize = () => {
    const [gender, setGender] = useState(null);
    const [input, setInput] = useState('');
    const [error, setError] = useState(null); // State to store error message

    const apiFetch = async () => {
        setError(null); // Reset any previous errors when a new fetch is attempted
        try {
            const apiLink = await fetch(`https://api.genderize.io?name=${input}`);
            const response = await apiLink.json();
            if (response.error) {
                throw new Error(response.error); // Handling any specific API error
            }
            setGender(response);
        } catch (error) {
            setError("There was an error fetching the gender. Please try again."); // Set the error message
            console.error(error);
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='flex justify-center items-center shadow-lg p-8 rounded-lg bg-white w-full max-w-lg'>
                <div className="text-center w-full">
                    <div className="form-top mb-6">
                        <h1 className='text-3xl font-bold mb-4'>Check the Gender of a Name</h1>
                        <div className="flex justify-evenly mx-auto mb-4">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Enter a name"
                                className='px-4 py-3 shadow-md rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500'
                            />
                            <button 
                                onClick={apiFetch} 
                                type='button' 
                                className='bg-yellow-500 text-white rounded-md px-4 py-3 hover:bg-yellow-400 transition duration-300'
                            >
                                <IoSearchSharp className='text-2xl' />
                            </button>
                        </div>
                        {error && <div className="text-red-500">{error}</div>}
                    </div>
                    {input && gender && (
                        <div>
                            <h1 className='text-lg text-center mb-4'>
                                My name is {gender.name}, and I proudly identify as {gender.gender}.
                            </h1>
                        </div>
                    )}
                    <div className="button flex justify-evenly mt-4">
                        <button onClick={() => setGender(null)} className='text-2xl'>
                            <FcCancel />
                        </button>
                        <button onClick={() => setInput('')} className='text-2xl'>
                            <MdCancel />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Genderize;
