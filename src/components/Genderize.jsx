import { useState } from 'react';
import '../css/genderize.css'
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
        <div className='form-container d-flex justify-content-center align-items-center '>
            <div className='form d-flex justify-content-center align-items-center shadow shadow-5   '>
                <div className="">
                    <div className="form-top text-center justify-content-between">
                        <h1 className='fs-1 fw-bolder'>Check the Gender of a Name</h1>
                        <div className=" d-flex justify-content-evenly top mx-auto my-4">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Enter a name"
                                className='px-3  py-3 shadow shadow-4 rounded-1'
                            />
                            <button onClick={apiFetch} type='button' className='btn btn-warning rounded-3 px-3'><IoSearchSharp className='text-white fs-4 icon' /></button>
                        </div>
                        {error && <div style={{ color: 'blue' }}>{error}</div>} {/* Display error message in red */}
                    </div>
                    {input && gender && (
                        <div>
                            <h1 className='fs-4 text-center'>My name is {gender.name}, and I proudly identify as {gender.gender}.</h1>
                        </div>
                    )}
                    <div className="button d-flex justify-content-evenly mt-5 mx-auto ">
                        <button className=' ' onClick={() => setGender(null)}><FcCancel className=' fs-2 icon' /></button>
                        <button className='' onClick={() => setInput('')}><MdCancel className=' fs-2 icon' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Genderize;
