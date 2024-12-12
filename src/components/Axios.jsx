import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const Axios = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value); // Update state with selected option
    };
    const [input, setInput] = useState('')

    const { data: User, isLoading, isError, refetch } = useQuery(
        {
            queryKey: ["users"],
            queryFn: async () => {
                const response = await axios.get(`https://randomuser.me/api/?results=${input}`)
                return response.data.results
            },
            onSuccess: () => {
                console.log("Data fetched successfully")
            },
            onError: (err) => {
                console.error("Error fetching data", err)
            }
        }

    )
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Error fetching data</h1>
    }
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <div>
            {
                User && User.length > 0 ?
                    User.map((user, idx) => {
                        return (
                            <div key={idx}>
                                <h4>{user.name.last}</h4>
                                <h4>{user.name.first}</h4>
                                <img src={user.picture.thumbnail} alt="" />
                            </div>
                        )
                    }) :
                    <p>No users available</p>
            }
            <input type="text"
                value={input}
                onChange={handleInputChange}
            />
            <button onClick={refetch}>refetch</button>
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </select>
        </div>
    )
}

export default Axios;
