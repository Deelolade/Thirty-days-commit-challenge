import React, { useState } from 'react'
import '../css/Agify.css'
import { useQuery } from '@tanstack/react-query'
import { IoSearchSharp } from "react-icons/io5";
import Axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Agify = () => {
    const [inputValue, setInputValue] = useState('')
    const { data: UserAge, isLoading, isError, refetch } = useQuery({
        queryKey: ["users", inputValue],
        queryFn: async () => {
            if (!inputValue) throw new Error('No name provided'); // Prevent empty API calls
            try {
                const response = await Axios.get(`https://api.agify.io?name=${inputValue}`);
                return response.data; // Return the response data
            } catch (error) {
                console.error("Error making API request:", error); // Log any errors during the request
                throw error; // Rethrow the error to be caught by react-query
            }
        },
        enabled: false,
        onSuccess: (data) => {
            console.log("Data fetched successfully", data)
        },
        onError: (error) => {
            console.log("Data not fetched ", error)
        }
    })
    const handleSubmit = () => {
        if (!inputValue) {
            alert('Please enter a name');
            return;
        }
        refetch(); // Trigger the query
    };
    return (
        <div className='container fluid d-flex'>
            <div className="main-container d-flex bg-white shadow shadow-5">
                <h1 className='fw-bolder  mb-3 text-center'>Estimate the Age <br /> of a Name</h1>
                <div className="top d-flex justify-content-center">
                    <input type="text"
                        value={inputValue}
                        placeholder='First or  full name'
                        onChange={(e) => setInputValue(e.target.value)}
                        className='bg-light px-4 py-3 shadow shadowed mx-3'
                    />
                    <button onClick={handleSubmit} className='btn btn-success'>
                        <IoSearchSharp className='text-white fs-4 icon ' />
                    </button>
                </div>
                {isLoading ? (
                    <div className='mt-4'>
                        {/* Show skeleton loader */}
                        <Skeleton height={30} width={300} />
                    </div>
                ) : UserAge ? (
                    <div className="text-center fs-5 mt-4">
                        <p>The predicted age for <span className='fw-bolder text-decoration-underline text-success'>{inputValue}</span> is <span className='fw-bolder text-decoration-underline text-success'>{UserAge.age}</span>, <br />based on <span className='fw-bolder text-decoration-underline text-success'>{UserAge.count}</span> people with this name.</p>
                    </div>
                ) : (
                    isError && (
                        <div>
                            <h1>Error</h1>
                            <p>Something went wrong while fetching the data.</p>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Agify
