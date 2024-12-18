import React, { useState, useContext } from 'react'
import MyContext from './Context'

const Login = () => {
    const { state, setState, theme } = useContext(MyContext)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [value, setValue] = useState("")
    const [isClicked, setIsClicked] = useState(false)
    const directChange = () => {
        setIsClicked(true)
    }
    const handleChange = () => {
        setState(password)
        // setValue(` password: ${password} username:${userName}`)
    }
    return (
        <div style={{ background: theme === "light" ? "white" : "#333", color: theme === "light" ? "grey" : "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <input type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='username'
            />
            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
            <button onClick={handleChange} className='border border-zinc-700'>click state</button>
            <br /><br /><br />
            {value}
            <br />
            <button onClick={directChange} className='border border-zinc-700'>display change</button>
            {
                isClicked ?
                    <div>
                        <p>password: {password}</p>
                        <p>Username: {userName}</p>
                    </div> :
                    null
            }



            <br />
            <br />
            <br />
            {state}
        </div>
    )
}

export default Login
