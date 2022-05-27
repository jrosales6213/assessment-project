import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StudentCard from './StudentCard';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  // const [students, setStudents] = useState("");
  const [students, setStudents] = useState([]);
  const [tag, setTag] = useState("");
  // const [tagInput, setTagInput] = useState([])
  const [ searchWord, setSearchWord ] = useState("");
  const [ searchTag, setSearchTag ] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  console.log(tag)

  // student.tags.toLowerCase().includes(search.toLowerCase())
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://api.hatchways.io/assessment/students`
  //       );
  //       setData(response.data.students);
  //       setError(null);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getData();
  // }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.hatchways.io/assessment/students`
        );
        addKeyTag(response.data)
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

// Refactor AddKeytag function before submiiting
  function addKeyTag(data) {
    const newStudents = [...data.students]
    for (let student of newStudents) {
      student.tags = [];
    }
    setStudents(newStudents)
  }

  function addNewTag(id, tag) {
    const studentList = [...students];
    for (let student of studentList) {
      if(id === student.id) {
        student.tags.push(tag)
      }
    }
    setStudents(studentList)
  }


//   function hasTag (tags, searchTag) {
//     const checkTag = searchTag.toLowerCase();

//    for(let tag of tags) {
//        if (checkTagHelper(tag.toLowerCase(),checkTag)) return true
//    }
//    return false
// }


// function filterTags(array) {
 
//   } 
// }
// const mapIsDone = students.map((tag) => tag.tags)
function mapOver (element){
for (let tags of element) {
  return tags.tags;
}
}
console.log(mapOver(students))


  const filteredStudents = students.filter(student =>
    student.firstName.toLowerCase().includes(search.toLowerCase()) || student.lastName.toLowerCase().includes(search.toLowerCase()));
 

    // Add Tag function
   
  return (
   <div className="container">
     <div className ="card-container">
       <SearchBar setSearch={setSearch} setSearchTag={setSearchTag} setTag={setTag} tag={tag}  />
       {/* <StudentCard  students={students} searchTag={searchTag} search={search} setStudents={setStudents} addNewTag={addNewTag}/>  */}
     
    { filteredStudents.map((student, index) =>  <StudentCard key={student.id} allStudents={student} email={student.email} company={student.company}  city={student.city} pic={student.pic} skill={student.skill} grades={student.grades} tag={student.tags} addNewTag={addNewTag}/>)}
     </div>
     </div>
  )
}
export default App;
