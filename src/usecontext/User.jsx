import React, { useContext } from 'react'
import MyContext from './Context'

const User = () => {
    const { state, setState, theme, changeTheme } = useContext(MyContext)
    const updateState = () => {
        setState('Updated State');
    };
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={updateState}>Change State</button>

            <div style={{ backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
                <h1>current: {theme}</h1>
                <button onClick={changeTheme}>change theme</button>
            </div>
        </div>
    )
}

export default User
