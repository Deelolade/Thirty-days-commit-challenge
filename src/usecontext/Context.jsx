import React, { createContext, useState } from 'react'

const MyContext = createContext()


export const MyProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const [state, setState] = useState('Hello, World! ');
    const changeTheme = ()=>{
        setTheme(prev => prev === "light" ? "dark": "light")
    }
    return (
        <MyContext.Provider value={{state, setState ,theme, changeTheme}}>
            {children}
        </MyContext.Provider>
    )
}


export default MyContext
