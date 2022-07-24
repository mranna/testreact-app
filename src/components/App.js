import './App.css';
import GetAuthors from './GetAuthors';
import GetData from './GetData';
import SearchFilter from './SearchFilter';

function App() {
	
const authorList = [
	{
		id : "1",
		name: "Hemanth",
	},
	{
		id : "2",
		name: "Anil",
	},
];
// props 
// props.authorlist1
  return (
	  <div>
		<GetData />
	  </div>
  );
}
// <Homescreen authorList = {authorList}/>
export default App;
