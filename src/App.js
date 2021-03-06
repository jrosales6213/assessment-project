import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import StudentCard from "./Components/StudentCard";
import SearchBar from "./Components/SearchBar";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([]);
  const [tag, setTag] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.hatchways.io/assessment/students`
        );
        newDataKey(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  function gradeReducer(grades) {
    return grades.reduce((a, b) => a + parseInt(b), 0) / grades.length;
  }

  // Suggestion: Careful not to directly mutate nested values when updating state.
  function newDataKey(data) {
    const tagKey = [...data.students];
    for (let student of tagKey) {
      student.tags = [];
    }
    setStudents(tagKey);
  }

  function addNewTag(id, tag) {
    const studentData = [...students];
    for (let student of studentData) {
      if (id === student.id) {
        student.tags.push(tag);
      }
    }
    setStudents(studentData);
  }

// filter firstname, lastname , tag
  const studentFilter = students
    .filter(
      (student) =>
        student.firstName.toLowerCase().includes(search.toLowerCase()) ||
        student.lastName.toLowerCase().includes(search.toLowerCase())
    )
    .filter((student) => {
      if (tag != "") {
        return student.tags.find((tagItem) => tagItem.includes(tag));
      }
      return true;
    });

  return (
    <div className="container">
      <div className="card-container">
        <SearchBar
          setSearch={setSearch}
          setSearchTag={setSearchTag}
          setTag={setTag}
          tag={tag}
        />
        {studentFilter.map((student) => (
          <StudentCard
            key={student.id}
            studentList={student}
            email={student.email}
            company={student.company}
            city={student.city}
            pic={student.pic}
            skill={student.skill}
            grades={student.grades}
            tag={student.tags}
            firstName={student.firstName}
            lastName={student.lastName}
            addNewTag={addNewTag}
            studentGrades={student.grades}
            gradeReducer={gradeReducer}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
