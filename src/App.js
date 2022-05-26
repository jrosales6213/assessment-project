import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StudentCard from './StudentCard';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

console.log(data)
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.hatchways.io/assessment/students`
        );
        setData(response.data.students);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  
  const filteredStudents = data.filter(student =>
    student.firstName.toLowerCase().includes(search.toLowerCase()) || student.lastName.toLowerCase().includes(search.toLowerCase()));


  return (
   <div className="container">
     <div className ="card-container">
       <SearchBar setSearch={setSearch} search={search} tag={tag} setTag={setTag}/>
     
    { filteredStudents.map((student, index) =>  <StudentCard key={student.id} allStudents={student} email={student.email} company={student.company}  city={student.city} pic={student.pic} skill={student.skill} grades={student.grades} />)}
     </div>
     </div>
  )
}
export default App;
