import React, { useEffect, useState } from 'react'
import Skeleton from "react-loading-skeleton";

const catfact = () => {
    const [fact, setFact] = useState('')
    const catFact = async () => {
        try {
            const catFactUrl = await fetch(`https://catfact.ninja/fact`)
            const response = await catFactUrl.json()
            setFact(response.fact)

        }
        catch (err) {
            console.log("Error displaying" + err)
        }

    }
    useEffect(() => {
        catFact()
    }, [])
    return (
        <div>
            {
                fact === '' ?<div class="skeleton-container">
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-image"></div>
                <div class="skeleton skeleton-text"></div>
            </div> : fact 
            }

            <h1>{fact ? `Do you know that ${fact}` : <p> loading......</p>}</h1>
            <button onClick={catFact}> check fact</button>
        </div>
    )
}

export default catfact
