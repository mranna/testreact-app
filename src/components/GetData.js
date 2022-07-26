import React, { useState, useEffect } from 'react';

const UsingFetch = () =>{
    const [users, setUsers] = useState([]);
    const id = 1;

    const fetchData = () =>{
        fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
            .then(response =>{
                return response.json()
            })
            .then(data =>{
                setUsers(data[0].name)
            })
    }

    useEffect(()=>{
        fetchData()
    },[])

    return <div>Name: {users}</div>
    // return (
    //     <div>
    //         <button onClick={fetchData}>Fetch Data</button>
    //         {users.map(user =>(
    //             <p>{user.address.street}</p>
    //         ))}
    //     </div>
    // )
}
export default UsingFetch;
