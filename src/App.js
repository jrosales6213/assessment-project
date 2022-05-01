import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StudentCard from './StudentCard';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  // console.log(data.students?.map(student => student.pic))
 // Keep getting error undefined. but ? adding helped. 
  // const display = data.students?.map(student => <img src={student.pic} href="profile-pic"/>);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // useEffect(() => {
  //   fetch(`https://api.hatchways.io/assessment/students`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.hatchways.io/assessment/students`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  // useEffect(() => {
  //   const fetchData =() => {
  //     fetch(
  //       "https://api.hatchways.io/assessment/students"
  //     )
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(
  //             `This is an HTTP error: The status is ${response.status}`
  //           );
  //         }
  //         return response.json();
  //       })
  //       .then((actualData) => {
  //         setData(actualData);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //         console.log(error);

  //       });
  //   };
  //   fetchData();
  // }, [])
  return (
    <>
    <StudentCard  data={data}/>
    </>
    

    // <StudentCard data={data}/>
  )
}
export default App;
