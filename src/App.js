import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StudentCard from './StudentCard';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  



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

  return (
    <>
    <StudentCard  props={data}/>
    </>
  
  )
}
export default App;
