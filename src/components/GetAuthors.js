import React, {useState, useEffect} from 'react'
import axios from 'axios';

const GetAuthors = () => {

    // A state variable authors and a function that updates it. 
    // fetch data will be initialized to an empty array.
    const [authors, setAuthors] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("");
    
    useEffect(() => {
    fetchAuthors();
   }, []);

//const queryParam = new URLSearchParams() 
const fetchAuthors = () => {
    axios
        .get('https://openlibrary.org/authors/OL23919A/works.json')
        .then((res) => {
      //      console.log(res);
            setAuthors(res.data.entries);
        })
        .catch((err) => {
            console.log(err);
        });
};
/**
 * Function handleSearchChange gets called every time the input field changes
 * @param {*} e sets the state to the data from the input field 
 */ 
const handleSearchChange = (e) => {
    setSelectedFilter(e.target.value);
    //console.log(e.target.value);
};
/**
 * Filter data from authors using 
 * 1. If the user did not search for anything, display everything
 * 2. If param added, return only those values from the list
 */
const filtered = !selectedFilter
    ? authors  // empty
    : authors.filter((author) => {
        console.log(author.title.toLowerCase())
        return author.title.toLowerCase().includes(selectedFilter.toLowerCase())
    });
/**
 * if(obj.length > 0)
else 
setError("no data was found")

<p>{error}</p>
 */
    return(
        <div>
            <input type="text" value = {selectedFilter} onChange= {handleSearchChange} />
            <h1>Featured list</h1>
            { filtered.map((author)=> {
                return(
                    <p>{author.title}</p>
                );
            }
            )}
        </div>
    )
}

export default GetAuthors;