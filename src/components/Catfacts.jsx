import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import Skeleton styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

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
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card shadow-sm" style={{ width: '24rem' }}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Did you know?</h2>

                    {isLoading ? (
                        <div className="skeleton-container">
                            <Skeleton count={3} height={20} />
                            <Skeleton height={100} />
                        </div>
                    ) : (
                        <p className="card-text text-center fs-5">{fact}</p>
                    )}

                    <button 
                        onClick={catFact} 
                        className="btn btn-success w-100 mt-4"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Check Another Fact'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CatFact;
