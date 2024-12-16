import React, { useContext } from 'react'
import MyContext from './Context'

const User = () => {
    const { state, setState } = useContext(MyContext)
    const updateState = () => {
        setState('Updated State');
    };
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={updateState}>Change State</button>
        </div>
    )
}

export default User
