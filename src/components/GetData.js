import react, { useEffect, useState } from 'React';

export default function GetData(){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => console.log(response));
    }, []);

    return <div className='App'>App</div>;
}