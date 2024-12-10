import React, { useEffect, useState } from 'react'


const UseEffects = () => {
    const [users, setUsers] = useState([])
    const ApiFetch = async (user) => {
        try {
            const Apilink = await fetch(`https://randomuser.me/api/?results=${user}`)
            const response = await Apilink.json()
            setUsers(response.results)
        }
        catch (error) {
            console.log("Error while loading:" + error)
        }
    }
    useEffect(() => {
        ApiFetch(10)
    }, [])
    return (
        <div style={{
            textAlign:"center"
        }}>
            {
                users.map((user, idx) => {
                    return (
                        <div key={idx} style={{ textAlign: "center", width: "30%", margin: "auto" }}>
                            <img src={user.picture.medium} alt="" />
                            <h1>{user.name.title} {user.name.last} {user.name.first} ({user.gender})</h1>
                            <p> Here is my phone number: {user.phone}</p>
                            <hr />

                        </div>
                    )
                })
            }
            <button onClick={()=>ApiFetch(10)}>Find Date</button>
        </div>
    )
}

export default UseEffects
