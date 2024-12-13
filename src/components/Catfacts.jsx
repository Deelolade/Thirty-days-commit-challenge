import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import Skeleton styles

const CatFact = () => {
    const [fact, setFact] = useState('');
    const [isLoading, setIsLoading] = useState(true); // New loading state to track when data is being fetched

    // Function to fetch cat fact from API
    const catFact = async () => {
        setIsLoading(true); // Show loading skeleton while data is being fetched
        try {
            const response = await fetch(`https://catfact.ninja/fact`);
            const data = await response.json();
            setFact(data.fact);
        } catch (err) {
            console.error(`Error displaying: ${err}`);
        } finally {
            setIsLoading(false); // End loading state after fetch is complete
        }
    };

    // Fetch fact when the component mounts
    useEffect(() => {
        catFact();
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-96">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Did you know?</h2>

                {isLoading ? (
                    <div className="space-y-4">
                        <Skeleton count={3} height={20} />
                        <Skeleton height={100} />
                    </div>
                ) : (
                    <p className="text-center text-lg text-gray-700">{fact}</p>
                )}

                <button 
                    onClick={catFact} 
                    className={`mt-6 w-full py-3 text-white font-semibold rounded-lg 
                    ${isLoading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Check Another Fact'}
                </button>
            </div>
        </div>
    );
};

export default CatFact;
