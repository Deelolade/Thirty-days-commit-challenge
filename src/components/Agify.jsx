import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { IoSearchSharp } from "react-icons/io5";
import Axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Agify = () => {
    const [inputValue, setInputValue] = useState('');
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
            console.log("Data fetched successfully", data);
        },
        onError: (error) => {
            console.log("Data not fetched", error);
        }
    });

    const handleSubmit = () => {
        if (!inputValue) {
            alert('Please enter a name');
            return;
        }
        refetch(); // Trigger the query
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-extrabold text-center mb-6">Estimate the Age <br /> of a Name</h1>
                <div className="flex justify-center mb-4">
                    <input 
                        type="text" 
                        value={inputValue} 
                        placeholder="First or full name" 
                        onChange={(e) => setInputValue(e.target.value)} 
                        className="bg-gray-100 p-3 rounded-md w-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <button 
                        onClick={handleSubmit} 
                        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-md ml-2 shadow-md flex items-center justify-center"
                    >
                        <IoSearchSharp className="text-white text-xl" />
                    </button>
                </div>
                {isLoading ? (
                    <div className="mt-4">
                        {/* Show skeleton loader */}
                        <Skeleton height={30} width={300} />
                    </div>
                ) : UserAge ? (
                    <div className="text-center text-lg mt-4">
                        <p>The predicted age for <span className="font-bold underline text-green-600">{inputValue}</span> is 
                            <span className="font-bold underline text-green-600"> {UserAge.age}</span>, <br />
                            based on <span className="font-bold underline text-green-600">{UserAge.count}</span> people with this name.
                        </p>
                    </div>
                ) : (
                    isError && (
                        <div className="mt-4">
                            <h1 className="text-red-600 text-xl font-bold">Error</h1>
                            <p>Something went wrong while fetching the data.</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Agify;
