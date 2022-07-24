import React, {useState, useEffect} from 'react';
import axios from 'axios';

const authorList = () => {
	const [author, setAuthor] = useState([]);
useEffect(() => {
	fetchAuthorList();
}, []);
const fetchAuthorList = () =>{
	axios
		.get('https://openlibrary.org/authors/OL1394244A/works.json?offset=50')
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};
return(
	<div>
		<h1>feature authorList</h1>
	</div>
	);
};
export default Homescreen;

/**
const Homescreen = (props) => {
	// API for get request using fetch
	let fetchData = fetch('https://openlibrary.org/authors/OL1394244A/works.json?offset=50');
	// Returns a promise (then) that returns the data of format XML or JSON. 
	fetchData.then(res => res.json()).then(d =>{
		console.log(d); 
	})
	const fetchDataShow = fetchData.map((index) => <p> {index.title}</p>)
	//const allName = props.authorList.map((index) => <p> {index.name} </p>);
	//console.log(allName);
	return (
	<div> 
	 {fetchDataShow}
	</div>
	)};

export default Homescreen;
// <h1>{props.authorList1[0].name}</h1>
// {allName}

 */ 